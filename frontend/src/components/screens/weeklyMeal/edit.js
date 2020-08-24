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
import Propdays from 'prop-days';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import avatar from "../../../assets/logo.png";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

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
            date: new Date('2014-08-18T'),
            time: new Date('21:11:54')
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Account...");
    }

    onPress = async () => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOC0yNiAxNzo1MjoxNiJ9._IB4GGt7IzLjqzBTfLzOz65HSZJM4gsPMNSJvihW49M";
        try {
            let response = await fetch('http://192.168.1.117/Ementas-de-Restauracao/index.php/Refeicao_semanal', { 
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-day': 'application/json'
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
        this.props.history.push("/weeklyMeal");
    }

    handleDate = (date) => {
        this.setState({
            date: date
        });
    }

    handleTime = (date) => {
        this.setState({
            time: date
        })
    }

    render(){
        const { data, date, time } = this.state;
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
                            <h1 style={{fontSize:35}}>Nova Refeicao Semanal</h1>
                            <Paper elevation={24} className={"paper"}>
                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                    <img src={avatar} alt="..." width="400" height="400"/>
                                </a>
                                <form style={{marginTop: 70}}>
                                    <FormControl className={"day"} variant="outlined">
                                        <InputLabel htmlFor="day">Dia da Semana</InputLabel>
                                        <Select
                                            label="Dia da Semana"
                                            inputProps={{
                                                name: 'dia da semana',
                                                id: 'day',
                                            }}
                                            value={this.props.day}
                                            onChange={(value, index) => this.setState({ day : value})}
                                            style={{inlineSize: 200}}
                                        >
                                            <MenuItem value={10}>Segunda-feira</MenuItem>
                                            <MenuItem value={20}>Terça-feira</MenuItem>
                                            <MenuItem value={30}>Quarta-feira</MenuItem>
                                            <MenuItem value={40}>Quinta-feira</MenuItem>
                                            <MenuItem value={50}>Sexta-feira</MenuItem>
                                            <MenuItem value={60}>Sábado</MenuItem>
                                            <MenuItem value={70}>Domingo</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <Grid container justify="space-around">
                                            <KeyboardDatePicker
                                                margin="normal"
                                                id="date-picker-dialog"
                                                label="Date picker dialog"
                                                format="MM/dd/yyyy"
                                                value={this.state.date}
                                                onChange={this.handleDate}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                                />
                                            <KeyboardTimePicker
                                                margin="normal"
                                                id="time-picker"
                                                label="Time picker"
                                                value={this.state.time}
                                                onChange={this.handleTime}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change time',
                                                }}
                                            />
                                        </Grid>
                                    </MuiPickersUtilsProvider>
                                    <FormControl className={""} variant="outlined">
                                        <InputLabel htmlFor="idRestaurante">Restaurante Correspondente</InputLabel>
                                        <Select
                                            label="Restaurante Correspondente"
                                            inputProps={{
                                                name: 'Id Restaurante',
                                                id: 'idRestaurante',
                                            }}
                                            value={this.props.day}
                                            onChange={(value, index) => this.setState({ day : value})}
                                            style={{inlineSize: 200}}
                                        >
                                            <MenuItem value={1}>Sabor da Avó - Viana de Castelo</MenuItem>
                                            <MenuItem value={2}>Sabor da Avó - Bragança</MenuItem>
                                            <MenuItem value={3}>Sabor da Avó - Felgueiras</MenuItem>
                                        </Select>
                                    </FormControl>
                                    <FormControl className={""} variant="outlined">
                                        <InputLabel htmlFor="idSpecialMenu">Ementa Correspondente</InputLabel>
                                        <Select
                                            label="Ementa Correspondente"
                                            inputProps={{
                                                name: 'Ementa Correspondente',
                                                id: 'idSpecialMenu',
                                            }}
                                            value={this.props.day}
                                            onChange={(value, index) => this.setState({ day : value})}
                                            style={{inlineSize: 200}}
                                        >
                                            <MenuItem value={1}>Prato de Carne</MenuItem>
                                            <MenuItem value={2}>Frango Grelhado</MenuItem>
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
Edit.propdays = {
    classes: Propdays.object.isRequired,
};
  
export default withRouter(withStyles(styles)(Edit));