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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Header from "../../shared/header/index";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import avatar from "../../../assets/logo.png";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
});

class Edit extends React.Component {
    constructor(props){
        super(props);
        this.save = this.save.bind(this);
        this.state={
            data:[],
            type: []
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Edit Menu...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOC0yNiAxNzo1MjoxNiJ9._IB4GGt7IzLjqzBTfLzOz65HSZJM4gsPMNSJvihW49M";
        try {
            let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Menu', { 
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

    save = async () => {
        //guardar dados
        this.props.history.push("/menu");
    }

    validName = (val) => {
        if( val.trim().length >= 0 ) {
            if(/^[a-zA-Z áéíóúÁÉÍÓÚãÃõÕâÂêÊîÎôÔûÛàèìòùÀÈÌÒÙçÇ]*$/.test(val)) {
                this.setState({
                    isValidName: true,
                    isNullName: false,
                    name: val
                });
            }else {
                this.setState({
                    isValidName: true,
                    isNullName: false,
                    name: val
                });
            }
        } else {
          this.setState({
                isNullName: true,
                name:val
            });
        }
    }

    validPrice = (val) => {
        if( val.trim().length >= 0 ) {
            if(/^[0-9],.*$/.test(val)) {
                this.setState({
                    isValidPrice: true,
                    isNullPrice: false,
                    price: val
                });
            }else {
            this.setState({
                    isValidPrice: false,
                    isNullPrice: false,
                    price: val
                });
            }
        }
        else {
            this.setState({
                isNullPrice: true,
                price: val
            });
        }
    }

    render(){
        const { data, type } = this.state;
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
                    <Container maxWidth="lg" style={{marginTop: 100}}>
                        <Grid>
                            <h1 style={{fontSize:35}}>Editar Menu</h1>
                            <Paper elevation={24} className={"paper"}>
                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                    <img src={avatar} alt="..." width="400" height="400" />
                                </a>
                                <form style={{marginTop: 70}}>
                                    <TextField label="Nome" variant="outlined"/>
                                    <TextField className={"description"} label="Breve descrição" variant="outlined"/>
                                    <FormControl className={"type"} variant="outlined">
                                        <InputLabel htmlFor="type">Tipo</InputLabel>
                                        <Select
                                            label="Tipo"
                                            inputProps={{
                                                name: 'tipo',
                                                id: 'type',
                                            }}
                                            value={this.props.type}
                                            onChange={(value, index) => this.setState({ type : value})}
                                            style={{inlineSize: 200}}
                                        >
                                            <MenuItem value={10}>Pratos de peixe</MenuItem>
                                            <MenuItem value={20}>Pratos de carne</MenuItem>
                                            <MenuItem value={30}>Pizzas</MenuItem>
                                            <MenuItem value={40}>Hamburgueres</MenuItem>
                                            <MenuItem value={50}>Pratos sem glúten</MenuItem>
                                            <MenuItem value={60}>Pratos Vegan</MenuItem>
                                            <MenuItem value={70}>Batata Frita</MenuItem>
                                            <MenuItem value={80}>Saladas</MenuItem>
                                            <MenuItem value={90}>Sopas</MenuItem>
                                            <MenuItem value={100}>Bebidas</MenuItem>
                                            <MenuItem value={110}>Sobremesas</MenuItem>
                                            <MenuItem value={120}>Bebidas Quentes</MenuItem>
                                            <MenuItem value={130}>Menu Café</MenuItem>
                                            
                                        </Select>
                                    </FormControl>
                                    <TextField className={"outlineBasic"} label="Preço (€)" variant="outlined"/>
                                </form>
                            </Paper>
                            <Paper elevation={5} className={"button"}>
                                <Button color="primary" round onClick={this.save}>
                                    Guardar
                                </Button>
                            </Paper>
                        </Grid>
                    </Container>
                </main>
            </div>
        )
    }
}

Edit.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withRouter(withStyles(styles)(Edit));