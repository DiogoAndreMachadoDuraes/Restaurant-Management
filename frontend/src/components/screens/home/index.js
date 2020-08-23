import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import { ListPages } from "../../shared/listPages/index";
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from "../../shared/header/index";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  }
}));

export default function Home() {
  const history = useHistory();

  function handleClick() {
    history.push("/login");
  }

  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://sabordaavo.com/">
          Sabor da Avó
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const classes = useStyles();
  return (
    <div className="root">
      <AppBar position="absolute" className={clsx(classes.appBar)}>
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
        <div className={"appBarSpacer"} />
        <Container maxWidth="lg" className={"container"} style={{marginTop: 100}}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Paper className={"paper"}>
                    <label htmlFor="email">Email:</label>
                </Paper>
                </Grid>
            </Grid>
            <Box pt={4}>
                <Copyright />
            </Box>
        </Container>
      </main>
    </div>
  );
};