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
            newDataTakeAway:[],
            invoice:[],
            newDataInvoice:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Reservation...");
        let token=localStorage.getItem("token");
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
            let response = await fetch('/Fatura', 
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
                invoice: res
            });
        } catch(e){
            console.log("Error to get Invoice: " + e);
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

    update = async (reserveID) => {
        const { newData } = this.state;
        let token=localStorage.getItem("token");
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
            window.location.reload();
        } catch(e){
            console.log("Error to Put Reserva: " + e);
        }
    }

    delete = async (reserveID) => {
        let token=localStorage.getItem("token");
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
            window.location.reload();
        } catch(e){
            console.log("Error to Delete Reserva: " + e);
        }
    }
    
    addTakeAway = async () => {
        const { newDataTakeAway} = this.state;
        let token=localStorage.getItem("token");
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
            window.location.reload();
            console.log(response);
        } catch(e){
            console.log("Error to Post Take Away: " + e);
        }
    }

    updateTakeAway = async (takeAwayID) => {
        const { newDataTakeAway } = this.state;
        let token=localStorage.getItem("token");
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
            window.location.reload();
        } catch(e){
            console.log("Error to Put Take Away: " + e);
        }
    }

    deleteTakeAway = async (takeAwayID) => {
        let token=localStorage.getItem("token");
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
            window.location.reload();
        } catch(e){
            console.log("Error to Delete Take Away: " + e);
        }
    }

    addInvoice = async () => {
        const { newDataInvoice } = this.state;
        let token=localStorage.getItem("token");
        try
        {
            let response = await fetch('/Fatura', { 
                method: 'POST',
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'iva': newDataInvoice.iva,
                    'taxa': newDataInvoice.tax,
                    'valor_total': newDataInvoice.totalValue,
                    'nif_cliente': newDataInvoice.tin,
                    /* 'id_reserva': newDataInvoice.invoiceId,*/
                })
            });
            alert("Coluna inserida com sucesso!");
            window.location.reload();
            console.log(response);
        } catch(e){
            console.log("Error to Post Fatura: " + e);
        }
    }

    testTakeAway(newData, resolve, reject){
        if(newData.type==null || newData.price==null || newData.status==null){
            alert('Nenhum dos valores inseridos pode ser nulo!');
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

    test(newData, resolve, reject){
        if(newData.date==null || newData.hour==null || newData.quantity==null || newData.pointDate==null || newData.pointHour==null){
            alert('Nenhum dos valores inseridos pode ser nulo!');
            reject();
        }else{
            if(newData.quantity>0){
                alert('A quantidade de pessoas tem de ser maior que 0!');
                reject();
            }else{
            return true;
        }
    }
    }

    showDetails(reserveID) {
        const { takeAway, invoice } = this.state;
        const columnsTakeAway= [
            { title: 'Tipo de Entrega', field: 'type',  lookup: { 'Domicílio': 'Domicílio', 'Restaurente': 'Restaurante'},  align:"center"},
            { title: 'Preço (€)', field: 'price', validate: rowData => rowData.price < 0 ? { isValid: false, helperText: 'O preço não pode ser nulo' } : true, type: "numeric", align:"center"},
            { title: 'Estado da Encomenda', field: 'status',  lookup: { 'Em processamento': 'Em processamento', 'Em análise': 'Em análise', 'Concluído':'Concluído' },  align:"center"}
        ];
        const takeReservation=takeAway.filter(a=>a.id_reserva==reserveID).map(a=>a);
        const dataTakeAway = takeReservation.map((item) => {
            return { takeAwayId: item.id_take_away, type: item.tipo_entrega, price: item.preco, status: item.estado };
        });;
        const columnsInvoice= [
            { title: 'Iva', field: 'iva', validate: rowData => rowData.iva === '' ? { isValid: false, helperText: 'O iva não pode ser nulo' } : true , align:"center"},
            { title: 'Taxa', field: 'tax', validate: rowData => rowData.tax === '' ? { isValid: false, helperText: 'A taxa não pode ser nula' } : true , align:"center"},
            { title: 'Valor total €', field: 'totalValue', validate: rowData => rowData.totalValue === '' ? { isValid: false, helperText: 'O valor total não pode ser nulo' } : true , align:"center"},
            { title: 'Nif do Cliente', field: 'tin', validate: rowData => rowData.tin === '' ?{ isValid: false, helperText: 'O nif do cliente não pode ser nulo' } : true, align:"center"}
        ];
        const invoiceUser=invoice.filter(a=>a.id_reserva==reserveID).map(a=>a);
        console.log(invoiceUser);
        const dataInvoice= invoiceUser.map((item) => {
            return { invoiceId: item.id_fatura, iva: item.iva, tax: item.taxa, totalValue: item.valor_total, tin: item.nif_cliente};
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
                            if(this.testTakeAway(newData, resolve, reject)!=true){
                                    reject();
                                }else{
                                            setTimeout(() => {
                                                this.setState({
                                                    newDataTakeAway: newData
                                                });
                                                resolve();
                                                this.addTakeAway();
                                            }, 100)
                                }
                    }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            if(this.testTakeAway(newData, resolve, reject)!=true){
                                    reject();
                                }else{
                                            setTimeout(() => {
                                                const dataUpdate = [...takeAway];
                                                const index = oldData.tableData.id;
                                                dataUpdate[index] = newData;
                                                this.setState({
                                                    newDataTakeAway: newData
                                                });
                                                const takeAwayID=newData.takeAwayId;
                                                resolve();
                                                this.updateTakeAway(takeAwayID);
                                            }, 1000)
                                }
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
<div style={{ marginTop: 20}}>
<SecoundTable
    title="Tabela das Faturas"
    columns={columnsInvoice}
    data={dataInvoice}
    editable={{
        onRowAdd: newData =>
            new Promise((resolve, reject) => {
                if(this.testInvoice(newData, resolve, reject)!=true){
                reject();
            }else{
                        setTimeout(() => {
                        this.setState({
                        newDataInvoice: newData
                        });
                        resolve();
                        this.addInvoice();
                        }, 1000)
                    }                                            
        })
    }}
/>
</div>
</div>
)
}
    
    render(){
        const { reserve } = this.state;
        const columns= [
            { title: 'Data', field: 'date', validate: rowData => rowData.date <= 0 ? { isValid: false, helperText: 'A data não pode ser nula' } : true, align:"center"},
            { title: 'Hora', field: 'hour', validate: rowData => rowData.hour <= 0 ? { isValid: false, helperText: 'A hora não pode ser nula' } : true, align:"center"},
            { title: 'Número de pessoas', field: 'quantity', validate: rowData => rowData.quantity < 0 ? { isValid: false, helperText: 'O número de pessoas não pode ser nulo' } : true, type: "numeric", align:"center"},            { title: 'Foto', field: 'photo', render: rowData => <img src={rowData.photo} style={{width: '50%', borderRadius: '20%'}}/>, align:"center"},
            { title: 'Data marcada', field: 'pointDate', validate: rowData => rowData.pointDate <= 0 ? { isValid: false, helperText: 'A data marcada não pode ser nula' } : true, align:"center"},
            { title: 'Hora marcada', field: 'pointHour', validate: rowData => rowData.pointHour <= 0 ? { isValid: false, helperText: 'A hora marcada não pode ser nula' } : true, align:"center"}   
        ];
        const data = reserve.map((item) => {
            return { reserveId: item.id_reserva, date: item.data, hour: item.hora, quantity: item.quantidade_pessoas, pointDate: item.data_marcada, pointHour: item.hora_marcada};
        });;
        return (
            <StructurePage table={
                <OwnTable 
                    title="Tabela das Reservas" 
                    columns={columns}
                    data={data}
                    detailPanel={rowData => this.showDetails(rowData.reserveId)}
                    editable={{
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
                                                    const reserveID=newData.reserveId;
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