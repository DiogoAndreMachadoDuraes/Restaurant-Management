import React, { useState, useEffect } from "react";
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
import MaterialTable from 'material-table';
import Header from "../../shared/header/index";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
});

class NutritionalInformation extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nutritionalInformation:[],
            newData:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Nutritional Information...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOC0yNiAxNzo1MjoxNiJ9._IB4GGt7IzLjqzBTfLzOz65HSZJM4gsPMNSJvihW49M";
        try {
            let response = await fetch('/Info_nutricional', { 
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
            this.setState({ 
                nutritionalInformation: json
            });
            console.log(json);
        } catch(e){
            console.log("Error to get Nutritional Information: " + e);
        }
    }

    add = async () => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Info_nutricional', { 
                method: 'POST',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'tipo': newData.type,
                    'quantidade_nutrientes': newData.quantityNutri,
                    'id_produto': newData.productId,
                    'id_extra': newData.extraId
                })
            });
            alert("Coluna inserida com sucesso!");
        } catch(e){
            console.log("Error to Post Nutritional Information: " + e);
        }
    }

    update = async (nutritionalInformationID) => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Info_nutricional', { 
                method: 'PUT',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_info_nutricional': nutritionalInformationID,
                    'tipo': newData.type,
                    'quantidade_nutrientes': newData.quantityNutri,
                    'id_produto': newData.productId,
                    'id_extra': newData.extraId
                })
            });
            alert("Coluna modificada com sucesso!");
        } catch(e){
            console.log("Error to Put Nutritional Information: " + e);
        }
    }

    delete = async (nutritionalInformationID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Info_nutricional', { 
                method: 'DELETE',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_info_nutricional': nutritionalInformationID
                })
            });
            alert("Coluna eliminada com sucesso!");
        } catch(e){
            console.log("Error to Delete Nutritional Information: " + e);
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

    render(){
        const { nutritionalInformation } = this.state;
        const { classes } = this.props;
        const columns= [
            { title: 'Tipo', field: 'type',  /* lookup: rowData => [rowData.type], defaultFilter: rowData => [rowData.type], */ align:"center"},
            { title: 'Quantidade de Nutrientes', field: 'quantityNutri', validate: rowData => rowData.quantityNutri === '' ? 'A quantidade de nutrientes não pode ser nula' : '', align:"center"},
            { title: 'Id do Produto', field: 'productId', type: 'numeric', validate: rowData=>rowData.productId === 0 ? {isValid: false, helperText: 'A identificação do produto não pode ser 0'} : true, align:"center" },
            { title: 'Id do Extra', field: 'extraId', type: 'numeric', validate: rowData=>rowData.extraId=== 0 ? {isValid: false, helperText: 'A identificação do extra não pode ser 0'} : true, align:"center" }
        ];

        const data = nutritionalInformation.map((item) => {
            return { nutritionalInformationId: item.id_info_nutricional, type: item.tipo, quantityNutri: item.quantidade_nutrientes, productId: item.id_produto, extraId: item.id_extra};
        });;

        const tableRef = React.createRef();
        return (
            <div className="root">
                <AppBar position="absolute" className={classes.appBar}>
                    <Header></Header>
                </AppBar>
                <div className="list">
                    <Divider />
                    <Drawer variant="permanent">
                        <List style={{marginTop: 100}}>
                            <ListPages/>
                        </List>
                    </Drawer>
                </div>
                <main className={"content"}>
                    <div className={"appBarSpacer"} />
                    <Container maxWidth="lg" className={"container"} style={{marginTop: 100}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                            <Paper elevation={3} className={"paper"}>
                                <MaterialTable
                                    title="Tabela da Informação Nutricional"
                                    tableRef={tableRef}
                                    columns={columns}
                                    data={data}
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
                                                if(newData.quantityNutri==null || newData.productId==null || newData.extraId==null) {
                                                    alert('Nenhum dos valores inseridos pode ser nulo!');
                                                    reject();
                                                }else{
                                                    if(newData.quantityNutri<0 || newData.productId<0 || newData.extraId<0) {
                                                        alert('Nenhum dos valores inseridos pode ser negativo!');
                                                        reject();
                                                    }else{
                                                        if(Number.isInteger(newData.quantityNutri)==false){
                                                            alert('A quantidade nutrientes tem de ser do tipo inteiro!');
                                                            reject();
                                                        }else{
                                                            if(Number.isInteger(newData.productId)==false){
                                                                alert('O id do produto tem de ser do tipo inteiro!');
                                                                reject();
                                                            }else{
                                                                if(Number.isInteger(newData.extraId)==false){
                                                                    alert('O id do extra tem de ser do tipo inteiro!');
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
                                                if(newData.quantityNutri==null || newData.productId==null || newData.extraId==null) {
                                                    alert('Nenhum dos valores inseridos pode ser nulo!');
                                                    reject();
                                                }else{
                                                    if(newData.quantityNutri<0 || newData.productId<0 || newData.extraId<0) {
                                                        alert('Nenhum dos valores inseridos pode ser negativo!');
                                                        reject();
                                                    }else{
                                                        if(Number.isInteger(newData.quantityNutri)==false){
                                                            alert('A quantidade nutrientes tem de ser do tipo inteiro!');
                                                            reject();
                                                        }else{
                                                            if(Number.isInteger(newData.productId)==false){
                                                                alert('O id do produto tem de ser do tipo inteiro!');
                                                                reject();
                                                            }else{
                                                                if(Number.isInteger(newData.extraId)==false){
                                                                    alert('O id do extra tem de ser do tipo inteiro!');
                                                                    reject();
                                                                }else{
                                                                    setTimeout(() => {
                                                                        const dataUpdate = [...data];
                                                                        const index = oldData.tableData.id;
                                                                        dataUpdate[index] = newData;
                                                                        this.setState({
                                                                            newData: newData
                                                                        });
                                                                        const nutritionalInformationID=newData.nutritionalInformationId;
                                                                        resolve();
                                                                        this.update(nutritionalInformationID);
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
                                                    const nutritionalInformationID = oldData.nutritionalInformationId;
                                                    resolve();
                                                    this.delete(nutritionalInformationID);
                                                }, 1000)
                                        }),
                                    }}
                                />
                            </Paper>
                            </Grid>
                        </Grid>
                        <Box pt={4}>
                            {this.Copyright}
                        </Box>
                    </Container>
                </main>
            </div>
        )
    }
}
NutritionalInformation.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withRouter(withStyles(styles)(NutritionalInformation));