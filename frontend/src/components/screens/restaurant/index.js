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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
            data:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Account...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOC0yNiAxNzo1MjoxNiJ9._IB4GGt7IzLjqzBTfLzOz65HSZJM4gsPMNSJvihW49M";
        try {
            let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Restaurante', { 
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
                            <label htmlFor="email">Restaurantes:</label>
                            <Table size="small">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Nome</TableCell>
                                    <TableCell>Rua</TableCell>
                                    <TableCell>Código Postal</TableCell>
                                    <TableCell>Localização</TableCell>
                                    <TableCell>Telefone</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell align="right">Foto</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {
                                    data.map((item) => {
                                        return(
                                        <TableRow key={item.id_produto}>
                                            <TableCell>{item.nome}</TableCell>
                                            <TableCell>{item.rua}</TableCell>
                                            <TableCell>{item.codigo_postal}</TableCell>
                                            <TableCell>{item.localizacao}</TableCell>
                                            <TableCell>{item.telefone}</TableCell>
                                            <TableCell>{item.email}</TableCell>
                                            <TableCell align="right">{item.foto}</TableCell>
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

Restaurant.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Restaurant);