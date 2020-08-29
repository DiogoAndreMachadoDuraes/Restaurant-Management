import React, {Component} from "react";
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

class Restaurant extends React.Component {
    constructor(props){
        super(props);
        this.state={
            restaurant:[],
            newData:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Restaurant...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOC0yNiAxNzo1MjoxNiJ9._IB4GGt7IzLjqzBTfLzOz65HSZJM4gsPMNSJvihW49M";
        try {
            let response = await fetch('/Restaurante', { 
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
            this.setState({ 
                restaurant: json
            });
            console.log(json);
        } catch(e){
            console.log("Error to Get Restaurant: " + e);
        }
    }

    Copyright() {
        return (
        <Typography variant="body2" color="textSecondary" align="center">
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
            let response = await fetch('/Restaurante', { 
                method: 'POST',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'nome': newData.name,
                    'rua': newData.street,
                    'codigo_postal': newData.postalCode,
                    'localizacao': newData.localization,
                    'telefone': newData.telephone,
                    'email': newData.email,
                    'foto': newData.photo
                })
            });
            alert("Coluna inserida com sucesso!");
        } catch(e){
            console.log("Error to Post Restaurant: " + e);
        }
    }

    update = async (restaurantID) => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Restaurante', { 
                method: 'PUT',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_restaurante': restaurantID,
                    'nome': newData.name,
                    'rua': newData.street,
                    'codigo_postal': newData.postalCode,
                    'localizacao': newData.localization,
                    'telefone': newData.telephone,
                    'email': newData.email,
                    'foto': newData.photo
                })
            });
            alert("Coluna modificada com sucesso!");
        } catch(e){
            console.log("Error to Put Restaurant: " + e);
        }
    }

    delete = async (restaurantID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Restaurante', { 
                method: 'DELETE',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_restaurante': restaurantID,
                })
            });
            alert("Coluna eliminada com sucesso!");
        } catch(e){
            console.log("Error to Delete Restaurant: " + e);
        }
    }

    render(){
        const { restaurant } = this.state;
        const {classes} = this.props;
        const columns= [
            { title: 'Nome', field: 'name', validate: rowData => rowData.name === '' ? 'O Nome não pode ser nulo' : '', align:"center" },
            { title: 'Rua', field: 'street', type: 'date', align:"center"},
            { title: 'Código Postal', field: 'postalCode', validate: rowData => rowData.postalCode === '' ? 'A localizacao não pode ser nulo' : '', align:"center"},
            { title: 'Localização', field: 'localization', validate: rowData => rowData.localization === '' ? 'A localizacao não pode ser nulo' : '', align:"center"},
            { title: 'Tefefone', field: 'telephone', type: 'numeric', align:"center" },
            { title: 'Foto', field: 'photo', render: rowData => <img src={rowData.photo} style={{width: '50%', borderRadius: '20%'}}/>, align:"center"},
        ];
        const data = restaurant.map((item) => {
            return { restaurantId: item.id_restaurante, name: item.nome, street: item.rua, postalCode: item.codigo_postal, localization: item.localizacao, telephone: item.telefone, email: item.email, photo: item.foto};
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
                            <Paper className={"paper"}>
                                <MaterialTable
                                    title="Tabela dos Restaurantes"
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
                                                if(newData.name==null || newData.street==null || newData.localization==null || newData.postalCode==null || newData.telephone==null || newData.email==null || newData.photo==null) {
                                                    alert('Nenhum dos valores inseridos pode ser nulo!');
                                                    reject();
                                                }else{
                                                    if(newData.name.lenght<0 || newData.street.lenght<0 || newData.localization.lenght<0 || newData.postalCode.lenght<0 || newData.telephone.lenght<0 || newData.email.lenght<0 || newData.photo.lenght<0) {
                                                        alert('Os campos não podem ficar vazios!');
                                                        reject();
                                                    }else{
                                                        if(Number.isInteger(newData.quantidade)==false){
                                                            alert('A quantidade tem de ser do tipo inteiro!');
                                                            reject();
                                                        }else{
                                                            if(Number.isInteger(newData.clientId)==false){
                                                                alert('A identificação do cliente tem de ser do tipo inteiro!');
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
                                                if(newData.name==null || newData.street==null || newData.localization==null || newData.postalCode==null || newData.telephone==null || newData.email==null || newData.photo==null) {
                                                    alert('Nenhum dos valores inseridos pode ser nulo!');
                                                    reject();
                                                }else{
                                                    if(newData.name.lenght<0 || newData.street.lenght<0 || newData.localization.lenght<0 || newData.postalCode.lenght<0 || newData.telephone.lenght<0 || newData.email.lenght<0 || newData.photo.lenght<0) {
                                                        alert('Os campos não podem ficar vazios!');
                                                        reject();
                                                    }else{
                                                        if(Number.isInteger(newData.quantidade)==false){
                                                            alert('A quantidade tem de ser do tipo inteiro!');
                                                            reject();
                                                        }else{
                                                            if(Number.isInteger(newData.clientId)==false){
                                                                alert('A identificação do cliente tem de ser do tipo inteiro!');
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

Restaurant.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Restaurant);