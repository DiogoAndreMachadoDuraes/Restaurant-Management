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

class WeeklyMeal extends React.Component {
    constructor(props){
        super(props);
        this.state={
            weeklyMeal:[],
            newData:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Weekly Meal...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOC0yNiAxNzo1MjoxNiJ9._IB4GGt7IzLjqzBTfLzOz65HSZJM4gsPMNSJvihW49M";
        try {
            let response = await fetch('/Refeicao_semanal', { 
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
            this.setState({ 
                weeklyMeal: json
            });
            console.log(json);
        } catch(e){
            console.log("Error to Get Weekly Meal: " + e);
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
            let response = await fetch('/Refeicao_semanal', { 
                method: 'POST',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'dia_semana': newData.weekDay,
                    'data': newData.date,
                    'hora': newData.hour,
                    'id_restaurante': newData.restaurantId,
                    'id_ementa': newData.specialMenuId 
                })
            });
            alert("Coluna inserida com sucesso!");
        } catch(e){
            console.log("Error to Post Weekly Meal: " + e);
        }
    }

    update = async (weeklyMealID) => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Refeicao_semanal', { 
                method: 'PUT',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_refeicao_semanal': weeklyMealID,
                    'dia_semana': newData.weekDay,
                    'data': newData.date,
                    'hora': newData.hour,
                    'id_restaurante': newData.restaurantId,
                    'id_ementa': newData.specialMenuId 
                })
            });
            alert("Coluna modificada com sucesso!");
        } catch(e){
            console.log("Error to Put Weekly Meal: " + e);
        }
    }

    delete = async (weeklyMealID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Refeicao_semanal', { 
                method: 'DELETE',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_refeicao_semanal': weeklyMealID,
                })
            });
            alert("Coluna eliminada com sucesso!");
        } catch(e){
            console.log("Error to Delete Weekly Meal: " + e);
        }
    }

    render(){
        const { weeklyMeal } = this.state;
        const {classes} = this.props;
        const columns= [
            { title: 'Dia da semana', field: 'weekDay', validate: rowData => rowData.weekDay === '' ? 'O Nome não pode ser nulo' : '', align:"center" },
            { title: 'Data', field: 'data', type: 'date', align:"center"},
            { title: 'Hora', field: 'hour', type: 'time', align:"center"},
            { title: 'Id do Restaurante', field: 'restaurantId', type: 'numeric', align:"center" },
            { title: 'Id da Ementa', field: 'specialMenuId', type: 'numeric', align:"center" },
        ];
        const data = weeklyMeal.map((item) => {
            return { weeklyMealId: item.id_refeicao_semanal, weekDay: item.dia_semana, data: item.data, hour: item.hora, restaurantId: item.id_restaurante, specialMenuId: item.id_ementa};
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
                                        title="Tabela das Refeições Semanais"
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
                                                    if(newData.weekDay==null || newData.date==null || newData.hour==null || newData.restaurantId==null || newData.specialMenuId==null) {
                                                        alert('Nenhum dos valores inseridos pode ser nulo!');
                                                        reject();
                                                    }else{
                                                        if(newData.weekDay.lenght<0 || newData.restaurantId<0 || newData.specialMenuId<0 ) {
                                                            alert('A quantidade, o preço e/ou a foto não pode ser negativo!');
                                                            reject();
                                                        }else{
                                                            if(Number.isInteger(newData.restaurantId)==false){
                                                                alert('A identificação do restaurante tem de ser do tipo inteiro!');
                                                                reject();
                                                            }else{
                                                                if(Number.isInteger(newData.specialMenuId)==false){
                                                                    alert('A identificação da ementa tem de ser do tipo inteiro!');
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
                                                    if(newData.weekDay==null || newData.date==null || newData.hour==null || newData.restaurantId==null || newData.specialMenuId==null) {
                                                        alert('Nenhum dos valores inseridos pode ser nulo!');
                                                        reject();
                                                    }else{
                                                        if(newData.weekDay.lenght<0 || newData.restaurantId<0 || newData.specialMenuId<0 ) {
                                                            alert('A quantidade, o preço e/ou a foto não pode ser negativo!');
                                                            reject();
                                                        }else{
                                                            if(Number.isInteger(newData.restaurantId)==false){
                                                                alert('A identificação do restaurante tem de ser do tipo inteiro!');
                                                                reject();
                                                            }else{
                                                                if(Number.isInteger(newData.specialMenuId)==false){
                                                                    alert('A identificação da ementa tem de ser do tipo inteiro!');
                                                                    reject();
                                                                }else{
                                                                    setTimeout(() => {
                                                                        const dataUpdate = [...data];
                                                                        const index = oldData.tableData.id;
                                                                        dataUpdate[index] = newData;
                                                                        this.setState({
                                                                            newData: newData
                                                                        });
                                                                        const reservationID=newData.reservationId;
                                                                        resolve();
                                                                        this.update(reservationID);
                                                                    }, 1000)
                                                                }
                                                            }
                                                        }
                                                    }
                                            }),
                                            onRowDelete: oldData =>
                                                new Promise((resolve, reject) => {
                                                    setTimeout(() => {
                                                        const reservationID = oldData.reservationId;
                                                        resolve();
                                                        this.delete(reservationID);
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
WeeklyMeal.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withRouter(withStyles(styles)(WeeklyMeal));