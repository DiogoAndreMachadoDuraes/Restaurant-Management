import React from "react";
import { withRouter } from "react-router-dom";
import "./style.css";
import { ListPages } from "../../shared/listPages/index";
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from "../../shared/header/index";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

const { createProxyMiddleware } = require('http-proxy-middleware');
const drawerWidth = 250;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
});

class Product extends React.Component {
    constructor(props){
        super(props);
        this.state={
            product: [],
            info:[],
            aller:[],
            newData:[],
            newDataInfo:[],
            newDataAller:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Product...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0xNCAyMDozODo0MiJ9.BbUHpKWZCH-3tcUaCDN0iKhs5saeDwDGnGSQLlqU53c";
        try {
            let response = await fetch('/Produto', 
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
                product: res
            });
        } catch(e){
            console.log("Error to get Product: " + e);
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

    Copyright() {
        return (
        <Typography variant="body2" color="textSecondary" align="center" style={{marginTop: 20}}>
            {'Copyright © '}
            <Link color="inherit" href="https://sabordaavo.com/">
            Sabor da Avó
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        );
    }

    add = async () => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Produto', { 
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'nome': newData.name,
                    'descicao': newData.description,
                    'tipo': newData.type,
                    'foto': newData.photo,
                    'preco': newData.price
                })
            });
            alert("Coluna inserida com sucesso!");
        } catch(e){
            console.log("Error to Post Product: " + e);
        }
    }

    update = async (productID) => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Produto', { 
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_produto': productID,
                    'nome': newData.name,
                    'descicao': newData.description,
                    'tipo': newData.type,
                    'foto': newData.photo,
                    'preco': newData.price
                })
            });
            alert("Coluna modificada com sucesso!");
        } catch(e){
            console.log("Error to Put Product: " + e);
        }
    }

    delete = async (productID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Produto', { 
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_produto': productID
                })
            });
            alert("Coluna eliminada com sucesso!");
        } catch(e){
            console.log("Error to Delete Product: " + e);
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
        const { classes } = this.props;
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

        const tableRef = React.createRef();
        return (
            <div style={{ marginTop: 20, marginLeft: 20, marginBottom: 20, marginInlineEnd: 20}}>
                <MaterialTable
                    title="Informação Nutricional"
                    tableRef={tableRef}
                    columns={columnsInfo}
                    data={dataInfo}
                    options={{
                        actionsColumnIndex: -1,
                        search: false,
                        headerStyle: {
                            backgroundColor: 'black',
                            color: '#FFF'
                        },
                        paging:false
                    }}
                    localization={
                        { 
                            header: { actions: ""},
                            body:{
                                emptyDataSourceMessage: 'Não existe dados para mostar',
                                addTooltip: "Novo",
                                editTooltip: "Editar",
                                deleteTooltip: "Eliminar",
                                editRow: { deleteText: 'Tem a certeza que deseja eliminar?', cancelTooltip: 'Cancelar', saveTooltip: 'Guardar' }
                            },
                            toolbar: { searchTooltip: "Pesquisar", searchPlaceholder: "Procurar"},
                            pagination: { labelDisplayedRows: "{from}-{to} de {count}", firstTooltip: "Primeira Página", previousTooltip: "Página Anterior", nextTooltip: "Próxima Página", lastTooltip: "Última Página", labelRowsSelect:"registos"}
                        }
                    }
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
                <MaterialTable
                    title="Alergénios"
                    tableRef={tableRef}
                    columns={columnsAller}
                    data={dataAller}
                    options={{
                        actionsColumnIndex: -1,
                        search: false,
                        headerStyle: {
                            backgroundColor: 'black',
                            color: '#FFF'
                        }
                    }}
                    localization={
                        { 
                            header: { actions: ""},
                            body:{
                                emptyDataSourceMessage: 'Não existe dados para mostar',
                                addTooltip: "Novo",
                                editTooltip: "Editar",
                                deleteTooltip: "Eliminar",
                                editRow: { deleteText: 'Tem a certeza que deseja eliminar?', cancelTooltip: 'Cancelar', saveTooltip: 'Guardar' }
                            },
                            toolbar: { searchTooltip: "Pesquisar", searchPlaceholder: "Procurar"},
                            pagination: { labelDisplayedRows: "{from}-{to} de {count}", firstTooltip: "Primeira Página", previousTooltip: "Página Anterior", nextTooltip: "Próxima Página", lastTooltip: "Última Página", labelRowsSelect:"registos"}
                        }
                    }
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
        const { product } = this.state;
        const { classes } = this.props;
        const columns= [
            { title: 'Nome', field: 'name', validate: rowData => rowData.name === '' ? 'O nome não pode ser nulo' : '', align:"center"},
            { title: 'Descrição', field: 'description', validate: rowData => rowData.description === '' ? 'A descrição não pode ser nula' : '', align:"center"},
            { title: 'Tipo', field: 'type',  /* lookup: rowData => [rowData.type], defaultFilter: rowData => [rowData.type], */ align:"center"},
            { title: 'Foto', field: 'photo', render: rowData => <img src={rowData.photo} style={{width: '50%', borderRadius: '20%'}}/>, align:"center"},
            { title: 'Preço (€)', field: 'price', validate: rowData => rowData.birthYear <= 0 ? 'O preço não pode ser negativo' : '', type: "numeric", align:"center"}
        ];

        const data = product.map((item) => {
            return { productId: item.id_produto, name: item.nome, description: item.descricao, type: item.tipo, photo: item.foto, price: item.preco};
        });;

        const tableRef = React.createRef();

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Header/>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer} style={{marginTop: 25}}>
                        <div style={{marginTop: 50}}>
                            <ListPages/>
                        </div>
                    </div>
                </Drawer>
                <main className={classes.content}>
                    <Container maxWidth="lg" style={{marginTop: 150}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                            <Paper elevation={3}>
                                <MaterialTable
                                    title="Tabela de Produtos"
                                    tableRef={tableRef}
                                    columns={columns}
                                    data={data}
                                    detailPanel={rowData => this.showDetails(1)}
                                    actions={[
                                        {
                                            icon: 'refresh',
                                            tooltip: 'Recarregar',
                                            isFreeAction: true,
                                            onClick: () => tableRef.current && tableRef.current.componentDidMount()
                                        }
                                    ]}
                                    options={{
                                        actionsColumnIndex: -1,
                                        search: true
                                    }}
                                    localization={
                                        { 
                                            header: { actions: ""},
                                            body:{
                                                emptyDataSourceMessage: 'Não existe dados para mostar',
                                                addTooltip: "Novo",
                                                editTooltip: "Editar",
                                                deleteTooltip: "Eliminar",
                                                editRow: { deleteText: 'Tem a certeza que deseja eliminar?', cancelTooltip: 'Cancelar', saveTooltip: 'Guardar' }
                                            },
                                            toolbar: { searchTooltip: "Pesquisar", searchPlaceholder: "Procurar"},
                                            pagination: { labelDisplayedRows: "{from}-{to} de {count}", firstTooltip: "Primeira Página", previousTooltip: "Página Anterior", nextTooltip: "Próxima Página", lastTooltip: "Última Página", labelRowsSelect:"registos"}
                                        }
                                    }
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
                                                                        const dataUpdate = [...data];
                                                                        const index = oldData.tableData.id;
                                                                        dataUpdate[index] = newData;
                                                                        this.setState({
                                                                            newData: newData
                                                                        });
                                                                        const productID=newData.productID;
                                                                        resolve();
                                                                        this.update(productID);
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
                                                    const productID = oldData.productId;
                                                    resolve();
                                                    this.delete(productID);
                                                }, 1000)
                                            }),
                                    }}
                                />
                            </Paper>
                            </Grid>
                        </Grid>
                        <Box pt={4} style={{paddingVertical: 80}}>
                            {this.Copyright}
                        </Box>
                    </Container>
                </main>
            </div>
        )
    }
}
Product.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withRouter(withStyles(styles)(Product));