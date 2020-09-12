import React from "react";
import { withRouter } from "react-router-dom";
import {OwnTable} from "../../OwnTable";
import {SecoundTable} from "../../SecoundTable";
import {StructurePage} from "../../StructurePage";

const { createProxyMiddleware } = require('http-proxy-middleware');

class Extra extends React.Component {
    constructor(props){
        super(props);
        this.state={
            extra:[],
            info:[],
            aller:[],
            newData:[],
            newDataInfo:[],
            newDataAller:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Extra...");

        let token=localStorage.getItem("token");        
        try {
            let response = await fetch('/Extra', { 
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
            this.setState({ 
                extra: json
            });
            console.log(json);
        } catch(e){
            console.log("Error to Get Extra: " + e);
        }

        try {
            let response = await fetch('/Info_nutricional', 
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
                info: res
            });
        } catch(e){
            console.log("Error to get Info Nutricional: " + e);
        }

        try {
            let response = await fetch('/Alergenio', 
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
                aller: res
            });
        } catch(e){
            console.log("Error to get Alergenio: " + e);
        }
    }

    add = async () => {
        const { newData } = this.state;

        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Extra', { 
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'nome': newData.name,
                    'tipo': newData.type,
                    'foto': newData.photo,
                    'preco': newData.price
                })
            });
            alert("Coluna inserida com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Post extra: " + e);
        }
    }

    update = async (extraID) => {
        const { newData } = this.state;
        console.log(extraID);

        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Extra', { 
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_extra': extraID,
                    'nome': newData.name,
                    'tipo': newData.type,
                    'foto': newData.photo,
                    'preco': newData.price
                })
            });
            alert("Coluna modificada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Put Extra: " + e);
        }
    }

    delete = async (extraID) => {
        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Extra', { 
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_extra': extraID
                })
            });
            alert("Coluna eliminada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Delete Extra: " + e);
        }
    }

    addInfo = async () => {
        const { newDataInfo } = this.state;

        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Info_nutricional', { 
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'tipo': newDataInfo.type,
                    'quantidade_nutrientes': newDataInfo.quantity,
                    /* 'id_produto': newDataInfo.ExtraId,
                    'id_extra': newDataInfo.extraId */
                })
            });
            alert("Coluna inserida com sucesso!");
            window.location.reload();
            console.log(response);
        } catch(e){
            console.log("Error to Post Info Nutricional: " + e);
        }
    }

    updateInfo = async (infoID) => {
        const { newDataInfo } = this.state;

        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Info_nutricional', { 
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_info_nutricional': infoID,
                    'tipo': newDataInfo.type,
                    'quantidade_nutrientes': newDataInfo.quantity,
                    /* 'id_produto': newDataInfo.ExtraId,
                    'id_extra': newDataInfo.extraId */
                })
            });
            alert("Coluna modificada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Put Info Nutricional: " + e);
        }
    }

    deleteInfo = async (infoID) => {
        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Info_nutricional', { 
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_info_nutricional': infoID
                })
            });
            alert("Coluna eliminada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Delete Info Nutricional: " + e);
        }
    }

    addAller = async () => {
        const { newDataAller } = this.state;

        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Alergenio', { 
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'tipo': newDataAller.type,
                    'descicao': newDataAller.description,
                    'foto': newDataAller.photo,
                    /*'id_extra': newDataInfo.extraId,
                    'id_produto': newDataInfo.ExtraId */
                })
            });
            alert("Coluna inserida com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Post Alergenio: " + e);
        }
    }

    updateAller = async (allerID) => {
        const { newDataAller } = this.state;

        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Alergenio', { 
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_alergenio': allerID,
                    'tipo': newDataAller.type,
                    'descicao': newDataAller.description,
                    'foto': newDataAller.photo,
                    /*'id_extra': newDataInfo.extraId,
                    'id_produto': newDataInfo.ExtraId */
                })
            });
            alert("Coluna modificada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Put Alergenio: " + e);
        }
    }

    deleteAller = async (allerID) => {
        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Alergenio', { 
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_alergenio': allerID
                })
            });
            alert("Coluna eliminada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Delete Alergenio: " + e);
        }
    }

    testInfo(newData, resolve, reject){
        if(newData.quantity==null || newData.type==null) {
            alert('Nenhum dos valores inseridos pode ser nulo!');
            reject();
        }
        else{
            return true;
        }
    }

    testAller(newData, resolve, reject){
        if(newData.type==null || newData.description==null || newData.photo==null) {
            alert('Nenhum dos valores inseridos pode ser nulo!');
            reject();
        }
        else{
            return true;
        }
    }

    test(newData, resolve, reject){
        if(newData.type==null || newData.price==null || newData.photo==null || newData.name==null) {
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
                    if(newData.photo.length<0){
                        alert('Tem de conter uma foto!');
                        reject();
                    }else{
                        if(newData.type.length<5){
                            alert('Tipo tem de conter no mínimo 3 carateres!');
                            reject();
                        }else{
                            if(!/^[a-zA-Z áéíóúÁÉÍÓÚãÃõÕâÂêÊîÎôÔûÛçÇ]$/.test(newData.type)) {
                                alert('O tipo não é válido!');
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

    showDetails(extraId) {
        const { info, aller } = this.state;
        const columnsInfo= [
            { title: 'Tipo', field: 'type', lookup: { 'Calorias': 'Calorias', 'Gorduras': 'Gorduras', 'Carboidratos': 'Carboidratos', 'Proteína':'Proteína' }, align:"center"},
            { title: 'Quantidade de nutrientes', field: 'quantity', validate: rowData => rowData.quantity <= 0 ? { isValid: false, helperText: 'A quantidade não pode ser 0 nem negativa' } : true, type: "numeric", align:"center"}
        ];
        const infoExtra=info.filter(a=>a.id_extra==extraId).map(a=>a);
        const dataInfo = infoExtra.map((item) => {
            return { infoId: item.id_info_nutricional, type: item.tipo, quantity: item.quantidade_nutrientes};
        });;
        const columnsAller= [
            { 
                title: 'Tipo', 
                field: 'type',
                lookup: {'Glúten':'Glúten', 'Crustácios':'Crustácios', 'Ovos':'Ovos', 'Peixe':'Peixe', 'Amendoim':'Amendoim', 'Soja':'Soja', 'Lactose':'Lactose', 'Frutas de casca rija':'Frutas de casca rija', 'Aipo':'Aipo', 'Mostarda':'Mostarda', 'Sésamo':'Sésamo', 'Dióxido de enxofre e sulfitos':'Dióxido de enxofre e sulfitos', 'Tremoços':'Tremoços', 'Moluscos':'Moluscos'},
                align:"center"
            },
            { 
                title: 'Descrição', 
                field: 'description',
                lookup: {'Pode conter':'Pode conter', 'Contém':'Contém', 'Não contém':'Não contém'},
                align:"center"
            },
            { title: 'Foto', field: 'photo', validate: rowData => rowData.photo === '' ? { isValid: false, helperText: 'A foto não pode ser nula' } : true, render: rowData => <img src={rowData.photo} style={{width: '50%', borderRadius: '20%'}}/>, align:"center"}
        ];
        const allerExtra=aller.filter(a=>a.id_extra==extraId).map(a=>a);
        const dataAller= allerExtra.map((item) => {
            return { allerId: item.id_alergenio, type: item.tipo, description: item.descricao, photo: item.foto};
        });;
        return (
            <div style={{ marginTop: 20, marginLeft: 20, marginBottom: 20, marginInlineEnd: 20}}>
                <SecoundTable
                    title="Informação Nutricional"
                    columns={columnsInfo}
                    data={dataInfo}
                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                if(this.testInfo(newData, resolve, reject)!=true){
                                    reject();
                                }else{
                                    setTimeout(() => {
                                        this.setState({
                                            newDataInfo: newData
                                        });
                                        resolve();
                                        this.add();
                                    }, 100)
                                }
                            }
                        ),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                if(this.testInfo(newData, resolve, reject)!=true){
                                    reject();
                                }else{
                                    setTimeout(() => {
                                        const dataUpdate = [...dataInfo];
                                        const index = oldData.tableData.id;
                                        dataUpdate[index] = newData;
                                        this.setState({
                                            newDataInfo: newData
                                        });
                                        const infoID=newData.infoID;
                                        resolve();
                                        this.update(infoID);
                                    }, 1000)
                                }
                            }
                        ),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const infoID = oldData.infoId;
                                    resolve();
                                    this.deleteInfo(infoID);
                                }, 1000)
                            }
                        ),
                    }}
                />
                <div style={{ marginTop: 20}}>
                    <SecoundTable
                        title="Alergénio"
                        columns={columnsAller}
                        data={dataAller}
                        editable={{
                            onRowAdd: newData =>
                                new Promise((resolve, reject) => {
                                    if(this.testAller(newData, resolve, reject)!=true){
                                        reject();
                                    }else{
                                        setTimeout(() => {
                                            this.setState({
                                                newDataAller: newData
                                            });
                                            resolve();
                                            this.addAller();
                                        }, 1000)
                                    }
                                }
                            ),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    if(this.testAller(newData, resolve, reject)!=true){
                                        reject();
                                    }else{
                                        setTimeout(() => {
                                            const dataUpdate = [...dataAller];
                                            const index = oldData.tableData.id;
                                            dataUpdate[index] = newData;
                                            this.setState({
                                                newDataAller: newData
                                            });
                                            const allerID=newData.allerID;
                                            resolve();
                                            this.updateAller(allerID);
                                        }, 1000)
                                    }
                                }
                            ),
                            onRowDelete: oldData =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        const allerID = oldData.allerId;
                                        resolve();
                                        this.deleteAller(allerID);
                                    }, 1000)
                                }
                            ),
                        }}
                    />
                </div>
            </div>
        )
    }

    render(){
        const { extra } = this.state;
        const columns= [
            { title: 'Nome', field: 'name', validate: rowData => rowData.name === '' ? { isValid: false, helperText: 'O nome não pode ser nulo' } : true, align:"center"},
            { title: 'Tipo', field: 'type',  /* lookup: rowData => [rowData.type], defaultFilter: rowData => [rowData.type], */ align:"center"},
            { title: 'Foto', field: 'photo', render: rowData => <img src={rowData.photo} style={{width: '50%', borderRadius: '20%'}}/>, validate: rowData => rowData.photo === '' ? { isValid: false, helperText: 'A foto não pode ser nula' } : true, align:"center"},
            { title: 'Preço (€)', field: 'price', validate: rowData => rowData.price <= 0 ?  { isValid: false, helperText: 'O preço não pode ser negativo' } : true, type: "numeric", align:"center"}
        ];

        const data = extra.map((item) => {
            return { extraId: item.id_extra, name: item.nome, type: item.tipo, photo: item.foto, price: item.preco};
        });;

        return (
            <StructurePage table={
                <OwnTable 
                    title="Tabela de Extras" 
                    columns={columns}
                    data={data}
                    detailPanel={rowData => this.showDetails(rowData.extraId)}
                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                if(this.test(newData, resolve, reject)!=true){
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
                        ),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                if(this.test(newData, resolve, reject)!=true){
                                    reject();
                                }else{
                                    setTimeout(() => {
                                        const dataUpdate = [...data];
                                        const index = oldData.tableData.id;
                                        dataUpdate[index] = newData;
                                        this.setState({
                                            newData: newData
                                        });
                                        const extraID=newData.extraId;
                                        resolve();
                                        this.update(extraID);
                                    }, 1000)
                                }
                            }
                        ),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const extraID = oldData.extraId;
                                    resolve();
                                    this.delete(extraID);
                                }, 1000)
                            }),
                        }}
                    />
                } 
            />
        )
    }
}

export default withRouter(Extra);