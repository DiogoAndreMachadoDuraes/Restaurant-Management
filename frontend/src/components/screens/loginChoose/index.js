import React from 'react';
import './style.css';
import Login from "../login/index";
import space from '../../../assets/space2.jpg';
import logo from '../../../assets/logo.png';

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
              <div className={"selected-controller"} onClick={this.showLogin.bind(this)}>
                <text style={{color:"blue"}}>Login</text>
              </div>
            </div>
            <div className="box-container">
              { this.state.isLogin && <Login/>}
            </div>
        </div>
    );
  }
}

export default Choose;