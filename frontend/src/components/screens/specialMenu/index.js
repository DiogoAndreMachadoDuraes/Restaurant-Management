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
            menuSpecialMenu:[],
            newData:[],
            meal:[],
            newDataMeal:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Special Menu...");
        let token=localStorage.getItem("token");
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
                menuSpecialMenu: json
            });
            console.log(json);
        } catch(e){
            console.log("Error to get Menu Special Menu: " + e);
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
        let token=localStorage.getItem("token");
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
            window.location.reload();
        } catch(e){
            console.log("Error to Post Buy Special Menu: " + e);
        }
    }

    update = async (specialMenuID) => {
        const { newData } = this.state;
        console.log(newData);
        console.log(specialMenuID);
        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Ementa', { 
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_ementa': specialMenuID,
                    'nome': newData.name,
                    'descricao': newData.description,
                    'tipo': newData.type,
                    'foto': newData.photo,
                    'preco': newData.price
                })
            });
            alert("Coluna modificada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Put Special Menu: " + e);
        }
    }

    delete = async (specialMenuID) => {
        let token=localStorage.getItem("token");
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
                    'id_ementa': specialMenuID
                })
            });
            alert("Coluna eliminada com sucesso!");
            window.location.reload();
        } catch(e){
            console.log("Error to Delete Special Menu: " + e);
        }
    }
    
    addMeal = async () => {
        const { newDataMeal } = this.state;
        let token=localStorage.getItem("token");
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
            window.location.reload();
            console.log(response);
        } catch(e){
            console.log("Error to Post Refeição Semanal: " + e);
        }
    }

    updateMeal = async (mealID) => {
        const { newDataMeal } = this.state;
        let token=localStorage.getItem("token");
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
            window.location.reload();
        } catch(e){
            console.log("Error to Put Refeição Semanal: " + e);
        }
    }

    deleteMeal = async (mealID) => {
        let token=localStorage.getItem("token");
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
            window.location.reload();
        } catch(e){
            console.log("Error to Delete Refeição semanal: " + e);
        }
    }

    testMeal(newData, resolve, reject){
        if(newData.weekDay==null || newData.date==null || newData.hour==null){
            alert('Nenhum dos valores inseridos pode ser nulo!');
            reject();
            }else{
                return true;
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
                                if(newData.price>=0){
                                    alert('O preço tem de ser positivo!');
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

    showDetails(menuSpecialMenuID) {
        const { meal } = this.state;
        const columnsMeal= [
            { title: 'Dia da Semana', field: 'weekDay', lookup: { 'Segunda feira': 'Segunda feira', 'Terça feira': 'Terça feira', 'Quarta feira': 'Quarta feira', 'Quinta feira':'Quinta feira', 'Sexta feira':'Sexta feira', 'Sábado':'Sábado'  }, align:"center"},
            { title: 'Data', field: 'date', validate: rowData => rowData.date <= 0 ? { isValid: false, helperText: 'A data não pode ser nula' } : true, align:"center"},
            { title: 'Hora', field: 'hour', validate: rowData => rowData.hour <= 0 ? { isValid: false, helperText: 'A hora não pode ser nula' } : true, align:"center"}
        ];
        const mealSpecialMenu=meal.filter(a=>a.id_ementa==menuSpecialMenuID).map(a=>a);
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
                            if(this.testMeal(newData, resolve, reject)!=true){
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
                    }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            if(this.testMeal(newData, resolve, reject)!=true){
                                    reject();
                                }else{
                                            setTimeout(() => {
                                                const dataUpdate = [...meal];
                                                const index = oldData.tableData.id;
                                                dataUpdate[index] = newData;
                                                this.setState({
                                                    newDataMeal: newData
                                                });
                                                const mealID=newData.mealId;
                                                resolve();
                                                this.updateMeal(mealID);
                                            }, 1000)
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
        const { menuSpecialMenu } = this.state;
        const columns= [
            { title: 'Nome', field: 'name', validate: rowData => rowData.name === '' ? { isValid: false, helperText: 'O nome não pode ser nulo' } : true, align:"center"},
            { title: 'Descrição', field: 'description', validate: rowData => rowData.description === '' ? { isValid: false, helperText: 'A descrição não pode ser nula' } : true, align:"center"},
            { title: 'Tipo', field: 'type',  lookup: { 'Prato do Dia': 'Prato do Dia', 'Aniversários': 'Aniversários', 'Casamentos':'Casamentos', 'Batizados':'Batizados', 'Baby Shower':'Baby Shower' },  align:"center"},
            { title: 'Foto', field: 'photo', render: rowData => <img src={rowData.photo} style={{width: '50%', borderRadius: '20%'}}/>, validate: rowData => rowData.photo === '' ? { isValid: false, helperText: 'A foto não pode ser nula' } : true, align:"center"},
            { title: 'Preço (€)', field: 'price', validate: rowData => rowData.price <= 0 ? { isValid: false, helperText: 'O preço não pode ser negativo' } : true, type: "numeric", align:"center"}        ];
        const data = menuSpecialMenu.map((item) => {
            return { specialMenuId: item.id_ementa, name: item.nome, description: item.descricao, type: item.tipo, photo: item.foto, price: item.preco};
        });;
        return (
            <StructurePage table={
                <OwnTable 
                    title="Tabela de Ementas" 
                    columns={columns}
                    data={data}
                    detailPanel={rowData => this.showDetails(rowData.specialMenuId)}
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
                                                    const specialMenuID=newData.specialMenuId;
                                                    resolve();
                                                    this.update(specialMenuID);
                                                }, 1000)
                                            }
                    }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const specialMenuID = oldData.specialMenuId;
                                    resolve();
                                    this.delete(specialMenuID);
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