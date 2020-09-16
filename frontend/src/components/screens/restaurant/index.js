import React from "react";
import { withRouter } from "react-router-dom";
import {OwnTable} from "../../OwnTable";
import {StructurePage} from "../../StructurePage";

const { createProxyMiddleware } = require('http-proxy-middleware');

class Restaurant extends React.Component {
    constructor(props){
        super(props);
        this.state={
            restaurant:[],
            newData:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Restaurant...");

        let token=localStorage.getItem("token");
        try {
            let response = await fetch('/Restaurante', { 
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
            this.setState({ 
                restaurant: json
            });
            console.log(json);
        } catch(e){
            console.log("Error to Get Restaurant: " + e);
        }
    }

    add = async () => {
        const { newData } = this.state;

        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Restaurante', { 
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'nome': newData.name,
                    'rua': newData.street,
                    'codigo_postal': newData.postalCode,
                    'localizacao': newData.localization,
                    'telefone': newData.telephone,
                    'email': newData.email,
                    'foto': newData.photo
                })
            });
            alert("Coluna inserida com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Post Restaurant: " + e);
        }
    }

    update = async (restaurantID) => {
        const { newData } = this.state;

        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Restaurante', { 
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "id_restaurante": restaurantID,
                    "nome": newData.name,
                    "rua": newData.street,
                    "codigo_postal": newData.postalCode,
                    "localizacao": newData.localization,
                    "telefone": newData.telephone,
                    "email": newData.email,
                    "foto": newData.photo
                })
            });
            alert("Coluna modificada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Put Restaurant: " + e);
        }
    }

    delete = async (restaurantID) => {
        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Restaurante', { 
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_restaurante': restaurantID,
                })
            });
            alert("Coluna eliminada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Delete Restaurant: " + e);
        }
    }

    test(newData, resolve, reject){
        if(/^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/.test(newData.name)){
            alert('O nome não pode conter certos caratéres especiais!');
            reject();
        }else{
            if(/^[a-zA-Z áéíóúÁÉÍÓÚãÃõÕâÂêÊîÎôÔûÛçÇ]$/.test(newData.street)){
                alert('A morada não pode conter certos caratéres especiais!');
                reject();
            }else{
                if(!/^[0-9-]*$/.test(newData.postalCode)){
                    alert('O código postal não pode conter carateres especiais!');
                    reject();
                }else{
                    if(!/^[a-zA-Z áéíóúÁÉÍÓÚãÃõÕâÂêÊîÎôÔûÛçÇ]*$/.test(newData.localization)){
                        alert('A localização não pode conter certos caratéres especiais');
                        reject();
                    }else{
                        if(!/^[0-9+]*$/.test(newData.telephone)){
                            alert('O telefone não pode conter certos caratéres especiais');
                            reject();
                        }else{
                            if(!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(newData.email)){
                                alert('O email não pode conter certos caratéres especiais');
                                reject();
                            }else{
                                if(newData.name.length < 19){
                                    alert('O nome tem de conter no mínimo 19 carateres');
                                    reject();
                                }else{
                                    if(newData.street.length < 8){
                                        alert('A morada tem de conter no mínimo 8 carateres');
                                        reject();
                                    }else{
                                        if(newData.postalCode.length < 8){
                                            alert('O código postal tem de conter no mínimo 8 carateres');
                                            reject();
                                        }else{
                                            if(newData.localization.length < 4){
                                                alert('A localização tem de conter no mínimo 4 carateres');
                                                reject();
                                            }else{
                                                if(newData.telephone.length < 9 || newData.telephone.length > 13){
                                                    alert('O telefone tem de conter no mínimo 9 e no máximo 13 carateres');
                                                    reject();
                                                }else{
                                                    if(newData.email.length < 6){
                                                        alert('O email tem de conter no mínimo 6 carateres');
                                                        reject();
                                                    }
                                                    else{
                                                        return true;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    render(){
        const { restaurant } = this.state;
        const columns= [
            { title: 'Nome', field: 'name', validate: rowData => rowData.name === '' ? { isValid: false, helperText: 'O nome tem de conter no mínimo 19 carateres' } : true, align:"center" },
            { title: 'Morada', field: 'street', validate: rowData => rowData.street === '' ? { isValid: false, helperText: 'A morada tem de conter no mínimo 8 carateres' } : true, align:"center"},
            { title: 'Código Postal', field: 'postalCode', validate: rowData => rowData.postalCode === '' ? { isValid: false, helperText: 'O código postal tem de conter no mínimo 8 carateres' } : true, align:"center"},
            { title: 'Localização', field: 'localization', validate: rowData => rowData.localization === '' ? { isValid: false, helperText: 'A localização tem de conter no mínimo 4 carateres' } : true, align:"center"},
            { title: 'Tefefone', field: 'telephone', validate: rowData => rowData.telephone === '' ? { isValid: false, helperText: 'O telefone tem de conter no mínimo 9 e no máximo 13 carateres' } : true, align:"center" },
            { title: 'Email', field: 'email', validate: rowData => rowData.email === '' ? { isValid: false, helperText: 'O email tem de conter no mínimo 6 carateres' } : true, align:"center"},
            { title: 'Foto', field: 'photo', render: rowData => <img src={rowData.photo} style={{width: '50%', borderRadius: '20%'}}/>,  validate: rowData => rowData.photo === '' ? { isValid: false, helperText: 'A foto não pode ser nula' } : true, align:"center"},
        ];
        const data = restaurant.map((item) => {
            return { restaurantId: item.id_restaurante, name: item.nome, street: item.rua, postalCode: item.codigo_postal, localization: item.localizacao, telephone: item.telefone, email: item.email, photo: item.foto};
        });;
        return (
            <StructurePage table={
                <OwnTable 
                    title="Tabela de Restaurantes" 
                    columns={columns}
                    data={data}
                    editable={{
                        onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            if(this.test(newData, resolve, reject)==false){
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
                                    const dataUpdate = [...restaurant];
                                    const index = oldData.tableData.id;
                                    dataUpdate[index] = newData;
                                    this.setState({
                                        newData: newData
                                    });
                                    const restaurantID=newData.restaurantId;
                                    resolve();
                                    this.update(restaurantID);
                                }, 1000)
                            }
                        }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const restaurantID = oldData.restaurantId;
                                    resolve();
                                    this.delete(restaurantID);
                                }, 1000)
                            }),
                        }}
                    />
                } 
            />
        )
    }
}

export default withRouter(Restaurant);