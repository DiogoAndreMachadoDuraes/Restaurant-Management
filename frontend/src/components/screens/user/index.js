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

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0xNCAyMDozODo0MiJ9.BbUHpKWZCH-3tcUaCDN0iKhs5saeDwDGnGSQLlqU53c";
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

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
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
        } catch(e){
            console.log("Error to Post User: " + e);
        }
    }

    update = async (userID) => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
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
        } catch(e){
            console.log("Error to Put User: " + e);
        }
    }

    delete = async (userID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
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
        } catch(e){
            console.log("Error to Delete User: " + e);
        }
    }

    addClient = async () => {
        const { newDataClient } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
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
            console.log(response);
        } catch(e){
            console.log("Error to Post Cliente: " + e);
        }
    }

    updateClient = async (clientID) => {
        const { newDataClient } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
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
        } catch(e){
            console.log("Error to Put Cliente: " + e);
        }
    }

    deleteClient = async (clientID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
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
        } catch(e){
            console.log("Error to Delete Cliente: " + e);
        }
    }

    addInvoice = async () => {
        const { newDataInvoice } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
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
            console.log(response);
        } catch(e){
            console.log("Error to Post Fatura: " + e);
        }
    }

    updateInvoice = async (invoiceID) => {
        const { newDataInvoice } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
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
        } catch(e){
            console.log("Error to Put Fatura: " + e);
        }
    }

    deleteInvoice = async (invoiceID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
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
                    'id_cliente': invoiceID
                })
            });
            alert("Coluna eliminada com sucesso!");
        } catch(e){
            console.log("Error to Delete Fatura: " + e);
        }
    }

    showDetails(userID) {
        const { client, invoice } = this.state;
        const columnsClient= [
            { title: 'Número de Cartão', field: 'shopNumber', validate: rowData => rowData.shopNumber <= 0 ? 'O número de cartão não pode ser 0 nem negativo' : '', type: "numeric", align:"center"},
            { title: 'Número de Compras', field: 'cardNumber', validate: rowData => rowData.cardNumber < 0 ? 'O número de compras não pode ser negativo' : '', type: "numeric", align:"center"}
        ];
        const clientUser=client.filter(a=>a.id_utilizador==userID).map(a=>a);
        const dataClient = clientUser.map((item) => {
            return { clientId: item.id_cliente, cardNumber: item.numero_cartao, shopNumber: item.numero_compras};
        });;

        const columnsInvoice= [
            { title: 'Iva', field: 'iva', validate: rowData => rowData.iva === '' ? 'O iva não pode ser nulo' : '', align:"center"},
            { title: 'Taxa', field: 'tax', validate: rowData => rowData.tax === '' ? 'A taxa não pode ser nula' : '', align:"center"},
            { title: 'Valor total', field: 'totalValue', validate: rowData => rowData.totalValue === '' ? 'O valor total não pode ser nulo' : '', align:"center"},
            { title: 'Nif do Cliente', field: 'tin', validate: rowData => rowData.tin === '' ? 'O nif do cliente não pode ser nulo' : '', align:"center"}
        ];
        const invoiceUser=invoice.filter(a=>a.id_utilizador==1).map(a=>a);
        const dataInvoice= invoiceUser.map((item) => {
            return { invoiceId: item.id_fatura, iva: item.iva, tax: item.taxa, valueTotal: item.valor_total};
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
                            if(newData.cardNumber==null || newData.shopNumber==null) {
                                alert('Nenhum dos valores inseridos pode ser nulo!');
                                reject();
                            }else{
                                    if(Number.isInteger(newData.cardNumber)==false){
                                        alert('O número de cartão tem de ser do tipo inteiro!');
                                        reject();
                                    }else{
                                        if(Number.isInteger(newData.shopNumber)==false){                                            
                                            alert('O número de compras tem de ser do tipo inteiro!');
                                            reject();
                                        }else{
                                            setTimeout(() => {
                                                this.setState({
                                                    newDataMeal: newData
                                                });
                                                resolve();
                                                this.addClient();
                                            }, 100)
                                        }
                                    }
                            }
                    }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            if(newData.cardNumber==null || newData.shopNumber==null) {
                                alert('Nenhum dos valores inseridos pode ser nulo!');
                                reject();
                            }else{
                                    if(Number.isInteger(newData.cardNumber)==false){
                                        alert('O número de cartão tem de ser do tipo inteiro!');
                                        reject();
                                    }else{
                                        if(Number.isInteger(newData.shopNumber)==false){                                            
                                            alert('O número de compras tem de ser do tipo inteiro!');
                                            reject();
                                        }else{
                                            setTimeout(() => {
                                                const dataUpdate = [...client];
                                                const index = oldData.tableData.id;
                                                dataUpdate[index] = newData;
                                                this.setState({
                                                    newDataClient: newData
                                                });
                                                const clientID=newData.clientID;
                                                resolve();
                                                this.updateClient(clientID);
                                            }, 1000)
                                        }
                                    }
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
                                    if(newData.iva==null || newData.tax==null || newData.valueTotal==null || newData.tin==null) {
                                        alert('Nenhum dos valores inseridos pode ser nulo!');
                                        reject();
                                    }else{
                                        if(newData.iva<0 || newData.tax<0 || newData.valueTotal<0 || newData.tin<0 ) {
                                            alert('O iva, a taxa, o valor total e/ou o nif do cliente não pode ser negativo!');
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
                                    }
                            }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    if(newData.iva==null || newData.tax==null || newData.valueTotal==null || newData.tin==null) {
                                        alert('Nenhum dos valores inseridos pode ser nulo!');
                                        reject();
                                    }else{
                                        if(newData.iva<0 || newData.tax<0 || newData.valueTotal<0 || newData.tin<0 ) {
                                            alert('O iva, a taxa, o valor total e/ou o nif do cliente não pode ser negativo!');
                                            reject();
                                            
                                                    }else{
                                                        setTimeout(() => {
                                                            const dataUpdate = [...invoice];
                                                            const index = oldData.tableData.id;
                                                            dataUpdate[index] = newData;
                                                            this.setState({
                                                                newDataInvoice: newData
                                                            });
                                                            const invoiceID=newData.invoiceID;
                                                            resolve();
                                                            this.updateInvoice(invoiceID);
                                                        }, 1000)
                                                    }
                                                }
                            }),
                            onRowDelete: oldData =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        const invoiceID = oldData.invoiceId;
                                        resolve();
                                        this.deleteInvoice(invoiceID);
                                    }, 1000)
                                }),
                        }}
                    />
                </div>
            </div>
        )
    }

        


    render(){
        const { user } = this.state;
        const {classes} = this.props;
        const columns= [
            { title: 'NIF do Cliente', field: 'tin', validate: rowData => rowData.tin === '' ? 'O NIF do cliente não pode ser nulo' : '', align:"center"},
            { title: 'Nome', field: 'name', validate: rowData => rowData.name === '' ? 'O nome não pode ser nulo' : '', align:"center"},
            { title: 'Data de nascimento', field: 'dateBirth', validate: rowData => rowData.dateBirth === '' ? 'A data de nascimento não pode ser nula' : '', align:"center"},
            { title: 'Sexo', field: 'sex', validate: rowData => rowData.sex === '' ? 'O sexo não pode ser nulo' : '', align:"center"},
            { title: 'Telefone', field: 'telephone', validate: rowData => rowData.telephone === '' ? 'O telefone do cliente não pode ser nulo' : '', align:"center"},
            { title: 'Rua', field: 'street', validate: rowData => rowData.street === '' ? 'A rua não pode ser nula' : '', align:"center"},
            { title: 'Localização', field: 'localization', validate: rowData => rowData.localization === '' ? 'A localização não pode ser nula' : '', align:"center"},
            { title: 'Foto', field: 'photo', render: rowData => <img src={rowData.photo} style={{width: '50%', borderRadius: '20%'}}/>, align:"center"},
            { title: 'Email', field: 'email', validate: rowData => rowData.email === '' ? 'O email não pode ser nulo' : '', align:"center"},
            { title: 'Password', field: 'password', validate: rowData => rowData.password === '' ? 'A password não pode ser nula' : '', align:"center"},
            { title: 'Tipo', field: 'type',  lookup: { 'Administrador': 'Administrador', 'Funcionário': 'Funcionário', 'Cliente':'Cliente' },  align:"center"}
        ];
        const data = user.map((item) => {
            return { userId: item.id_utilizador, tin: item.nif, name: item.nome, dateBirth: item.data_nascimento, sex: item.sexo, telephone: item.telefone, street: item.rua, postalCode: item.codigo_postal, localization: item.localizacao, photo: item.foto, email: item.email, password: item.password, type: item.tipo};
        });;
        const tableRef = React.createRef();
        return (
            <StructurePage table={
                <OwnTable 
                    title="Tabela dos Utilizadores"
                    tableRef={tableRef}
                    columns={columns}
                    data={data}
                    detailPanel={rowData => this.showDetails(1)}
                    editable={{
                        onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            if(newData.quantity==null || newData.price==null || newData.photo==null || newData.description==null) {
                                alert('Nenhum dos valores inseridos pode ser nulo!');
                                reject();
                            }else{
                                if(newData.quantity<0 || newData.price<0 || newData.photo<0 ) {
                                    alert('A quantidade, o preço e/ou a foto não pode ser negativo!');
                                    reject();
                                }else{
                                    if(Number.isInteger(newData.quantidade)==false){
                                        alert('A quantidade tem de ser do tipo inteiro!');
                                        reject();
                                    }else{
                                        if(newData.description.lenght<0){
                                            alert('Tem de conter uma descrição!');
                                            reject();
                                        }else{
                                            if(newData.photo.lenght<0){
                                                alert('Tem de conter uma foto!');
                                                reject();
                                            }else{
                                                setTimeout(() => {
                                                    this.setState({
                                                        newData: newData
                                                    });
                                                    resolve();
                                                    this.add();
                                                }, 1000)
                                            }
                                        }
                                    }
                                }
                            }
                    }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            if(newData.quantity==null || newData.price==null || newData.photo==null || newData.description==null) {
                                alert('Nenhum dos valores inseridos pode ser nulo!');
                                reject();
                            }else{
                                if(newData.quantity<0 || newData.price<0 || newData.photo<0 ) {
                                    alert('A quantidade, o preço e/ou a foto não pode ser negativo!');
                                    reject();
                                }else{
                                    if(Number.isInteger(newData.quantidade)==false){
                                        alert('A quantidade tem de ser do tipo inteiro!');
                                        reject();
                                    }else{
                                        if(newData.description.lenght<0){
                                            alert('Tem de conter uma descrição!');
                                            reject();
                                        }else{
                                            if(newData.photo.lenght<0){
                                                alert('Tem de conter uma foto!');
                                                reject();
                                            }else{
                                                setTimeout(() => {
                                                    const dataUpdate = [...user];
                                                    const index = oldData.tableData.id;
                                                    dataUpdate[index] = newData;
                                                    this.setState({
                                                        newData: newData
                                                    });
                                                    const userID=newData.userID;
                                                    resolve();
                                                    this.update(userID);
                                                }, 1000)
                                            }
                                        }
                                    }
                                }
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