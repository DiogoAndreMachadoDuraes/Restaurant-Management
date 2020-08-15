import React from 'react';
import './style.css';
import Home from "../home/home";

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            email: "",
            password: "",
            data:[],
            validEmail: true,
            validPass: true
        }
    }

    validEmail = (val) => {
        if(val.trim().length >= 5){
            this.setState({
                validEmail: true,
                email: val
            });
        } else {
            this.setState({
                validEmail: false,
                email: val
            });
        }
    }

    validPass = (val) => {
        if(val.trim().length >= 6){
            this.setState({
                validPass: true,
                password: val
            });
        } else {
            this.setState({
                validPass: false,
                password: val
            });
        }
    }

    _login = async () => {
        if (this.state.email.length == 0 || this.state.password.length == 0 ) {
            alert('Introdução de valores nulos', '   O Email ou a palavra-passe não podem ser nulos.');
            return;
        }
        
        try {
            let response = await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Utilizador', { 
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              }
            });
            let json = await response.json();
            this.setState({
              isLoading: false,
              data: json
            });
        } catch(e){
            console.log("Error to get data: " + e);
        }

        const { data } = this.state;

        console.log(data);
        
        const email=data.filter(a=>a.email==this.state.email).map(a=>a.email);
        const password=data.filter(a=>a.password==this.state.password).map(a=>a.password);

        if(email[0]===this.state.email && password[0] === this.state.password){
            try
            {
                await fetch('http://192.168.1.69/Ementas-de-Restauracao/index.php/Login', { 
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
               
            } catch(e){
                console.log(e);
            }
        } else{
            alert('Valores incorretos', '   O Email e/ou a palavra-passe estão incorreto(s).');
        }
    }

    render(){
        const { validPass, validEmail } = this.state;

        return (
            <div className="inner-container">
                <div className="box">

                    <div className="input-group">
                        <label htmlFor="email" style={{left: -50}}>Email:</label>
                        <input
                            type="email"
                            name="email"
                            className="login-input"
                            placeholder="Email"
                            onChange={(val) => this.validEmail(val.target.value)}
                            value={this.state.email}
                            required
                        />
                        { 
                            validEmail ? true : 

                            <div>
                                <text style={{color:"red"}}>O email deve conter pelo menos 5 caráteres.</text>
                            </div>
                        }
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            className="login-input"
                            placeholder="Password"
                            autoComplete="none"
                            onChange={(val) => this.validPass(val.target.value)}
                            value={this.state.password}
                            required
                        />
                        { 
                            validPass ? true : 

                            <div>
                                <text style={{color:"red"}}>A password deve conter pelo menos 6 caráteres.</text>
                            </div>
                        }
                    </div>

                    <button type="button" className="login-btn" onClick={this._login()}>Login</button>
                </div>
            </div>
        );
    }
};

export default Login;