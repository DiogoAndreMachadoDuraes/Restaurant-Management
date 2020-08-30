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

class Extra extends React.Component {
    constructor(props){
        super(props);
        this.state={
            extra:[],
            newData:[]
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

    render(){
        const { extra } = this.state;
        const { classes } = this.props;
        const columns= [
            { title: 'Nome', field: 'name', validate: rowData => rowData.name === '' ? 'O nome não pode ser nulo' : '', align:"center"},
            { title: 'Tipo', field: 'type',  /* lookup: rowData => [rowData.type], defaultFilter: rowData => [rowData.type], */ align:"center"},
            { title: 'Foto', field: 'photo', render: rowData => <img src={rowData.photo} style={{width: '50%', borderRadius: '20%'}}/>, align:"center"},
            { title: 'Preço (€)', field: 'price', validate: rowData => rowData.birthYear <= 0 ? 'O preço não pode ser negativo' : '', type: "numeric", align:"center"}
        ];

        const data = extra.map((item) => {
            return { extraId: item.id_extra, name: item.nome, type: item.tipo, photo: item.foto, price: item.preco};
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
                                        title="Tabela de Extras"
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
Extra.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withRouter(withStyles(styles)(Extra));