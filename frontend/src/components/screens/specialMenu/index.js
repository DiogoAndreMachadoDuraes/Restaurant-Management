import React from "react";
import { withRouter } from "react-router-dom";
import {OwnTable} from "../../OwnTable";
import {SecoundTable} from "../../SecoundTable";
import {StructurePage} from "../../StructurePage";

const { createProxyMiddleware } = require('http-proxy-middleware');

class SpecialMenu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            buySpecialMenu:[],
            newData:[],
            meal:[],
            newDataMeal:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Special Menu...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0xNCAyMDozODo0MiJ9.BbUHpKWZCH-3tcUaCDN0iKhs5saeDwDGnGSQLlqU53c";
        try {
            let response = await fetch('/Ementa', { 
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
            this.setState({ 
                buySpecialMenu: json
            });
            console.log(json);
        } catch(e){
            console.log("Error to get Buy Special Menu: " + e);
        }
    
    try {
        let response = await fetch('/Refeicao_semanal', 
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
            meal: res
        });
    } catch(e){
        console.log("Error to get Refeiçao Semanal: " + e);
    }
}

    add = async () => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Ementa', { 
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
            console.log("Error to Post Buy Special Menu: " + e);
        }
    }

    update = async (buySpecialMenuID) => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Ementa', { 
                method: 'PUT',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_ementa': buySpecialMenuID,
                    'nome': newData.name,
                    'descricao': newData.description,
                    'tipo': newData.type,
                    'foto': newData.photo,
                    'preco': newData.price
                })
            });
            alert("Coluna modificada com sucesso!");
        } catch(e){
            console.log("Error to Put Buy Special Menu: " + e);
        }
    }

    delete = async (buySpecialMenuID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Ementa', { 
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_ementa': buySpecialMenuID
                })
            });
            alert("Coluna eliminada com sucesso!");
        } catch(e){
            console.log("Error to Delete Buy Special Menu: " + e);
        }
    }
    
    addMeal = async () => {
        const { newDataMeal } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Refeicao_semanal', { 
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'dia_semana': newDataMeal.weekDay,
                    'data': newDataMeal.date,
                    'hora': newDataMeal.hour,
                    /* 'id_restaurante': newDataMeal.restaurantId,
                    'id_ementa': newDataMeal.specialMenuId */
                })
            });
            alert("Coluna inserida com sucesso!");
            console.log(response);
        } catch(e){
            console.log("Error to Post Refeição Semanal: " + e);
        }
    }

    updateMeal = async (mealID) => {
        const { newDataMeal } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Refeicao_semanal', { 
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_refeicao_semanal': mealID,
                    'dia_semana': newDataMeal.weekDay,
                    'data': newDataMeal.date,
                    'hora': newDataMeal.hour,
                    /* 'id_restaurante': newDataMeal.restaurantId,
                    'id_ementa': newDataMeal.specialMenuId */
                })
            });
            alert("Coluna modificada com sucesso!");
        } catch(e){
            console.log("Error to Put Refeição Semanal: " + e);
        }
    }

    deleteMeal = async (mealID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Refeicao_semanal', { 
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_refeicao_semanal': mealID
                })
            });
            alert("Coluna eliminada com sucesso!");
        } catch(e){
            console.log("Error to Delete Refeição semanal: " + e);
        }
    }

    showDetails(buySpecialMenuID) {
        const { meal } = this.state;
        const columnsMeal= [
            { title: 'Dia da Semana', field: 'weekDay', lookup: { 'Segunda feira': 'Segunda feira', 'Terça feira': 'Terça feira', 'Quarta feira': 'Quarta feira', 'Quinta feira':'Quinta feira', 'Sexta feira':'Sexta feira', 'Sábado':'Sábado'  }, align:"center"},
            { title: 'Data', field: 'date', validate: rowData => rowData.date <= 0 ? 'A data não pode ser 0 nem negativa' : '', type: "numeric", align:"center"},
            { title: 'Hora', field: 'hour', validate: rowData => rowData.hour <= 0 ? 'A hora não pode ser 0 nem negativa' : '', type: "numeric", align:"center"}
        ];
        const mealSpecialMenu=meal.filter(a=>a.id_ementa==buySpecialMenuID).map(a=>a);
        const dataMeal = mealSpecialMenu.map((item) => {
            return { mealId: item.id_refeicao_semanal, weekDay: item.dia_semana, date: item.data, hour: item.hora};
        });;
    
    return (
        <div style={{ marginTop: 20, marginLeft: 20, marginBottom: 20, marginInlineEnd: 20}}>
            <SecoundTable
                title="Refeiçao Semanal"
                columns={columnsMeal}
                data={dataMeal}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            if(newData.quantity==null || newData.type==null) {
                                alert('Nenhum dos valores inseridos pode ser nulo!');
                                reject();
                            }else{
                                if(newData.quantity<0) {
                                    alert('A quantidade não pode ser 0!');
                                    reject();
                                }else{
                                    if(Number.isInteger(newData.quantity)==false){
                                        alert('A quantidade tem de ser do tipo inteiro!');
                                        reject();
                                    }else{
                                        if(newData.type.lenght<0){
                                            alert('Tem de conter uma descrição!');
                                            reject();
                                        }else{
                                            setTimeout(() => {
                                                this.setState({
                                                    newDataMeal: newData
                                                });
                                                resolve();
                                                this.addMeal();
                                            }, 100)
                                        }
                                    }
                                }
                            }
                    }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            if(newData.quantity==null || newData.type==null) {
                                alert('Nenhum dos valores inseridos pode ser nulo!');
                                reject();
                            }else{
                                if(newData.quantity<0) {
                                    alert('A quantidade não pode ser 0!');
                                    reject();
                                }else{
                                    if(Number.isInteger(newData.quantity)==false){
                                        alert('A quantidade tem de ser do tipo inteiro!');
                                        reject();
                                    }else{
                                        if(newData.type.lenght<0){
                                            alert('Tem de conter uma descrição!');
                                            reject();
                                        }else{
                                            setTimeout(() => {
                                                const dataUpdate = [...meal];
                                                const index = oldData.tableData.id;
                                                dataUpdate[index] = newData;
                                                this.setState({
                                                    newDataMeal: newData
                                                });
                                                const mealID=newData.mealID;
                                                resolve();
                                                this.updateMeal(mealID);
                                            }, 1000)
                                        }
                                    }
                                }
                            }
                    }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const mealID = oldData.mealId;
                                resolve();
                                this.deleteMeal(mealID);
                            }, 1000)
                        }),
                }}
            />
        </div>
    )
}
    
    render(){
        const { buySpecialMenu } = this.state;
        const {classes} = this.props;
        const columns= [
            { title: 'Nome', field: 'name', validate: rowData => rowData.name === '' ? 'O nome não pode ser nulo' : '', align:"center"},
            { title: 'Descrição', field: 'description', validate: rowData => rowData.description === '' ? 'A descrição não pode ser nula' : '', align:"center"},
            { title: 'Tipo', field: 'type',  lookup: { 'Prato do Dia': 'Prato do Dia', 'Aniversários': 'Aniversários', 'Casamentos':'Casamentos', 'Batizados':'Batizados', 'Baby Shower':'Baby Shower' },  align:"center"},
            { title: 'Foto', field: 'photo', render: rowData => <img src={rowData.photo} style={{width: '50%', borderRadius: '20%'}}/>, align:"center"},
            { title: 'Preço (€)', field: 'price', validate: rowData => rowData.birthYear <= 0 ? 'O preço não pode ser negativo' : '', type: "numeric", align:"center"}
        ];
        const data = buySpecialMenu.map((item) => {
            return { specialMenuId: item.id_ementa, name: item.nome, description: item.descricao, type: item.tipo, photo: item.foto, price: item.preco};
        });;
        const tableRef = React.createRef();
        return (
            <StructurePage table={
                <OwnTable 
                    title="Tabela de Ementas" 
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
                                                    const specialMenuID=newData.specialMenuID;
                                                    resolve();
                                                    this.update(specialMenuID);
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
                                    const buySpecialMenuID = oldData.buySpecialMenuId;
                                    resolve();
                                    this.delete(buySpecialMenuID);
                                }, 1000)
                            }),
                        }}
                    />
                } 
            />
        )
    }
}
export default withRouter(SpecialMenu);