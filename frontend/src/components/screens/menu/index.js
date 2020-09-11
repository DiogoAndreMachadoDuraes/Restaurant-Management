/* import React from "react";
import { withRouter } from "react-router-dom";
import {OwnTable} from "../../OwnTable";
import {SecoundTable} from "../../SecoundTable";
import {StructurePage} from "../../StructurePage";

const { createProxyMiddleware } = require('http-proxy-middleware');

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.goCreate = this.goCreate.bind(this);
        this.goEdit = this.goEdit.bind(this);
        this.state={
            data:[],
            productMenu:[],
            newDataProductMenu:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Menu...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0xNCAyMDozODo0MiJ9.BbUHpKWZCH-3tcUaCDN0iKhs5saeDwDGnGSQLlqU53c";
        try {
            let response = await fetch('/Menu', { 
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
            this.setState({ 
                data: json
            });
            console.log(json);
        } catch(e){
            console.log("Error to get data: " + e);
        }

        try {
            let response = await fetch('/Produto_menu', 
            { 
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let res = await response.json();
            console.log(res);
            this.setState({ 
                productMenu: res
            });
        } catch(e){
            console.log("Error to get Produto Menu: " + e);
        }
    }

    goCreate() {
        this.props.history.push("/menuCreate");
    }

    goEdit() {
        this.props.history.push("/menuEdit");
    }

    

    render(){
        const { data } = this.state;
        const {classes} = this.props;
        return (
            <div className="root">
                <AppBar position="absolute" className={classes.appBar}>
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
                            <Paper elevation={3} className={"paper"}>
                                <label htmlFor="email">Menu</label>
                                <Table size="small">
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Nome</TableCell>
                                        <TableCell>Descricao</TableCell>
                                        <TableCell>Tipo</TableCell>
                                        <TableCell>Foto</TableCell>
                                        <TableCell>Preco</TableCell>
                                        <TableCell>Id_Ementa</TableCell>
                                        <TableCell></TableCell>
                                        <TableCell>
                                            <ListItem button style={{whidth: 10}}>
                                                <ListItemIcon>
                                                    <EditIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Novo" onClick={this.goCreate} />
                                            </ListItem>
                                        </TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                    {
                                        data.map((item) => {
                                            return(
                                            <TableRow key={item.id_menu}>
                                                <TableCell>{item.nome}</TableCell>
                                                <TableCell>{item.descricao}</TableCell>
                                                <TableCell>{item.tipo}</TableCell>
                                                <TableCell>{item.foto}</TableCell>
                                                <TableCell align="right">{item.preco}</TableCell>
                                                <TableCell>{item.id_ementa}</TableCell>
                                            </TableRow>
                                            );
                                        })
                                    }
                                    </TableBody>
                                </Table>
                            </Paper>
                            </Grid>
                        </Grid>
                        <Box pt={4}>
                            {this.Copyright}
                        </Box>
                    </Container>
                </main>
            </div>
        )
    }
}
Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withRouter(withStyles(styles)(Menu));
 */