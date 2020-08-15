import React, { Component } from 'react';
import './style.css';

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
                            <a className="first">Home</a>
                        </li>
                        <li>
                            <a href="#">Products</a>
                        </li>
                        <li>
                            <a className="last">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
          );
    }
}

export default Header;