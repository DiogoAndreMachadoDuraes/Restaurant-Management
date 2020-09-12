import React from "react";
import { withRouter } from "react-router-dom";
import {OwnTable} from "../../OwnTable";
import {SecoundTable} from "../../SecoundTable";
import {StructurePage} from "../../StructurePage";

const { createProxyMiddleware } = require('http-proxy-middleware');

class Reservation extends React.Component {
    constructor(props){
        super(props);
        this.state={
            reserve:[],
            newData:[],
            takeAway:[],
            newDataTakeAway:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Reservation...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0xNCAyMDozODo0MiJ9.BbUHpKWZCH-3tcUaCDN0iKhs5saeDwDGnGSQLlqU53c";
        try {
            let response = await fetch('/Reserva', { 
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
            this.setState({ 
                reserve: json
            });
            console.log(json);
        } catch(e){
            console.log("Error to get Reservation: " + e);
        }
    
        try {
            let response = await fetch('/Take_away', 
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
                takeAway: res
            });
        } catch(e){
            console.log("Error to get Take Away: " + e);
        }
}

    add = async () => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Reserva', { 
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'data': newData.date,
                    'hora': newData.hour,
                    'quantidade_pessoas': newData.quantity,
                    'data_marcada': newData.pointDate,
                    'hora_marcada': newData.pointHour,
                    'estado': newData.status
                })
            });
            alert("Coluna inserida com sucesso!");
        } catch(e){
            console.log("Error to Post Reserva: " + e);
        }
    }

    update = async (reserveID) => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Reserva', { 
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_reserva': reserveID,
                    'data': newData.date,
                    'hora': newData.hour,
                    'quantidade_pessoas': newData.quantity,
                    'data_marcada': newData.pointDate,
                    'hora_marcada': newData.pointHour,
                    'estado': newData.status
                })
            });
            alert("Coluna modificada com sucesso!");
        } catch(e){
            console.log("Error to Put Reserva: " + e);
        }
    }

    delete = async (reserveID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Reserva', { 
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_reserva': reserveID
                })
            });
            alert("Coluna eliminada com sucesso!");
        } catch(e){
            console.log("Error to Delete Reserva: " + e);
        }
    }
    
    addTakeAway = async () => {
        const { newDataTakeAway} = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Take_away', { 
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'tipo_entrega': newDataTakeAway.type,
                    'preco': newDataTakeAway.price,
                    'estado': newDataTakeAway.status,
                    /* 'id_funcionario': newDataTakeAway.employeeId,
                    'id_reserva': newDataTakeAway.reservationId */
                })
            });
            alert("Coluna inserida com sucesso!");
            console.log(response);
        } catch(e){
            console.log("Error to Post Take Away: " + e);
        }
    }

    updateTakeAway = async (takeAwayID) => {
        const { newDataTakeAway } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Take_away', { 
                method: 'PUT',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_take_away': takeAwayID,
                    'tipo_entrega': newDataTakeAway.type,
                    'preco': newDataTakeAway.price,
                    'estado': newDataTakeAway.status,
                    /* 'id_funcionario': newDataTakeAway.employeeId,
                    'id_reserva': newDataTakeAway.reservationId */
                })
            });
            alert("Coluna modificada com sucesso!");
        } catch(e){
            console.log("Error to Put Take Away: " + e);
        }
    }

    deleteTakeAway = async (takeAwayID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Take_away', { 
                method: 'DELETE',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_take_away': takeAwayID
                })
            });
            alert("Coluna eliminada com sucesso!");
        } catch(e){
            console.log("Error to Delete Take Away: " + e);
        }
    }

    showDetails(reserveID) {
        const { takeAway } = this.state;
        const columnsTakeAway= [
            { title: 'Tipo de Entrega', field: 'type',  lookup: { 'Domicílio': 'Domicílio', 'Restaurente': 'Restaurante'},  align:"center"},
            { title: 'Preço (€)', field: 'price', validate: rowData => rowData.price < 0 ? 'O preço não pode ser negativo' : '', type: "numeric", align:"center"},
            { title: 'Estado da Encomenda', field: 'status',  lookup: { 'Em processamento': 'Em processamento', 'Em análise': 'Em análise', 'Concluído':'Concluído' },  align:"center"}
        ];
        const takeReservation=takeAway.filter(a=>a.id_reserva==reserveID).map(a=>a);
        const dataTakeAway = takeReservation.map((item) => {
            return { takeAwayId: item.id_take_away, quantity: item.quantidade};
        });;
    
    return (
        <div style={{ marginTop: 20, marginLeft: 20, marginBottom: 20, marginInlineEnd: 20}}>
            <SecoundTable
                title="Tabela Take Away"
                columns={columnsTakeAway}
                data={dataTakeAway}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                                if(newData.price<0) {
                                    alert('O preço não pode ser negativo!');
                                    reject();
                                }
                                            setTimeout(() => {
                                                this.setState({
                                                    newDataTakeAway: newData
                                                });
                                                resolve();
                                                this.addTakeAway();
                                            }, 100)
                    }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            if(newData.price<0) {
                                    alert('O preço não pode ser negativo!');
                                    reject();
                                }
                                            setTimeout(() => {
                                                const dataUpdate = [...takeAway];
                                                const index = oldData.tableData.id;
                                                dataUpdate[index] = newData;
                                                this.setState({
                                                    newDataTakeAway: newData
                                                });
                                                const takeAwayID=newData.takeAwayID;
                                                resolve();
                                                this.updateTakeAway(takeAwayID);
                                            }, 1000)
                    }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                const takeAwayID = oldData.takeAwayId;
                                resolve();
                                this.deleteTakeAway(takeAwayID);
                            }, 1000)
                        }),
                }}
            />
        </div>
    )
}
    
    render(){
        const { reserve } = this.state;
        const {classes} = this.props;
        const columns= [
            { title: 'Data', field: 'date', validate: rowData => rowData.date <= 0 ? 'A data não pode ser 0 nem negativa' : '', type: "numeric", align:"center"},
            { title: 'Hora', field: 'hour', validate: rowData => rowData.hour <= 0 ? 'A hora não pode ser 0 nem negativa' : '', type: "numeric", align:"center"},
            { title: 'Número de pessoas', field: 'quantity', validate: rowData => rowData.quantity < 0 ? 'A quantidade de pessoas não pode ser negativa' : '', type: "numeric", align:"center"},            { title: 'Foto', field: 'photo', render: rowData => <img src={rowData.photo} style={{width: '50%', borderRadius: '20%'}}/>, align:"center"},
            { title: 'Data marcada', field: 'pointDate', validate: rowData => rowData.pointDate <= 0 ? 'A data não pode ser 0 nem negativa' : '', type: "numeric", align:"center"},
            { title: 'Hora marcada', field: 'pointHour', validate: rowData => rowData.pointHour <= 0 ? 'A hora marcada não pode ser 0 nem negativa' : '', type: "numeric", align:"center"}        ];
        const data = reserve.map((item) => {
            return { reserveId: item.id_reserva, name: item.nome, description: item.descricao, type: item.tipo, photo: item.foto, price: item.preco};
        });;
        const tableRef = React.createRef();
        return (
            <StructurePage table={
                <OwnTable 
                    title="Tabela das Reservas" 
                    columns={columns}
                    data={data}
                    detailPanel={rowData => this.showDetails(1)}
                    editable={{
                        onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            if(newData.date==null || newData.hour==null || newData.pointDate==null || newData.pointHour==null) {
                                alert('Nenhum dos valores inseridos pode ser nulo!');
                                reject();
                            }else{
                                if(newData.date<0 || newData.hour<0 || newData.quantity<0 || newData.pointDate<0 || newData.pointHour<0 ) {
                                    alert('A quantidade de pessoas, a data, a hora, a data marcada e/ou a hora marcada não pode ser negativa!');
                                    reject();
                                }
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
                            if(newData.date==null || newData.hour==null || newData.pointDate==null || newData.pointHour==null) {
                                alert('Nenhum dos valores inseridos pode ser nulo!');
                                reject();
                            }else{
                                if(newData.date<0 || newData.hour<0 || newData.quantity<0 || newData.pointDate<0 || newData.pointHour<0 ) {
                                    alert('A quantidade de pessoas, a data, a hora, a data marcada e/ou a hora marcada não pode ser negativa!');
                                    reject();
                                }
                                                setTimeout(() => {
                                                    const dataUpdate = [...data];
                                                    const index = oldData.tableData.id;
                                                    dataUpdate[index] = newData;
                                                    this.setState({
                                                        newData: newData
                                                    });
                                                    const reserveID=newData.reserveID;
                                                    resolve();
                                                    this.update(reserveID);
                                                }, 1000)
                                            }
                    }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const reserveID = oldData.reserveId;
                                    resolve();
                                    this.delete(reserveID);
                                }, 1000)
                            }),
                        }}
                    />
                } 
            />
        )
    }
}
export default withRouter(Reservation);