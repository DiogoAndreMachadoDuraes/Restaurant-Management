import React, { Component } from 'react';
import './style.css';
import Avatar from '@material-ui/core/Avatar';
import {
    BrowserRouter as Router,
    withRouter
} from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Divider from "@material-ui/core/Divider";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        position: 'relative',
        backgroundColor: "black"
    },
    dropdown: {
        position: 'absolute',
        width: 180,
        height: 50,
        top: 40,
        right: 0,
        left: -20,
        backgroundColor: "black"
    }
  });

class Header extends Component{
    constructor(props){
        super(props);
        this.goAccount = this.goAccount.bind(this);
        this.logOut = this.logOut.bind(this);
        this.state={
            /* name: "",
            photo: "" */
            open: false
        }
    }
    async componentDidMount (){
        try{
            let photo=await localStorage.getItem("photo");
            if (photo !== null) {
                this.setState({
                    photo: photo
                });
            }
        }catch (e) {
            console.log("Error rending photo: " + e);
        }
        try {
            let name=await localStorage.getItem("name");
            if (name !== null) {
                this.setState({
                    name: name
                });
            }
        }catch (e) {
        console.log("Error rending name: " + e);
        }
    }
    goAccount(){
        this.props.history.push("/account");
    }
    logOut(){
        localStorage.removeItem("token");
        this.props.history.push("/");
    }
    handleClick = () => {
        this.setState({
            open:!this.state.open
        });
    }
    handleClickAway = () => {
        this.setState({open: false});
    }

    render(){
        const { name, photo } = this.state;
        const { classes } = this.props;
        return (
            <header>
                <div className="logo">
                    Sabor da Avó
                </div>
                <nav>
                    <ul>
                        <Paper>
                            <ClickAwayListener onClickAway={this.handleClickAway}>
                                <div className={classes.root}>
                                    <li onClick={this.handleClick}>
                                        <Avatar src={photo} className="last"/>
                                    </li>
                                    <li onClick={this.handleClick}>
                                        <a className="first">{name}</a>
                                    </li>
                                    {
                                        this.state.open ? (
                                            <div className={classes.dropdown}>
                                                <MenuList role="menu">
                                                    <MenuItem onClick={this.logOut} style={{color:"white"}}>
                                                        <ExitToAppIcon/>
                                                        Terminar Sessão
                                                    </MenuItem>
                                                </MenuList>
                                            </div>
                                        ) : false
                                    }
                                </div>
                            </ClickAwayListener>
                        </Paper>
                    </ul>
                </nav>
            </header>
        );
    }
}
Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Header));