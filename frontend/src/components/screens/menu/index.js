import React from "react";
import { withRouter } from "react-router-dom";
import {OwnTable} from "../../OwnTable";
import {SecoundTable} from "../../SecoundTable";
import {StructurePage} from "../../StructurePage";

const { createProxyMiddleware } = require('http-proxy-middleware');

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            menu:[],
            newData:[],
            menuProduct:[],
            newDataMenuProduct:[]
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
                menu: json
            });
            console.log(json);
        } catch(e){
            console.log("Error to get Menu: " + e);
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
                menuProduct: res
            });
        } catch(e){
            console.log("Error to get Menu Product: " + e);
        }
}

    add = async () => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Menu', { 
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'nome': newData.name,
                    'descricao': newData.description,
                    'tipo': newData.type,
                    'foto': newData.photo,
                    'preco': newData.price
                })
            });
            alert("Coluna inserida com sucesso!");
        } catch(e){
            console.log("Error to Post Menu: " + e);
        }
    }

    update = async (menuID) => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Menu', { 
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_menu': menuID,
                    'nome': newData.name,
                    'descricao': newData.description,
                    'tipo': newData.type,
                    'foto': newData.photo,
                    'preco': newData.price
                })
            });
            alert("Coluna modificada com sucesso!");
        } catch(e){
            console.log("Error to Put Menu: " + e);
        }
    }

    delete = async (menuID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Menu', { 
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_menu': menuID
                })
            });
            alert("Coluna eliminada com sucesso!");
        } catch(e){
            console.log("Error to Delete Menu: " + e);
        }
    }
    
    addMenuProduct = async () => {
        const { newDataMenuProduct } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Produto_menu', { 
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'quantidade': newDataMenuProduct.quantity,
                    /* 'id_produto': newDataMenuProduct.productId,
                    'id_menu': newDataMenuProduct.menuId */
                })
            });
            alert("Coluna inserida com sucesso!");
            console.log(response);
        } catch(e){
            console.log("Error to Post Produto menu: " + e);
        }
    }

    updateMenuProduct = async (menuProductID) => {
        const { newDataMenuProduct } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Produto_menu', { 
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_produto_menu': menuProductID,
                    'quantidade': newDataMenuProduct.quantity,
                    /* 'id_produto': newDataMenuProduct.productId,
                    'id_menu': newDataMenuProduct.menuId */
                })
            });
            alert("Coluna modificada com sucesso!");
        } catch(e){
            console.log("Error to Put Produto menu: " + e);
        }
    }

    deleteMenuProduct = async (menuProductID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Produto_menu', { 
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_produto_menu': menuProductID
                })
            });
            alert("Coluna eliminada com sucesso!");
        } catch(e){
            console.log("Error to Delete Produto menu: " + e);
        }
    }

    showDetails(menuID) {
        const { menuProduct } = this.state;
        const columnsMenuProduct= [
            { title: 'Quantidade', field: 'quantity', validate: rowData => rowData.quantity < 0 ? 'A quantidade não pode ser negativa' : '', type: "numeric", align:"center"}
        ];
        const productMenu=menuProduct.filter(a=>a.id_menu==menuID).map(a=>a);
        const dataMenuProduct = productMenu.map((item) => {
            return { menuProductId: item.id_produto_menu, quantity: item.quantidade};
        });;
    
    return (
        <div style={{ marginTop: 20, marginLeft: 20, marginBottom: 20, marginInlineEnd: 20}}>
            <SecoundTable
                title="Quantidade dos Produtos no menu"
                columns={columnsMenuProduct}
                data={dataMenuProduct}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                                if(newData.quantity<0) {
                                    alert('A quantidade não pode ser negativa!');
                                    reject();
                                }else{
                                    if(Number.isInteger(newData.quantity)==false){
                                        alert('A quantidade tem de ser do tipo inteiro!');
                                        reject();
                                    }else{
                                            setTimeout(() => {
                                                this.setState({
                                                    newDataMenuProduct: newData
                                                });
                                                resolve();
                                                this.addMenuProduct();
                                            }, 100)
                                        }
                            }
                    }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            if(newData.quantity<0) {
                                    alert('A quantidade não pode ser negativa!');
                                    reject();
                                }else{
                                    if(Number.isInteger(newData.quantity)==false){
                                        alert('A quantidade tem de ser do tipo inteiro!');
                                        reject();
                                    }else{
                                            setTimeout(() => {
                                                const dataUpdate = [...menuProduct];
                                                const index = oldData.tableData.id;
                                                dataUpdate[index] = newData;
                                                this.setState({
                                                    newDataMenuProduct: newData
                                                });
                                                const menuProductID=newData.menuProductID;
                                                resolve();
                                                this.updateMenuProduct(menuProductID);
                                            }, 1000)
                                }
                            }
                    }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const menuProductID = oldData.menuProductId;
                                resolve();
                                this.deleteMenuProduct(menuProductID);
                            }, 1000)
                        }),
                }}
            />
        </div>
    )
}
    
    render(){
        const { menu } = this.state;
        const {classes} = this.props;
        const columns= [
            { title: 'Nome', field: 'name', validate: rowData => rowData.name === '' ? 'O nome não pode ser nulo' : '', align:"center"},
            { title: 'Descrição', field: 'description', validate: rowData => rowData.description === '' ? 'A descrição não pode ser nula' : '', align:"center"},
            { title: 'Tipo', field: 'type',  lookup: { 'Menus de Hambúrgueres': 'Menus de Hambúrgueres', 'Pratos de Carne': 'Pratos de Carne', 'Pratos de Peixe':'Pratos de Peixe', 'Menus de Pizzas':'Menus de Pizzas', 'Menus de Francesinhas':'Menus de Francesinhas', 'Pratos Vegan':'Pratos Vegan', 'Menus de Cafés':'Menus de Cafés' },  align:"center"},
            { title: 'Foto', field: 'photo', render: rowData => <img src={rowData.photo} style={{width: '50%', borderRadius: '20%'}}/>, align:"center"},
            { title: 'Preço (€)', field: 'price', validate: rowData => rowData.price <= 0 ? 'O preço não pode ser negativo' : '', type: "numeric", align:"center"}
        ];
        const data = menu.map((item) => {
            return { menuId: item.id_menu, name: item.nome, description: item.descricao, type: item.tipo, photo: item.foto, price: item.preco};
        });;
        const tableRef = React.createRef();
        return (
            <StructurePage table={
                <OwnTable 
                    title="Tabela dos Menus" 
                    columns={columns}
                    data={data}
                    detailPanel={rowData => this.showDetails(1)}
                    editable={{
                        onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            if(newData.quantity==null || newData.price==null || newData.photo==null || newData.description==null) {
                                alert('Nenhum dos valores inseridos pode ser nulo!');
                                reject();
                            }else{
                                if(newData.quantity<0 || newData.price<0 || newData.photo<0 ) {
                                    alert('A quantidade, o preço e/ou a foto não pode ser negativo!');
                                    reject();
                                }else{
                                    if(Number.isInteger(newData.quantidade)==false){
                                        alert('A quantidade tem de ser do tipo inteiro!');
                                        reject();
                                    }else{
                                        if(newData.description.lenght<0){
                                            alert('Tem de conter uma descrição!');
                                            reject();
                                        }else{
                                            if(newData.photo.lenght<0){
                                                alert('Tem de conter uma foto!');
                                                reject();
                                            }else{
                                                setTimeout(() => {
                                                    this.setState({
                                                        newData: newData
                                                    });
                                                    resolve();
                                                    this.add();
                                                }, 1000)
                                            }
                                        }
                                    }
                                }
                            }
                    }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            if(newData.quantity==null || newData.price==null || newData.photo==null || newData.description==null) {
                                alert('Nenhum dos valores inseridos pode ser nulo!');
                                reject();
                            }else{
                                if(newData.quantity<0 || newData.price<0 || newData.photo<0 ) {
                                    alert('A quantidade, o preço e/ou a foto não pode ser negativo!');
                                    reject();
                                }else{
                                    if(Number.isInteger(newData.quantidade)==false){
                                        alert('A quantidade tem de ser do tipo inteiro!');
                                        reject();
                                    }else{
                                        if(newData.description.lenght<0){
                                            alert('Tem de conter uma descrição!');
                                            reject();
                                        }else{
                                            if(newData.photo.lenght<0){
                                                alert('Tem de conter uma foto!');
                                                reject();
                                            }else{
                                                setTimeout(() => {
                                                    const dataUpdate = [...data];
                                                    const index = oldData.tableData.id;
                                                    dataUpdate[index] = newData;
                                                    this.setState({
                                                        newData: newData
                                                    });
                                                    const menuID=newData.menuID;
                                                    resolve();
                                                    this.update(menuID);
                                                }, 1000)
                                            }
                                        }
                                    }
                                }
                            }
                    }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const menuID = oldData.menuId;
                                    resolve();
                                    this.delete(menuID);
                                }, 1000)
                            }),
                        }}
                    />
                } 
            />
        )
    }
}
export default withRouter(Menu);