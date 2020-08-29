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

class BuyMenu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            buyMenu:[],
            newData:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Buy Menu...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOC0yNiAxNzo1MjoxNiJ9._IB4GGt7IzLjqzBTfLzOz65HSZJM4gsPMNSJvihW49M";
        try {
            let response = await fetch('/Compra_menu', { 
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
            this.setState({ 
                buyMenu: json
            });
            console.log(json);
        } catch(e){
            console.log("Error to get data: " + e);
        }
    }

    add = async () => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Compra_menu', { 
                method: 'POST',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'quantidade': newData.quantity,
                    'preco': newData.price,
                    'id_menu': newData.menuId,
                    'id_reserva': newData.reservationId 
                })
            });
            alert("Coluna inserida com sucesso!");
        } catch(e){
            console.log("Error to Post Buy Menu: " + e);
        }
    }

    update = async (buyMenuID) => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Compra_menu', { 
                method: 'PUT',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_compra_menu': buyMenuID,
                    'quantidade': newData.quantity,
                    'preco': newData.price,
                    'id_menu': newData.menuId,
                    'id_reserva': newData.reservationId 
                })
            });
            alert("Coluna modificada com sucesso!");
        } catch(e){
            console.log("Error to Put Buy Menu: " + e);
        }
    }

    delete = async (buyMenuID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Compra_menu', { 
                method: 'DELETE',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_compra_menu': buyMenuID
                })
            });
            alert("Coluna eliminada com sucesso!");
        } catch(e){
            console.log("Error to Delete Buy Menu: " + e);
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
        const { buyMenu } = this.state;
        const {classes} = this.props;
        const columns= [
            { title: 'Quantidade', field: 'quantity', type: 'numeric', validate: rowData=>rowData.quantity === 0 ? {isValid: false, helperText: 'A quantidade da compra não pode ser 0'} : true, align:"center"},
            { title: 'Preço', field: 'price', type: 'numeric', validate: rowData=>rowData.price === 0 ? {isValid: false, helperText: 'O preço não pode ser 0'} : true, align:"center" },
            { title: 'Id do menu', field: 'menuId', type: 'numeric', validate: rowData=>rowData.menuId=== 0 ? {isValid: false, helperText: 'A identificação do menu não pode ser 0'} : true, align:"center" },
            { title: 'Id da Reserva', field: 'reservationId', type: 'numeric', validate: rowData=>rowData.reservationId === 0 ? {isValid: false, helperText: 'A identificação da reserva não pode ser 0'} : true, align:"center" }
        ];
        const data = buyMenu.map((item) => {
            return { buyMenuId: item.id_compra_menu, quantity: item.quantidade, price: item.preco, menuId: item.id_menu, reservationId: item.id_reserva};
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
                                        title="Tabela de Compras do Menu"
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
                                                    if(newData.quantity==null || newData.price==null || newData.menuId==null || newData.reservationId==null) {
                                                        alert('Nenhum dos valores inseridos pode ser nulo!');
                                                        reject();
                                                    }else{
                                                        if(newData.quantity<0 || newData.price<0 || newData.menuId<0 || newData.reservationId<0) {
                                                            alert('A quantidade, o preço e/ou as identificações não pode ser negativo!');
                                                            reject();
                                                        }else{
                                                            if(Number.isInteger(newData.quantity)==false){
                                                                alert('A quantidade tem de ser do tipo inteiro!');
                                                                reject();
                                                            }else{
                                                                if(Number.isInteger(newData.menuId)==false){
                                                                    alert('A identificação do menu tem de ser do tipo inteiro!');
                                                                    reject();
                                                                }else{
                                                                    if(Number.isInteger(newData.reservationId)==false){
                                                                        alert('A identificação da reserva tem de ser do tipo inteiro!');
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
                                                    if(newData.quantity==null || newData.price==null || newData.menuId==null || newData.reservationId==null) {
                                                        alert('Nenhum dos valores inseridos pode ser nulo!');
                                                        reject();
                                                    }else{
                                                        if(newData.quantity<0 || newData.price<0 || newData.menuId<0 || newData.reservationId<0) {
                                                            alert('A quantidade, o preço e/ou as identificações não pode ser negativo!');
                                                            reject();
                                                        }else{
                                                            if(Number.isInteger(newData.quantity)==false){
                                                                alert('A quantidade tem de ser do tipo inteiro!');
                                                                reject();
                                                            }else{
                                                                if(Number.isInteger(newData.menuId)==false){
                                                                    alert('A identificação do menu tem de ser do tipo inteiro!');
                                                                    reject();
                                                                }else{
                                                                    if(Number.isInteger(newData.reservationId)==false){
                                                                        alert('A identificação da reserva tem de ser do tipo inteiro!');
                                                                        reject();
                                                                    }else{
                                                                        setTimeout(() => {
                                                                            const dataUpdate = [...data];
                                                                            const index = oldData.tableData.id;
                                                                            dataUpdate[index] = newData;
                                                                            this.setState({
                                                                                newData: newData
                                                                            });
                                                                            const buyMenuID=newData.buyMenuId;
                                                                            resolve();
                                                                            this.update(buyMenuID);
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
                                                        const buyMenuID = oldData.buyMenuId;
                                                        resolve();
                                                        this.delete(buyMenuID);
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
BuyMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withRouter(withStyles(styles)(BuyMenu));