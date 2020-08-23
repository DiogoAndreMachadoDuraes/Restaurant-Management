import React, { useState, useEffect } from "react";
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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Header from "../../shared/header/index";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    withRouter,
    useHistory
} from "react-router-dom";


const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
});

class Reservation extends React.Component {
    constructor(props){
        super(props);
        this.goRestaurant = this.goRestaurant.bind(this);
        this.state={
            data:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Account...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOC0yNiAxNzo1MjoxNiJ9._IB4GGt7IzLjqzBTfLzOz65HSZJM4gsPMNSJvihW49M";
        try {
            let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Reserva', { 
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
            this.setState({ 
                data: json
            });
            console.log(json);
        } catch(e){
            console.log("Error to get data: " + e);
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

    goRestaurant() {
        this.props.history.push("/restaurant");
    }

    render(){
        const { data } = this.state;
        const {classes} = this.props;
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
                                    <label htmlFor="email">Reservas:</label>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                            <Paper className={"paper"}>
                                <Table size="small">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Data de criação</TableCell>
                                        <TableCell>Hora de criação</TableCell>
                                        <TableCell>Quantidade de Pessoas</TableCell>
                                        <TableCell>Data Marcada</TableCell>
                                        <TableCell>Hora Marcada</TableCell>
                                        <TableCell>Estado</TableCell>
                                        <TableCell>Id cliente</TableCell>
                                        <TableCell></TableCell>
                                        <TableCell align="right">
                                            <ListItem button>
                                                <ListItemIcon>
                                                    <NoteAddIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Nova" onClick={this.goRestaurant}/>
                                            </ListItem>
                                        </TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {
                                        data.map((item) => {
                                            return(
                                            <TableRow key={item.id_reserva}>
                                                <TableCell>{item.data}</TableCell>
                                                <TableCell>{item.hora}</TableCell>
                                                <TableCell>{item.quantidade_pessoas}</TableCell>
                                                <TableCell>{item.data_marcada}</TableCell>
                                                <TableCell>{item.hora_marcada}</TableCell>
                                                <TableCell>{item.estado}</TableCell>
                                                <TableCell>{item.id_cliente}</TableCell>
                                                <TableCell>
                                                    <ListItem button>
                                                        <ListItemIcon>
                                                            <EditIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Editar" />
                                                    </ListItem>
                                                </TableCell>
                                                <TableCell align="right">
                                                    <ListItem button>
                                                        <ListItemIcon>
                                                            <DeleteIcon />
                                                        </ListItemIcon>
                                                        <ListItemText primary="Eliminar" />
                                                    </ListItem>
                                                </TableCell>
                                            </TableRow>
                                            );
                                        })
                                    }
                                    </TableBody>
                                </Table>
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
Reservation.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withRouter(withStyles(styles)(Reservation));