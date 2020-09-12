import React, { Component } from 'react';
import './style.css';
import Avatar from '@material-ui/core/Avatar';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";

class Header extends Component{
    constructor(props){
        super(props);
        this.goAccount = this.goAccount.bind(this);
        /*this.state={
            name: "",
            photo: ""
        } */
    }
    goAccount(){
        this.props.history.push("/account");
    }
    /*getData = async () =>{
        let name=await localStorage.getItem("name");
        let photo=await localStorage.getItem("photo");
        console.log(name);
        console.log(name);
        this.setState({
            name: name,
            photo: photo
        })
    } */
    render(){
    /*const { name, photo } = this.state;
        {
            this.getData();
        } */
        return (
            <header>
                <div className="logo">
                    Sabor da Avó
                </div>
                <nav>
                    <ul>
                        <li onClick={this.goAccount}>
                            <a className={"first"}>José</a>
                        </li>
                    </ul>
                    <ul>
                        <li onClick={this.goAccount}>
                            <Avatar src="" className={"last"} />
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default withRouter(Header);