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
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
const { createProxyMiddleware } = require('http-proxy-middleware');

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
});

class Product extends React.Component {
    constructor(props){
        super(props);
        this.goCreate = this.goCreate.bind(this);
        this.goEdit = this.goEdit.bind(this);
        this.state={
            data:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Product...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMyAxOTowNDoyNSJ9.FTaTpwBNG-VIoO9IyaA-kZ_Xb1OKTgof0_gxmF6IZt8";
        try {
            let response = await fetch('/Produto', 
            { 
                    headers: {
                        Autentication: 'Bearer ' + token,
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
            });
            let json = await response.json();
            console.log(json);
            this.setState({ 
                data: json
            });
        } catch(e){
            console.log("Error to get product: " + e);
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

    goCreate() {
        this.props.history.push("/productCreate");
    }

    goEdit() {
        this.props.history.push("/productEdit");
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
                            <Paper elevation={3} className={"paper"}>
                                <label htmlFor="email">Produtos:</label>
                                <Table size="small">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Nome</TableCell>
                                        <TableCell>Descricao</TableCell>
                                        <TableCell>Tipo</TableCell>
                                        <TableCell>Foto</TableCell>
                                        <TableCell>Preco</TableCell>
                                        <TableCell></TableCell>
                                        <TableCell>
                                            <ListItem button style={{whidth: 10}}>
                                                <ListItemIcon>
                                                    <NoteAddIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Novo" onClick={this.goEdit} />
                                            </ListItem>
                                        </TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {
                                        data.map((item) => {
                                            return(
                                            <TableRow key={item.id_produto}>
                                                <TableCell>{item.nome}</TableCell>
                                                <TableCell>{item.descricao}</TableCell>
                                                <TableCell>{item.tipo}</TableCell>
                                                <TableCell>{item.foto}</TableCell>
                                                <TableCell>{item.preco}</TableCell>
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
Product.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withRouter(withStyles(styles)(Product));