import React from 'react';
import { ListPages } from "../components/shared/listPages/index";
import List from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Header from "../components/shared/header/index";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import MaterialTable from 'material-table';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const Copyright = () => {
    return (
    <Typography variant="body2" color="textSecondary" align="center" style={{marginTop: 20}}>
        {'Copyright © '}
        <Link color="inherit" href="https://sabordaavo.com/">
        Sabor da Avó
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
    </Typography>
    );
};

export function StructurePage (props){
    const classes = useStyles();

    return( 
        <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className={classes.appBar}>
                    <Header/>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Toolbar />
                    <div className={classes.drawerContainer} style={{marginTop: 25}}>
                        <div style={{marginTop: 50}}>
                            <ListPages/>
                        </div>
                    </div>
                </Drawer>
                <main className={classes.content}>
                    <Container maxWidth="lg" style={{marginTop: 150}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                            <Paper elevation={3}>
                                {props.table}
                            </Paper>
                            </Grid>
                        </Grid>
                        <Box pt={4} style={{paddingVertical: 80}}>
                            {Copyright()}
                        </Box>
                    </Container>
                </main>
            </div>
    );
}