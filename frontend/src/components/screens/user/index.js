import React from "react";
import { withRouter } from "react-router-dom";
import {OwnTable} from "../../OwnTable";
import {SecoundTable} from "../../SecoundTable";
import {StructurePage} from "../../StructurePage";

const { createProxyMiddleware } = require('http-proxy-middleware');


class User extends React.Component {
    constructor(props){
        super(props);
        this.state={
            user:[],
            newData:[],
            client:[],
            newDataClient:[],
            invoice:[],
            newDataInvoice:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen User...");
        let token=localStorage.getItem("token");
        try {
            let response = await fetch('/Utilizador', { 
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
            this.setState({ 
                user: json
            });
            console.log(json);
        } catch(e){
            console.log("Error to get User: " + e);
        }
    
        try {
            let response = await fetch('/Cliente', 
            { 
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let res = await response.json();
            console.log(res);
            this.setState({ 
                client: res
            });
        } catch(e){
            console.log("Error to get Client: " + e);
        }

        try {
            let response = await fetch('/Fatura', 
            { 
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let res = await response.json();
            console.log(res);
            this.setState({ 
                invoice: res
            });
        } catch(e){
            console.log("Error to get Invoice: " + e);
        }
}

    add = async () => {
        const { newData } = this.state;
        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Utilizador', { 
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'nif': newData.tin,
                    'nome': newData.name,
                    'data_nascimento': newData.dateBirth,
                    'sexo': newData.sex,
                    'telefone': newData.telephone,
                    'rua': newData.street,
                    'codigo_postal': newData.postalCode,
                    'localizacao': newData.localization,
                    'foto': newData.photo,
                    'email': newData.email,
                    'password': newData.password,
                    'tipo': newData.price
                })
            });
            alert("Coluna inserida com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Post User: " + e);
        }
    }

    update = async (userID) => {
        const { newData } = this.state;
        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Utilizador', { 
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_utilizador': newData.userID,
                    'nif': newData.tin,
                    'nome': newData.name,
                    'data_nascimento': newData.dateBirth,
                    'sexo': newData.sex,
                    'telefone': newData.telephone,
                    'rua': newData.street,
                    'codigo_postal': newData.postalCode,
                    'localizacao': newData.localization,
                    'foto': newData.photo,
                    'email': newData.email,
                    'password': newData.password,
                    'tipo': newData.type
                })
            });
            alert("Coluna modificada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Put User: " + e);
        }
    }

    delete = async (userID) => {
        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Utilizador', { 
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_utilizador': userID
                })
            });
            alert("Coluna eliminada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Delete User: " + e);
        }
    }

    addClient = async () => {
        const { newDataClient } = this.state;
        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Cliente', { 
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'numero_cartao': newDataClient.cardNumber,
                    'numero_compras': newDataClient.shopNumber,
                    /* 'id_utilizador': newDataClient.clientId,*/
                })
            });
            alert("Coluna inserida com sucesso!");
            window.location.reload();
            console.log(response);
        } catch(e){
            console.log("Error to Post Cliente: " + e);
        }
    }

    updateClient = async (clientID) => {
        const { newDataClient } = this.state;
        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Cliente', { 
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_cliente': clientID,
                    'numero_cartao': newDataClient.cardNumber,
                    'numero_compras': newDataClient.shopNumber,
                    /* 'id_utilizador': newDataClient.clientId,*/
                })
            });
            alert("Coluna modificada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Put Cliente: " + e);
        }
    }

    deleteClient = async (clientID) => {
        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Cliente', { 
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_cliente': clientID
                })
            });
            alert("Coluna eliminada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Delete Cliente: " + e);
        }
    }

    addInvoice = async () => {
        const { newDataInvoice } = this.state;
        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Fatura', { 
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'iva': newDataInvoice.iva,
                    'taxa': newDataInvoice.tax,
                    'valor_total': newDataInvoice.totalValue,
                    'nif_cliente': newDataInvoice.tin,
                    /* 'id_reserva': newDataInvoice.invoiceId,*/
                })
            });
            alert("Coluna inserida com sucesso!");
            window.location.reload();
            console.log(response);
        } catch(e){
            console.log("Error to Post Fatura: " + e);
        }
    }

    updateInvoice = async (invoiceID) => {
        const { newDataInvoice } = this.state;
        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Fatura', { 
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_fatura': invoiceID,
                    'iva': newDataInvoice.iva,
                    'taxa': newDataInvoice.tax,
                    'valor_total': newDataInvoice.totalValue,
                    'nif_cliente': newDataInvoice.tin,
                    /* 'id_reserva': newDataInvoice.invoiceId,*/
                })
            });
            alert("Coluna modificada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Put Fatura: " + e);
        }
    }

    deleteInvoice = async (invoiceID) => {
        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Fatura', { 
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_fatura': invoiceID
                })
            });
            alert("Coluna eliminada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Delete Fatura: " + e);
        }
    }

    testClient(newData, resolve, reject){
        if(newData.cardNumber==null || newData.shopNumber==null) {
            alert('Nenhum dos valores inseridos pode ser nulo!');
            reject();
        }
        else{
            if(newData.shopNumber>=0 && newData.shopNumber<11){
                alert('O número de compras tem de ser entre 0 e 10!');
                reject();
            }else{
                if(newData.cardNumber>0){
                    alert('O número de cartão tem de ser positivo!');
                    reject();
                }else{
            return true;
                }
            }
        }
    }

    testInvoice(newData, resolve, reject){
        if(newData.iva==null || newData.tax==null || newData.totalValue==null || newData.tin==null) {
            alert('Nenhum dos valores inseridos pode ser nulo!');
            reject();
        }
        else{
            if(newData.tax.length<4){
                alert('A taxa tem de conter no mínimo 3 carateres!');
                reject();
            }else{
                if(newData.iva>=0){
                    alert('O iva tem de ser positivo!');
                    reject();
                }else{
                    if(newData.totalValue>=0){
                        alert('O valor total tem de conter no mínimo 3 carateres!');
                        reject();
                    }else{
                        if(newData.tin.length==9){
                            alert('O nif tem de conter no mínimo 9 carateres!');
                            reject();
                        }else{
            return true;
                        }
                    }
                }
            }
        }
    }

    test(newData, resolve, reject){
        if(newData.tin==null || newData.name==null || newData.dateBirth==null || newData.sex==null || newData.telephone==null || newData.street==null || newData.postalCode==null || newData.localization==null || newData.photo==null || newData.email==null || newData.password==null || newData.type==null){
            alert('Nenhum dos valores inseridos pode ser nulo!');
            reject();
        }else{
            if(/^[a-zA-Z áéíóúÁÉÍÓÚãÃõÕâÂêÊîÎôÔûÛçÇ]$/.test(newData.name)) {
                alert('O nome não é válido!');
                reject();
            }else{
                if(newData.name.length<3){
                    alert('O nome tem de conter no mínimo 3 carateres!');
                    reject();
                }else{
                    if(newData.dateBirth.length>=18){
                        alert('O registo tem de ser acessado pela idade maior ou iguala 18 anos');
                        reject();
                    }else{
                        if(newData.tin.length==9){
                            alert('O nif tem de conter no mínimo 9 carateres!');
                            reject();
                        }else{
                            if(!/^[0-9+]*$/.test(newData.telephone)){
                                alert('O telefone não pode conter certos caratéres especiais');
                                reject();
                            }else{
                                if(newData.telephone.length < 9 || newData.telephone.length > 13){
                                    alert('O telefone tem de conter no mínimo 9 e no máximo 13 carateres');
                                    reject();
                                }else{
                    if(newData.photo.length<0){
                        alert('Tem de conter uma foto!');
                        reject();
                    }else{
                        if(/^[a-zA-Z áéíóúÁÉÍÓÚãÃõÕâÂêÊîÎôÔûÛçÇ]$/.test(newData.street)){
                            alert('A morada não pode conter certos caratéres especiais!');
                            reject();
                        }else{
                            if(newData.street.length < 8){
                                alert('A morada tem de conter no mínimo 8 carateres');
                                reject();
                            }else{
                                if(!/^[a-zA-Z áéíóúÁÉÍÓÚãÃõÕâÂêÊîÎôÔûÛçÇ]*$/.test(newData.localization)){
                                    alert('A localização não pode conter certos caratéres especiais');
                                    reject();
                                }else{
                                    if(newData.localization.length < 4){
                                        alert('A localização tem de conter no mínimo 4 carateres');
                                        reject();
                                    }else{
                                        if(newData.postalCode.length < 8){
                                            alert('O código postal tem de conter no mínimo 8 carateres');
                                            reject();
                                        }else{
                                            if(newData.email.length < 6){
                                                alert('O email tem de conter no mínimo 6 carateres');
                                                reject();
                                            }
                                            else{
                                                if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(newData.email)){
                                                    alert('O email não pode conter certos caratéres especiais');
                                                    reject();
                                                }else{
                                return true;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }       
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

    showDetails(userID , tin) {
        const { client, invoice } = this.state;
        const columnsClient= [
            { title: 'Número de Cartão', field: 'shopNumber', validate: rowData => rowData.shopNumber <= 0 ? { isValid: false, helperText: 'O cartão de cliente não pode ser nulo' } : true, type: "numeric", align:"center"},
            { title: 'Número de Compras', field: 'cardNumber', validate: rowData => rowData.cardNumber < 0 ? { isValid: false, helperText: 'O número de compras não pode ser nulo' } : true, type: "numeric", align:"center"}
        ];
        const clientUser=client.filter(a=>a.id_utilizador==userID).map(a=>a);
        const dataClient = clientUser.map((item) => {
            return { clientId: item.id_cliente, cardNumber: item.numero_cartao, shopNumber: item.numero_compras};
        });;

        const columnsInvoice= [
            { title: 'Iva', field: 'iva', validate: rowData => rowData.iva === '' ? { isValid: false, helperText: 'O iva não pode ser nulo' } : true , align:"center"},
            { title: 'Taxa', field: 'tax', validate: rowData => rowData.tax === '' ? { isValid: false, helperText: 'A taxa não pode ser nula' } : true , align:"center"},
            { title: 'Valor total €', field: 'totalValue', validate: rowData => rowData.totalValue === '' ? { isValid: false, helperText: 'O valor total não pode ser nulo' } : true , align:"center"},
            { title: 'Nif do Cliente', field: 'tin', validate: rowData => rowData.tin === '' ?{ isValid: false, helperText: 'O nif do cliente não pode ser nulo' } : true, align:"center"}
        ];
        const invoiceUser=invoice.filter(a=>a.nif_cliente==tin).map(a=>a);
        console.log(invoiceUser);
        const dataInvoice= invoiceUser.map((item) => {
            return { invoiceId: item.id_fatura, iva: item.iva, tax: item.taxa, totalValue: item.valor_total, tin: item.nif_cliente};
        });;
    
    return (
        <div style={{ marginTop: 20, marginLeft: 20, marginBottom: 20, marginInlineEnd: 20}}>
            <SecoundTable
                title="Cliente"
                columns={columnsClient}
                data={dataClient}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            if(this.testClient(newData, resolve, reject)!=true){
                                    reject();
                                }else{
                                            setTimeout(() => {
                                                this.setState({
                                                    newDataClient: newData
                                                });
                                                resolve();
                                                this.addClient();
                                            }, 100)
                                        }
                    }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            if(this.testClient(newData, resolve, reject)!=true){
                                    reject();
                                }else{
                                            setTimeout(() => {
                                                const dataUpdate = [...client];
                                                const index = oldData.tableData.id;
                                                dataUpdate[index] = newData;
                                                this.setState({
                                                    newDataClient: newData
                                                });
                                                const clientID=newData.clientId;
                                                resolve();
                                                this.updateClient(clientID);
                                            }, 1000)
                                        }
                    }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const clientID = oldData.clientId;
                                resolve();
                                this.deleteClient(clientID);
                            }, 1000)
                        }),
                    }}
                />
                <div style={{ marginTop: 20}}>
                    <SecoundTable
                        title="Fatura"
                        columns={columnsInvoice}
                        data={dataInvoice}
                        editable={{
                            onRowAdd: newData =>
                                new Promise((resolve, reject) => {
                                    if(this.testInvoice(newData, resolve, reject)!=true){
                                    reject();
                                }else{
                                            setTimeout(() => {
                                            this.setState({
                                            newDataInvoice: newData
                                            });
                                            resolve();
                                            this.addInvoice();
                                            }, 1000)
                                        }                                            
                            })
                        }}
                    />
                </div>
            </div>
        )
    }

    render(){
        const { user } = this.state;
        const columns= [
            { title: 'NIF do Cliente', field: 'tin', validate: rowData => rowData.tin === '' ? { isValid: false, helperText: 'O nif do cliente não pode ser nulo' } : true, align:"center"},
            { title: 'Nome', field: 'name', validate: rowData => rowData.name === '' ? { isValid: false, helperText: 'O nome não pode ser nulo' } : true, align:"center"},
            { title: 'Data de nascimento', field: 'dateBirth', validate: rowData => rowData.dateBirth === '' ? { isValid: false, helperText: 'A data de nascimento não pode ser nula' } : true, align:"center"},
            { title: 'Género', field: 'sex',  lookup: { 'Feminino': 'Feminino', 'Masculino': 'Masculino', 'Indefinido':'Indefinido' },  align:"center"},
            { title: 'Telefone', field: 'telephone', validate: rowData => rowData.telephone === '' ? { isValid: false, helperText: 'O telefone não pode ser nulo' } : true, align:"center"},
            { title: 'Rua', field: 'street', validate: rowData => rowData.street === '' ? { isValid: false, helperText: 'A rua não pode ser nula' } : true, align:"center"},
            { title: 'Localização', field: 'localization', validate: rowData => rowData.localization === '' ? { isValid: false, helperText: 'A localização não pode ser nulo' } : true, align:"center"},
            { title: 'Foto', field: 'photo', render: rowData => <img src={rowData.photo} style={{width: '50%', borderRadius: '20%'}}/>, validate: rowData => rowData.photo === '' ? { isValid: false, helperText: 'A foto não pode ser nula' } : true, align:"center"},
            { title: 'Email', field: 'email', validate: rowData => rowData.email === '' ? { isValid: false, helperText: 'O email não pode ser nulo' } : true, align:"center"},
            { title: 'Tipo', field: 'type',  lookup: { 'Administrador': 'Administrador', 'Funcionário': 'Funcionário', 'Cliente':'Cliente' },  align:"center"}
        ];
        const data = user.map((item) => {
            return { userId: item.id_utilizador, tin: item.nif, name: item.nome, dateBirth: item.data_nascimento, sex: item.sexo, telephone: item.telefone, street: item.rua, postalCode: item.codigo_postal, localization: item.localizacao, photo: item.foto, email: item.email, password: item.password, type: item.tipo};
        });;
        return (
            <StructurePage table={
                <OwnTable 
                    title="Tabela dos Utilizadores"
                    columns={columns}
                    data={data}
                    detailPanel={rowData => this.showDetails(rowData.userId, rowData.tin)}
                    editable={{   
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            if(this.test(newData, resolve, reject)!=true){
                                    reject();
                                }else{
                                                setTimeout(() => {
                                                    const dataUpdate = [...user];
                                                    const index = oldData.tableData.id;
                                                    dataUpdate[index] = newData;
                                                    this.setState({
                                                        newData: newData
                                                    });
                                                    const userID=newData.userId;
                                                    resolve();
                                                    this.update(userID);
                                                }, 1000)
                                }
                    }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const userID = oldData.userId;
                                    resolve();
                                    this.delete(userID);
                                }, 1000)
                            }),
                        }}
                    />
                } 
            />
        )
    }
}

export default withRouter(User);