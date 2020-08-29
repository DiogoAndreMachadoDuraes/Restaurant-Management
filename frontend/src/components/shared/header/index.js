import React, { Component } from 'react';
import './style.css';
import Avatar from '@material-ui/core/Avatar';

class Header extends Component{
    render(){
        return (
            <header>
                <div className="logo">
                    Sabor da Avó
                </div>
                <nav>
                    <ul>
                        <li>
                            <a className={"first"} >José Leite Machado</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Avatar src="https://www.karacteragency.pt/wp-content/uploads/2016/03/jose-leite-board-1.jpg" className={"last"} />
                        </li>
                    </ul>
                </nav>
            </header>
          );
    }
}

export default Header;