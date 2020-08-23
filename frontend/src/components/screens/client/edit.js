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
            description:[],
            type: [],
            name: [],
            price: [],
            validName: true,
            validDescription: true,
            validPrice: true,
            isNullName: false,
            isNullDescription: false,
            isNullPrice: false,
            isValidPrice: true,
            isValidDescription: true,
            isValidName: true,
        }
    }

    async componentDidMount (){ 
        console.log("MounPriceg the screen Account...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOC0yNiAxNzo1MjoxNiJ9._IB4GGt7IzLjqzBTfLzOz65HSZJM4gsPMNSJvihW49M";
        try {
            let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Cliente', { 
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
        this.props.history.push("/client");
    }

    validCardNumber = (val) => {
        if( val.trim().length >= 0 ) {
            if(/^[0-9]*$/.test(val)) {
                this.setState({
                    isValidCardNumber: true,
                    isNullCardNumber: false,
                    cardNumber: val
                });
            }else {
                this.setState({
                    isValidCardNumber: false,
                    isNullCardNumber: false,
                    cardNumber: val
                });
            }
        } else {
          this.setState({
                isNullCardNumber: true,
                cardNumber: val
            });
        }
    }

    validShopNumber = (val) => {
        if( val.trim().length >= 0 ) {
            if(/^[0-9]*$/.test(val)) {
                this.setState({
                    isValidShopNumber: true,
                    isNullShopNumber: false,
                    shopNumber: val
                });
            }else {
            this.setState({
                    isValidShopNumber: false,
                    isNullShopNumber: false,
                    shopNumber: val
                });
            }
        }
        else {
            this.setState({
                isNullShopNumber: true,
                shopNumber: val
            });
        }
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
                    <Container maxWidth="lg" style={{marginTop: 100}}>
                        <Grid>
                            <h1 style={{fontSize:35}}>Editar cliente</h1>
                            <Paper elevation={24} className={"paper"}>
                                <form style={{marginTop: 70}}>
                                <TextField label="Numero Cartao" variant="outlined"/>
                                    {
                                        this.state.isNullCardNumber ? 
                                            <span style={{color: "red"}}>O número de cartão não pode ser nulo.</span>
                                        : false
                                    }
                                    {
                                        this.state.isValidCardNumber ? true :
                                            <span style={{color: "red"}}>O número de cartão só pode conter número inteiros.</span> 
                                    }
                                    <TextField label="Numero Compras" variant="outlined"/>
                                    {
                                        this.state.isNullShopNumber ? 
                                            <span style={{color: "red"}}>O número de compras não pode ser nulo.</span>
                                        : false
                                    }
                                    {
                                        this.state.isValidShopNumber ? true :
                                            <span style={{color: "red"}}>O número de compras só pode conter número inteiros.</span> 
                                    }
                                    <FormControl className={"idUser"} variant="outlined">
                                        <InputLabel htmlFor="idUser">Utilizador Correspondente</InputLabel>
                                        <Select
                                            label="Utilizador Correspondente"
                                            inputProps={{
                                                name: 'tipo',
                                                id: 'idUser',
                                            }}
                                            value={this.props.idUser}
                                            onChange={(value, index) => this.setState({ idUser : value})}
                                            style={{inlineSize: 200}}
                                        >
                                            <MenuItem value={1}>José Leite Machado</MenuItem>
                                            <MenuItem value={2}>Isabela Coelho Martins</MenuItem>
                                            <MenuItem value={3}>Maria Manuela Coelho</MenuItem>
                                            <MenuItem value={4}>Albino Ribeiro Moreira</MenuItem>
                                            <MenuItem value={5}>Manuel José Silva</MenuItem>
                                        </Select>
                                    </FormControl>
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