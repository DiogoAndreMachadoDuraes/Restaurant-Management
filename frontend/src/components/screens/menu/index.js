import React from "react";
import { withRouter } from "react-router-dom";
import {OwnTable} from "../../OwnTable";
import {StructurePage} from "../../StructurePage";

const { createProxyMiddleware } = require('http-proxy-middleware');

class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            menu:[],
            newData:[],
            specialMenu: []
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Menu...");
        let token=localStorage.getItem("token");
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
            let response = await fetch('/Ementa', 
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
                specialMenu: res
            });
        } catch(e){
            console.log("Error to get Special Menu: " + e);
        }
}

    add = async () => {
        const { newData } = this.state;
        console.log(newData);
        let token=localStorage.getItem("token");
        try{
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
                    'preco': newData.price,
                    'id_ementa': newData.specialMenuId
                })
            });
            alert("Coluna inserida com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Post Menu: " + e);
        }
    }

    update = async (menuID) => {
        const { newData } = this.state;
        let token=localStorage.getItem("token");
        try{
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
                    'preco': newData.price,
                    'id_ementa': newData.specialMenuId
                })
            });
            alert("Coluna modificada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Put Menu: " + e);
        }
    }

    delete = async (menuID) => {
        let token=localStorage.getItem("token");
        try{
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
            window.location.reload();
        } catch(e){
            console.log("Error to Delete Menu: " + e);
        }
    }
    
    test(newData, resolve, reject){
        if(newData.type==null || newData.price==null || newData.photo==null || newData.name==null || newData.description==null){
            alert('Nenhum dos valores inseridos pode ser nulo!');
            reject();
        }else{
            if(/^[a-zA-Z áéíóúÁÉÍÓÚãÃõÕâÂêÊîÎôÔûÛçÇ]$/.test(newData.name)) {
                alert('O nome não é válido!');
                reject();
            }else{
                if(newData.price<0){
                    alert('O preço tem de ser positivo!');
                    reject();
                }else{
                    if(newData.name.length<3){
                        alert('O nome tem de conter no mínimo 3 carateres!');
                        reject();
                    }else{
                        if(newData.photo.length<0){
                            alert('Tem de conter uma foto!');
                            reject();
                        }else{
                            if(newData.description.length<5){
                                alert('A descrição tem de conter no mínimo 5 carateres!');
                                reject();
                            }else{
                                if(/^[a-zA-Z áéíóúÁÉÍÓÚãÃõÕâÂêÊîÎôÔûÛçÇ]$/.test(newData.description)) {
                                    alert('A descrição não é válida!');
                                    reject();
                                }else{
                                return true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    render(){
        const { menu, specialMenu } = this.state;
        const data = menu.map((item) => {
            return { menuId: item.id_menu, name: item.nome, description: item.descricao, type: item.tipo, photo: item.foto, price: item.preco, specialMenuId: item.id_ementa};
        });;
        const specialMenuName = specialMenu.map(a=>a.tipo);
        const columns= [
            { title: 'Nome', field: 'name', validate: rowData => rowData.name === '' ? { isValid: false, helperText: 'O nome não pode ser nulo' } : true, align:"center"},
            { title: 'Descrição', field: 'description', validate: rowData => rowData.description === '' ? { isValid: false, helperText: 'A descrição não pode ser nula' } : true, align:"center"},
            { title: 'Tipo', field: 'type',  lookup: { 'Menu Hambúrguer': 'Menu Hambúrguer', 'Pratos de Carne': 'Pratos de Carne', 'Pratos de Peixe':'Pratos de Peixe', 'Menu Pizza':'Menu Pizza', 'Menu Francesinha':'Menu Francesinha', 'Pratos Vegan':'Pratos Vegan', 'Menu Café':'Menu Café' },  align:"center"},
            { title: 'Foto', field: 'photo', render: rowData => <img src={rowData.photo} style={{width: '50%', borderRadius: '20%'}}/>, validate: rowData => rowData.photo === '' ? { isValid: false, helperText: 'A foto não pode ser nula' } : true, align:"center"},
            { title: 'Preço (€)', field: 'price', validate: rowData => rowData.price <= 0 ? { isValid: false, helperText: 'O preço não pode ser negativo' } : true, type: "numeric", align:"center"},
            { title: 'Ementa correspondente', field: 'specialMenuId',  lookup: { 1: specialMenuName[0], 2: specialMenuName[1], 3: specialMenuName[2], 4: specialMenuName[3], 5: specialMenuName[4] },  align:"center"},
        ];

        return (
            <StructurePage table={
                <OwnTable 
                    title="Tabela dos Menus" 
                    columns={columns}
                    data={data}
                    editable={{
                        onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            if(this.test(newData, resolve, reject)!=true){
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
                        }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                if(this.test(newData, resolve, reject)!=true){
                                        reject();
                                    }else{
                                        setTimeout(() => {
                                            const dataUpdate = [...data];
                                            const index = oldData.tableData.id;
                                            dataUpdate[index] = newData;
                                            this.setState({
                                                newData: newData
                                            });
                                            const menuID=newData.menuId;
                                            resolve();
                                            this.update(menuID);
                                        }, 1000)
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