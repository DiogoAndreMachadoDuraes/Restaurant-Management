import React from 'react';
import './style.css';
import Login from "../login/login";
import space from '../../fotos/space2.jpg';
import logo from '../../fotos/logo.png';

class Choose extends React.Component {
  constructor(props){
    super(props);
    this.state={ isLogin: true, isRegister: false};
  }

  showLogin(){
    this.setState({isLogin:true, isRegister: false});
  }

  showRegister(){
    this.setState({isLogin:false, isRegister: true});
  }

  render(){
    return (
        <div className="root-container">
            <div className="image">
                <img src={space}/>
            </div>
            <div className="image-logo">
                <img src={logo}/>
            </div>
            <div className="box-controller">
                <div className={"" + (this.state.isLogin ? "selected-controller" : "controller")} onClick={this.showLogin.bind(this)}>
                    <text style={{color:this.state.isLogin ? "blue" : "black"}}>Login</text>
                </div>
                <div className={""+(this.state.isRegister ? "selected-controller" : "controller")}  onClick={this.showRegister.bind(this)}>
                    <text style={{color:this.state.isRegister ? "blue" : "black"}}>Register</text>
                </div>
            </div>
            <div className="box-container">
                { this.state.isLogin && <Login/>}
                {/* { this.state.isRegister && <Register/>} */}
            </div>
        </div>
    );
  }
}

export default Choose;