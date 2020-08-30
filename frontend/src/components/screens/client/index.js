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

class Client extends React.Component {
    constructor(props){
        super(props);
        this.state={
            client:[],
            newData:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Account...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try {
            let response = await fetch('/Cliente', { 
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            let json = await response.json();
            this.setState({ 
                client: json
            });
        } catch(e){
            console.log("Error to get client: " + e);
        }
    }

    add = async () => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Cliente', { 
                method: 'POST',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'numero_cartao': newData.cartNumber,
                    'numero_compras': newData.shopNumber,
                    'id_utilizador': newData.userId 
                })
            });
            alert("Coluna inserida com sucesso!");
        } catch(e){
            console.log("Error to Post Client: " + e);
        }
    }

    update = async (clientID) => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Cliente', { 
                method: 'PUT',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_cliente': clientID,
                    'numero_cartao': newData.cartNumber,
                    'numero_compras': newData.shopNumber,
                    'id_utilizador': newData.userId 
                })
            });
            alert("Coluna modificada com sucesso!");
        } catch(e){
            console.log("Error to Put Client: " + e);
        }
    }

    delete = async (clientID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Cliente', { 
                method: 'DELETE',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_cliente': clientID,
                })
            });
            alert("Coluna eliminada com sucesso!");
        } catch(e){
            console.log("Error to Delete Client: " + e);
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
        const { client } = this.state;
        const {classes} = this.props;
        const columns= [
            { title: 'Numero Cartao', field: 'cartNumber', type: 'numeric', validate: rowData=>rowData.cartNumber === 0 ? {isValid: false, helperText: 'O número de cartão pode ser 0'} : true, align:"center"},
            { title: 'Número de compras', field: 'shopNumber', type: 'numeric', align:"center" },
            { title: 'Id de utilizador', field: 'userId', type: 'numeric', validate: rowData=>rowData.userId === 0 ? {isValid: false, helperText: 'A identificação do utilizador não pode ser 0'} : true, align:"center" }
        ];
        const data = client.map((item) => {
            return { clientId: item.id_cliente, cartNumber: item.numero_cartao, shopNumber: item.numero_compras, userId: item.id_utilizador};
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
                                    title="Tabela de Clientes"
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
                                                if(newData.cartNumber==null || newData.shopNumber==null || newData.userId==null) {
                                                    alert('Nenhum dos valores inseridos pode ser nulo!');
                                                    reject();
                                                }else{
                                                    if(newData.cartNumber<0 || newData.shopNumber<0 || newData.userId<0) {
                                                        alert('Nenhum dos valores inseridos pode ser negativo!');
                                                        reject();
                                                    }else{
                                                        if(Number.isInteger(newData.cartNumber)==false){
                                                            alert('O cartão tem de ser do tipo inteiro!');
                                                            reject();
                                                        }else{
                                                            if(Number.isInteger(newData.shopNumber)==false){
                                                                alert('O número de compras tem de ser do tipo inteiro!');
                                                                reject();
                                                            }else{
                                                                if(Number.isInteger(newData.userId)==false){
                                                                    alert('A identificação do utilizador tem de ser do tipo inteiro!');
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
                                                if(newData.cartNumber==null || newData.shopNumber==null || newData.userId==null) {
                                                    alert('Nenhum dos valores inseridos pode ser nulo!');
                                                    reject();
                                                }else{
                                                    if(newData.cartNumber<0 || newData.shopNumber<0 || newData.userId<0) {
                                                        alert('Nenhum dos valores inseridos pode ser negativo!');
                                                        reject();
                                                    }else{
                                                        if(Number.isInteger(newData.cartNumber)==false){
                                                            alert('O cartão tem de ser do tipo inteiro!');
                                                            reject();
                                                        }else{
                                                            if(Number.isInteger(newData.shopNumber)==false){
                                                                alert('O número de compras tem de ser do tipo inteiro!');
                                                                reject();
                                                            }else{
                                                                if(Number.isInteger(newData.userId)==false){
                                                                    alert('A identificação do utilizador tem de ser do tipo inteiro!');
                                                                    reject();
                                                                }else{
                                                                    setTimeout(() => {
                                                                        const dataUpdate = [...data];
                                                                        const index = oldData.tableData.id;
                                                                        dataUpdate[index] = newData;
                                                                        this.setState({
                                                                            newData: newData
                                                                        });
                                                                        const clientID=newData.clientId;
                                                                        resolve();
                                                                        this.update(clientID);
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
                                                    const clientID = oldData.clientId;
                                                    resolve();
                                                    this.delete(clientID);
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
Client.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withRouter(withStyles(styles)(Client));