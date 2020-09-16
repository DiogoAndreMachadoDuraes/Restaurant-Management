import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
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
}

