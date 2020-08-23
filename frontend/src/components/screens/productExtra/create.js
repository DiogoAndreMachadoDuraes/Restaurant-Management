import React from "react";
import { withRouter } from "react-router-dom";
import "./style.css";
import { ListPages } from "../../shared/listPages/index";
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from "../../shared/header/index";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import avatar from "../../../assets/logo.png";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
});

class Create extends React.Component {
    constructor(props){
        super(props);
        this.save = this.save.bind(this);
        this.state={
            data:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Account...");
    }

    onPress = async () => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOC0yNiAxNzo1MjoxNiJ9._IB4GGt7IzLjqzBTfLzOz65HSZJM4gsPMNSJvihW49M";
        try {
            let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Produto_extra', { 
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
        this.props.history.push("/productExtra");
    }

    validQuantity = (val) => {
        if( val.trim().length >= 0 ) {
            if(/^[0-9]*$/.test(val)) {
                this.setState({
                    isValidQuantity: true,
                    isNullQuantity: false,
                    quantity: val
                });
            }else {
            this.setState({
                    isValidQuantity: false,
                    isNullQuantity: false,
                    quantity: val
                });
            }
        }
        else {
            this.setState({
                isNullQuantity: true,
                quantity: val
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
                            <h1 style={{fontSize:35}}>Novo produto extra</h1>
                            <Paper elevation={24} className={"paper"}>
                                <form>
                                    <TextField className={"outlineBasic"} label="Quantidade" variant="outlined"/>
                                    {
                                        isNullQuantity?
                                            <span style={{color: "red"}}>A quantidade não pode ser nulo.</span>
                                        : false
                                    }
                                    {
                                        isValidQuantity? true :
                                            <span style={{color: "red"}}>A quantidade só pode conter números inteiros.</span>
                                    }
                                    <FormControl className={""} variant="outlined">
                                        <InputLabel htmlFor="idProduto">Produto Correspondente</InputLabel>
                                        <Select
                                            label="Produto Correspondente"
                                            inputProps={{
                                                name: 'Id Produto',
                                                id: 'idProduto',
                                            }}
                                            value={this.props.day}
                                            onChange={(value, index) => this.setState({ day : value})}
                                            style={{inlineSize: 200}}
                                        >
                                            <MenuItem value={1}>Pudim</MenuItem>
                                            <MenuItem value={2}>Café</MenuItem>
                                            <MenuItem value={3}>Água</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl className={""} variant="outlined">
                                        <InputLabel htmlFor="idExtra">Extra Correspondente</InputLabel>
                                        <Select
                                            label="Extra Correspondente"
                                            inputProps={{
                                                name: 'Id Extra',
                                                id: 'idExtra',
                                            }}
                                            value={this.props.day}
                                            onChange={(value, index) => this.setState({ day : value})}
                                            style={{inlineSize: 200}}
                                        >
                                            <MenuItem value={1}>Pudim</MenuItem>
                                            <MenuItem value={2}>Café</MenuItem>
                                            <MenuItem value={3}>Água</MenuItem>
                                        </Select>
                                    </FormControl>
                                </form>
                            </Paper>
                            <Paper elevation={5} className={"button"}>
                                <Button color="primary" round onClick={this.save}>
                                    Criar
                                </Button>
                            </Paper>
                        </Grid>
                    </Container>
                </main>
            </div>
        )
    }
}
Create.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withRouter(withStyles(styles)(Create));