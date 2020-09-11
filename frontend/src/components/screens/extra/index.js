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
            newData:[],
            aller:[],
            newData:[],
            newDataInfo:[],
            newDataAller:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Extra...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOC0yNiAxNzo1MjoxNiJ9._IB4GGt7IzLjqzBTfLzOz65HSZJM4gsPMNSJvihW49M";
        try {
            let response = await fetch('/Extra', { 
                headers: {
                    Autentication: 'Bearer ' + token,
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

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Extra', { 
                method: 'POST',
                headers: {
                    Autentication: 'Bearer ' + token,
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
        } catch(e){
            console.log("Error to Post extra: " + e);
        }
    }

    update = async (extraID) => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Extra', { 
                method: 'PUT',
                headers: {
                    Autentication: 'Bearer ' + token,
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
        } catch(e){
            console.log("Error to Put Extra: " + e);
        }
    }

    delete = async (extraID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Extra', { 
                method: 'DELETE',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_extra': extraID
                })
            });
            alert("Coluna eliminada com sucesso!");
        } catch(e){
            console.log("Error to Delete Extra: " + e);
        }
    }

    addInfo = async () => {
        const { newDataInfo } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
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
                    /* 'id_produto': newDataInfo.productId,
                    'id_extra': newDataInfo.extraId */
                })
            });
            alert("Coluna inserida com sucesso!");
            console.log(response);
        } catch(e){
            console.log("Error to Post Info Nutricional: " + e);
        }
    }

    updateInfo = async (infoID) => {
        const { newDataInfo } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
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
                    /* 'id_produto': newDataInfo.productId,
                    'id_extra': newDataInfo.extraId */
                })
            });
            alert("Coluna modificada com sucesso!");
        } catch(e){
            console.log("Error to Put Info Nutricional: " + e);
        }
    }

    deleteInfo = async (infoID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
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
        } catch(e){
            console.log("Error to Delete Info Nutricional: " + e);
        }
    }

    addAller = async () => {
        const { newDataAller } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
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
                    'id_produto': newDataInfo.productId */
                })
            });
            alert("Coluna inserida com sucesso!");
        } catch(e){
            console.log("Error to Post Alergenio: " + e);
        }
    }

    updateAller = async (allerID) => {
        const { newDataAller } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
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
                    'id_produto': newDataInfo.productId */
                })
            });
            alert("Coluna modificada com sucesso!");
        } catch(e){
            console.log("Error to Put Alergenio: " + e);
        }
    }

    deleteAller = async (allerID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
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
        } catch(e){
            console.log("Error to Delete Alergenio: " + e);
        }
    }

    showDetails(productId) {
        const { info, aller } = this.state;
        const columnsInfo= [
            { title: 'Tipo', field: 'type', lookup: { 'Calorias': 'Calorias', 'Gorduras': 'Gorduras', 'Carboidratos': 'Carboidratos', 'Proteína':'Proteína' }, align:"center"},
            { title: 'Quantidade de nutrientes', field: 'quantity', validate: rowData => rowData.quantity <= 0 ? 'A quantidade não pode ser 0 nem negativa' : '', type: "numeric", align:"center"}
        ];
        const infoProduct=info.filter(a=>a.id_produto==productId).map(a=>a);
        const dataInfo = infoProduct.map((item) => {
            return { infoId: item.id_info_nutricional, type: item.tipo, quantity: item.quantidade_nutrientes};
        });;
        const columnsAller= [
            { 
                title: 'Tipo', 
                field: 'type',  
                lookup: {'Glúten':'Glúten', 'Crustácios':'Crustácios', 'Ovos':'Ovos', 'Peixe':'Peixe', 'Amendoim':'Amendoim', 'Soja':'Soja', 'Lactose':'Lactose', 'Frutas de casca rija':'Frutas de casca rija', 'Aipo':'Aipo', 'Mostarda':'Mostarda', 'Sésamo':'Sésamo', 'Dióxido de enxofre e sulfitos':'Dióxido de enxofre e sulfitos', 'Tremoços':'Tremoços', 'Moluscos':'Moluscos'},
                align:"center"
            },
            { title: 'Descrição', field: 'description', validate: rowData => rowData.description === '' ? 'A descrição não pode ser nula' : '', align:"center"},
            { title: 'Foto', field: 'photo', render: rowData => <img src={rowData.photo} style={{width: '50%', borderRadius: '20%'}}/>, align:"center"}
        ];
        const allerProduct=aller.filter(a=>a.id_produto==1).map(a=>a);
        const dataAller= allerProduct.map((item) => {
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
                                if(newData.quantity==null || newData.type==null) {
                                    alert('Nenhum dos valores inseridos pode ser nulo!');
                                    reject();
                                }else{
                                    if(newData.quantity<0) {
                                        alert('A quantidade não pode ser 0!');
                                        reject();
                                    }else{
                                        if(Number.isInteger(newData.quantity)==false){
                                            alert('A quantidade tem de ser do tipo inteiro!');
                                            reject();
                                        }else{
                                            if(newData.type.lenght<0){
                                                alert('Tem de conter uma descrição!');
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
                                    }
                                }
                        }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                if(newData.quantity==null || newData.type==null) {
                                    alert('Nenhum dos valores inseridos pode ser nulo!');
                                    reject();
                                }else{
                                    if(newData.quantity<0) {
                                        alert('A quantidade não pode ser 0!');
                                        reject();
                                    }else{
                                        if(Number.isInteger(newData.quantity)==false){
                                            alert('A quantidade tem de ser do tipo inteiro!');
                                            reject();
                                        }else{
                                            if(newData.type.lenght<0){
                                                alert('Tem de conter uma descrição!');
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
                                    }
                                }
                        }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const infoID = oldData.infoId;
                                    resolve();
                                    this.deleteInfo(infoID);
                                }, 1000)
                            }),
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
                                    if(newData.type==null || newData.description==null || newData.photo==null) {
                                        alert('Nenhum dos valores inseridos pode ser nulo!');
                                        reject();
                                    }else{
                                        if(newData.quantity<0 || newData.price<0 || newData.photo<0 ) {
                                            alert('A quantidade, o preço e/ou a foto não pode ser negativo!');
                                            reject();
                                        }else{
                                            if(Number.isInteger(newData.quantity)==false){
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
                                                                newDataAller: newData
                                                            });
                                                            resolve();
                                                            this.addAller();
                                                        }, 1000)
                                                    }
                                                }
                                            }
                                        }
                                    }
                            }),
                            onRowUpdate: (newData, oldData) =>
                                new Promise((resolve, reject) => {
                                    if(newData.type==null || newData.description==null || newData.photo==null) {
                                        alert('Nenhum dos valores inseridos pode ser nulo!');
                                        reject();
                                    }else{
                                        if(newData.quantity<0 || newData.price<0 || newData.photo<0 ) {
                                            alert('A quantidade, o preço e/ou a foto não pode ser negativo!');
                                            reject();
                                        }else{
                                            if(Number.isInteger(newData.quantity)==false){
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
                                            }
                                        }
                                    }
                            }),
                            onRowDelete: oldData =>
                                new Promise((resolve, reject) => {
                                    setTimeout(() => {
                                        const allerID = oldData.allerId;
                                        resolve();
                                        this.deleteAller(allerID);
                                    }, 1000)
                                }),
                        }}
                    />
                </div>
            </div>
        )
    }

    render(){
        const { extra } = this.state;
        const columns= [
            { title: 'Nome', field: 'name', validate: rowData => rowData.name === '' ? 'O nome não pode ser nulo' : '', align:"center"},
            { title: 'Tipo', field: 'type',  /* lookup: rowData => [rowData.type], defaultFilter: rowData => [rowData.type], */ align:"center"},
            { title: 'Foto', field: 'photo', render: rowData => <img src={rowData.photo} style={{width: '50%', borderRadius: '20%'}}/>, align:"center"},
            { title: 'Preço (€)', field: 'price', validate: rowData => rowData.birthYear <= 0 ? 'O preço não pode ser negativo' : '', type: "numeric", align:"center"}
        ];

        const data = extra.map((item) => {
            return { extraId: item.id_extra, name: item.nome, type: item.tipo, photo: item.foto, price: item.preco};
        });;

        return (
            <StructurePage table={
                <OwnTable 
                    title="Tabela de Produtos" 
                    columns={columns}
                    data={data}
                    detailPanel={rowData => this.showDetails(1)}
                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                if(newData.quantity==null || newData.price==null || newData.photo==null) {
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
                        }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                if(newData.quantity==null || newData.price==null || newData.photo==null) {
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
                                            if(newData.photo.lenght<0){
                                                alert('Tem de conter uma foto!');
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
                                    }
                                }
                        }),
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