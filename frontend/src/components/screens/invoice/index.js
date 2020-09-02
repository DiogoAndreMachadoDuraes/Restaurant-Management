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

class Invoice extends React.Component {
    constructor(props){
        super(props);
        this.state={
            invoice:[],
            newData:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Invoice...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOC0yNiAxNzo1MjoxNiJ9._IB4GGt7IzLjqzBTfLzOz65HSZJM4gsPMNSJvihW49M";
        try {
            let response = await fetch('/Fatura', { 
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
            console.log("Error to get Invoice: " + e);
        }
    }

    add = async () => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Fatura', { 
                method: 'POST',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'iva': newData.vat,
                    'taxa': newData.rate,
                    'valor_total': newData.totalValue,
                    'nif_cliente': newData.tinId,
                    'id_reserva': newData.reservationId
                })
            });
            alert("Coluna inserida com sucesso!");
        } catch(e){
            console.log("Error to Post Invoice: " + e);
        }
    }

    update = async (invoiceID) => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Fatura', { 
                method: 'PUT',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_fatura': invoiceID,
                    'iva': newData.vat,
                    'taxa': newData.rate,
                    'valor_total': newData.totalValue,
                    'nif_cliente': newData.tin,
                    'id_reserva': newData.reservationId
                })
            });
            alert("Coluna modificada com sucesso!");
        } catch(e){
            console.log("Error to Put Invoice: " + e);
        }
    }

    delete = async (invoiceID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Fatura', { 
                method: 'DELETE',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_fatura': invoiceID
                })
            });
            alert("Coluna eliminada com sucesso!");
        } catch(e){
            console.log("Error to Delete Invoice: " + e);
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
        const { invoice } = this.state;
        const { classes } = this.props;
        const columns= [
            { title: 'Iva', field: 'vat', validate: rowData => rowData.vat === '' ? 'O iva não pode ser nulo' : '', align:"center"},
            { title: 'Taxa', field: 'rate', validate: rowData => rowData.rate === '' ? 'A taxa não pode ser nula' : '', align:"center"},
            { title: 'Valor Total', field: 'totalValue', validate: rowData => rowData.totalValue === '' ? 'O valor total não pode ser nulo' : '', align:"center"},
            { title: 'NIF do Cliente', field: 'tin', validate: rowData => rowData.tin === '' ? 'O NIF do cliente não pode ser nulo' : '', align:"center"},
            { title: 'Id da Reserva', field: 'reservationId', type: 'numeric', validate: rowData=>rowData.reservationId=== 0 ? {isValid: false, helperText: 'A identificação da reserva não pode ser 0'} : true, align:"center" }
        ];

        const data = invoice.map((item) => {
            return { invoiceId: item.id_fatura, vat: item.iva, rate: item.taxa, totalValue: item.valor_total, tin: item.nif_cliente, reservationId: item.id_reserva};
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
                                    title="Tabela das Faturas"
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
                                                if(newData.vat==null || newData.rate==null || newData.totalValue==null || newData.tin==null || newData.reservationId==null) {
                                                    alert('Nenhum dos valores inseridos pode ser nulo!');
                                                    reject();
                                                }else{
                                                    if(newData.vat<0 || newData.rate<0 || newData.totalValue<0 || newData.tin<0 || newData.reservationId<0) {
                                                        alert('Nenhum dos valores inseridos pode ser negativo!');
                                                        reject();
                                                    }else{
                                                        if(Number.isInteger(newData.tin)==false){
                                                            alert('O nif do cliente tem de ser do tipo inteiro!');
                                                            reject();
                                                        }else{
                                                            if(Number.isInteger(newData.reservationId)==false){
                                                                alert('O id da reserva tem de ser do tipo inteiro!');
                                                                reject();
                                                            }else{
                                                               {
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
                                                if(newData.vat==null || newData.rate==null || newData.totalValue==null || newData.tin==null || newData.reservationId==null) {
                                                    alert('Nenhum dos valores inseridos pode ser nulo!');
                                                    reject();
                                                }else{
                                                    if(newData.vat<0 || newData.rate<0 || newData.totalValue<0 || newData.tin<0 || newData.reservationId<0) {
                                                        alert('Nenhum dos valores inseridos pode ser negativo!');
                                                        reject();
                                                    }else{
                                                        if(Number.isInteger(newData.tin)==false){
                                                            alert('O nif do cliente tem de ser do tipo inteiro!');
                                                            reject();
                                                        }else{
                                                            if(Number.isInteger(newData.reservationId)==false){
                                                                alert('O id da reserva tem de ser do tipo inteiro!');
                                                                reject();
                                                            }else{
                                                               {
                                                                    setTimeout(() => {
                                                                        const dataUpdate = [...data];
                                                                        const index = oldData.tableData.id;
                                                                        dataUpdate[index] = newData;
                                                                        this.setState({
                                                                            newData: newData
                                                                        });
                                                                        const invoiceID=newData.invoiceId;
                                                                        resolve();
                                                                        this.update(invoiceID);
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
                                                    const invoiceID = oldData.invoiceId;
                                                    resolve();
                                                    this.delete(invoiceID);
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
Invoice.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withRouter(withStyles(styles)(Invoice));