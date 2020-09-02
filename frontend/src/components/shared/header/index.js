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
    }
    goAccount(){
        this.props.history.push("/account");
    }
    render(){
        return (
            <header>
                <div className="logo">
                    Sabor da Avó
                </div>
                <nav>
                    <ul>
                        <li onClick={this.goAccount}>
                            <a className={"first"}>José Leite Machado</a>
                        </li>
                    </ul>
                    <ul>
                        <li onClick={this.goAccount}>
                            <Avatar src="https://www.karacteragency.pt/wp-content/uploads/2016/03/jose-leite-board-1.jpg" className={"last"} />
                        </li>
                    </ul>
                </nav>
            </header>
          );
    }
}

export default withRouter(Header);