import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import CopyRight from '../../shared/copyRight/index';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";

const styles = theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://www.faroleiro.com/images/site/home/home-slide-06.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: theme.spacing(50),
    height: theme.spacing(50),
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Login extends React.Component {
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.state={
            email: "",
            password: "",
            data:[],
            error: {
                email: "",
                password: ""
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();
    };

    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let error = { ...this.state.error };
    
        switch (name) {
          case "email":
            error.email = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value) ? "" : "O email inserido não é válido!";
            break;
          case "password":
            error.password = value.length < 6 ? "A password tem de conter no mínimo 6 carateres!" : "";
            break;
          default: break;
        }
    
        this.setState({ error, [name]: value }, () => console.log(this.state));
    };
 
    login = async()=>{
        if (this.state.email.length == 0 || this.state.password.length == 0 ) {
            alert('O Email e/ou a palavra-passe não podem ser nulos.');
            return;
        }
      
        if(this.state.error.email==false && this.state.error.password==false){
            try
            {
                let response = await fetch('/Login', { 
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "email":this.state.email,
                        "password":this.state.password
                    })
                });

                let token = await response.text();
                
                try 
                {
                    let response = await fetch('/Utilizador', { 
                      headers: {
                        Authorization: 'Bearer ' + token,
                        Accept: 'application/json',
                        'Content-Type': 'application/json; charset=utf-8'
                      }
                    });
                    let json = await response.json();
                    this.setState({
                      isLoading: false,
                      data: json
                    });
                } catch(e){
                    console.log("Error to get data: " + e);
                    alert('Aconteceu um erro, contacte o programador!');
                    return;
                }

                const { data } = this.state;
               
                const name=data.filter(a=>a.email==this.state.email).map(a=>a.nome);
                const photo=data.filter(a=>a.email==this.state.email).map(a=>a.foto);
                const user=data.filter(a=>a.email==this.state.email).map(a=>a);

                this.props.history.push("/home", { getToken: token, name: name, photo: photo });

            } catch(e){
                console.log("Error to get User: " + e);
                /* Alert.alert('Erro', '   Não está a ser possível o acesso à sua conta...', [
                    {text: 'Por favor, tente mais tarde'}
                ]); */
                alert('O Email e/ou a palavra-passe estão incorreto(s).');
                return;
            }
        } else{
            alert('Os valores inseridos não são válidos.');
            return;
        }
    }

    render(){
        const { error } = this.state;
        const { classes } = this.props;

        return (
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar src={require("../../../assets/logo.png")} className={classes.logo}/>
                    <form className={classes.form} onSubmit={this.handleSubmit} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            noValidate
                            onChange={this.handleChange}
                        />
                        {   
                            error.email.length > 0 && (
                                <span style={{color:'red'}}>{error.email}</span>
                            )
                        }
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            noValidate
                            onChange={this.handleChange}
                        />
                        {
                            error.password.length > 0 && (
                                <span style={{color:'red'}}>{error.password}</span>
                            )
                        }
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.login}
                        >Iniciar Sessão</Button>
                        <Box mt={5}>
                            <CopyRight/>
                        </Box>
                    </form>
                </div>
          </Grid>
        </Grid>
        );
    }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Login));