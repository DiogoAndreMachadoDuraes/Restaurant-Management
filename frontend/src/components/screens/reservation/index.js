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
            reservation:[],
            newData: [],
            takeAway:[],
            newDataTakeAway:[]
        }
    }

    async componentDidMount (){ 
        console.log("Mounting the screen Reservation...");

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try {
            let response = await fetch('/Reserva', { 
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            console.log(response);
            let json = await response.json();
            this.setState({ 
                reservation: json
            });
        } catch(e){
            console.log("Error to Get Reservation: " + e);
        }

        try {
            let response = await fetch('/Take_away', { 
                headers: {
                    Authorization: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            let json = await response.json();
            this.setState({ 
                takeAway: json
            });
            console.log(json);
        } catch(e){
            console.log("Error to get Take Away: " + e);
        }
    }

    add = async () => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Cliente', { 
                method: 'POST',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'data': newData.date,
                    'hora': newData.hour,
                    'quantidade_pessoas': newData.quantity,
                    'data_marcada': newData.pointDate,
                    'hora_marcada': newData.pointHour,
                    'estado': newData.state,
                    'id_cliente': newData.clientId 
                })
            });
            alert("Coluna inserida com sucesso!");
        } catch(e){
            console.log("Error to Post Reservation: " + e);
        }
    }

    update = async (reservationID) => {
        const { newData } = this.state;

        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Reserva', { 
                method: 'PUT',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_reserva': reservationID,
                    'data': newData.date,
                    'hora': newData.hour,
                    'quantidade_pessoas': newData.quantity,
                    'data_marcada': newData.pointDate,
                    'hora_marcada': newData.pointHour,
                    'estado': newData.state,
                    'id_cliente': newData.clientId 
                })
            });
            alert("Coluna modificada com sucesso!");
        } catch(e){
            console.log("Error to Put Reserva: " + e);
        }
    }

    delete = async (reservationID) => {
        let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91dGlsaXphZG9yIjoxLCJub21lIjoiSm9zXHUwMGU5IExlaXRlIE1hY2hhZG8iLCJlbWFpbCI6Impvc2VsZWl0ZW1AZ21haWwuY29tIiwiZXhwaXJlZF9kYXRlIjoiMjAyMC0wOS0wMiAxNzo0NDo1MyJ9.LcyoUq6SExv5wNEylr0wL7u0Eic0hRuTxB1zOOUIm5g";
        try
        {
            let response = await fetch('/Reserva', { 
                method: 'DELETE',
                headers: {
                    Autentication: 'Bearer ' + token,
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    'id_reserva': reservationID,
                })
            });
            alert("Coluna eliminada com sucesso!");
        } catch(e){
            console.log("Error to Delete Reservation: " + e);
        }
    }

    addTakeAway = async () => {
        const { newDataTakeAway } = this.state;

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
            let response = await fetch('/Take_Away', { 
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

    showDetails(reservationID) {
        const { takeAway } = this.state;
        const columnsTakeAway= [
            { title: 'Tipo de Entrega', field: 'type', lookup: { 'Domicílio': 'Domicílio', 'Terça feira': ''}, align:"center"},
            { title: 'Preço (€)', field: 'price', validate: rowData => rowData.price <= 0 ? 'O preço não pode ser negativo' : '', type: "numeric", align:"center"},
            { title: 'Estado da Encomenda', field: 'status', validate: rowData => rowData.status <= 0 ? 'O estado da encomenda não pode ser 0 nem negativo' : '', type: "numeric", align:"center"}
        ];
        const takeReservation=takeAway.filter(a=>a.id_reserva==reservationID).map(a=>a);
        const dataTakeAway = takeReservation.map((item) => {
            return { takeAwayId: item.id_take_away, type: item.tipo_entrega, price: item.preco, status: item.estado};
        });;
    
    return (
        <div style={{ marginTop: 20, marginLeft: 20, marginBottom: 20, marginInlineEnd: 20}}>
            <SecoundTable
                title="Take Away"
                columns={columnsTakeAway}
                data={dataTakeAway}
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            if(newData.type==null || newData.price==null || newData.status==null) {
                                alert('Nenhum dos valores inseridos pode ser nulo!');
                                reject();
                            }else{
                                if(newData.type<0 || newData.price<0 || newData.status<0 ){
                                    alert('O tipo de encomenda e/ou preço e/ou estado da encomenda não pode ser 0!');
                                    reject();
                                
                                            setTimeout(() => {
                                                this.setState({
                                                    newDataTakeAway: newData
                                                });
                                                resolve();
                                                this.addTakeAway();
                                            }, 100)
                                        }
                            }
                    }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            if(newData.type==null || newData.price==null || newData.status==null) {
                                alert('Nenhum dos valores inseridos pode ser nulo!');
                                reject();
                            }else{
                                if(newData.type<0 || newData.price<0 || newData.status<0 ){
                                    alert('O tipo de encomenda e/ou preço e/ou estado da encomenda não pode ser 0!');
                                    reject();
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
                                        }
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
        </div>
    )
}

    render(){
        const { reservation} = this.state;
        const {classes} = this.props;
        const columns= [
            { title: 'Data da Reserva', field: 'data', type: 'date', align:"center"},
            { title: 'Hora da Reserva', field: 'hour', type: 'time', align:"center"},
            { title: 'Quantidade de Pessoas', field: 'quantity', type: 'numeric', align:"center" },
            { title: 'Data Marcada', field: 'pointData', type: 'date', align:"center"},
            { title: 'Hora Marcada', field: 'pointHour', type: 'time', align:"center"},
            { title: 'Estado', field: 'state', /* lookup: rowData => [rowData.type], defaultFilter: rowData => [rowData.type], */ align:"center"},
            { title: 'Id do Cliente', field: 'clientId', type: 'numeric', align:"center" },
        ];
        const data = reservation.map((item) => {
            return { reservationtId: item.id_reserva, data: item.data, hour: item.hora, quantity: item.quantidade_pessoas, pointData: item.data_marcada, pointHour: item.hora_marcada, state: item.estado, clientId: item.id_cliente};
        });;
        const tableRef = React.createRef();
        return (
            <StructurePage table={
                <OwnTable
                    title="Tabela das Reservas"
                    tableRef={tableRef}
                    columns={columns}
                    data={data}
                    actions={[
                        {
                            icon: 'refresh',
                            tooltip: 'Recarregar',
                            isFreeAction: true,
                            onClick: () => tableRef.current && tableRef.current.componentDidMount()
                        }
                    ]}
                    options={{
                        actionsColumnIndex: -1,
                        search: true
                    }}
                    localization={
                        { 
                            header: { actions: ""},
                            body:{
                                emptyDataSourceMessage: 'Não existe dados para mostar',
                                addTooltip: "Novo",
                                editTooltip: "Editar",
                                deleteTooltip: "Eliminar",
                                editRow: { deleteText: 'Tem a certeza que deseja eliminar?', cancelTooltip: 'Cancelar', saveTooltip: 'Guardar' }
                            },
                            toolbar: { searchTooltip: "Pesquisar", searchPlaceholder: "Procurar"},
                            pagination: { labelDisplayedRows: "{from}-{to} de {count}", firstTooltip: "Primeira Página", previousTooltip: "Página Anterior", nextTooltip: "Próxima Página", lastTooltip: "Última Página", labelRowsSelect:"registos"}
                        }
                    }
                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                if(newData.date==null || newData.hour==null || newData.quantity==null || newData.pointData==null || newData.pointHour==null || newData.estado==null || newData.clientId==null) {
                                    alert('Nenhum dos valores inseridos pode ser nulo!');
                                    reject();
                                }else{
                                    if(newData.quantity<0 || newData.estado<0 || newData.clientId<0 ) {
                                        alert('A quantidade, o preço e/ou a foto não pode ser negativo!');
                                        reject();
                                    }else{
                                        if(Number.isInteger(newData.quantidade)==false){
                                            alert('A quantidade tem de ser do tipo inteiro!');
                                            reject();
                                        }else{
                                            if(Number.isInteger(newData.clientId)==false){
                                                alert('A identificação do cliente tem de ser do tipo inteiro!');
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
                        }),
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                if(newData.date==null || newData.hour==null || newData.quantity==null || newData.pointData==null || newData.pointHour==null || newData.estado==null || newData.clientId==null) {
                                    alert('Nenhum dos valores inseridos pode ser nulo!');
                                    reject();
                                }else{
                                    if(newData.quantity<0 || newData.estado<0 || newData.clientId<0 ) {
                                        alert('A quantidade, o preço e/ou a foto não pode ser negativo!');
                                        reject();
                                    }else{
                                        if(Number.isInteger(newData.quantidade)==false){
                                            alert('A quantidade tem de ser do tipo inteiro!');
                                            reject();
                                        }else{
                                            if(Number.isInteger(newData.clientId)==false){
                                                alert('A identificação do cliente tem de ser do tipo inteiro!');
                                                reject();
                                            }else{
                                                setTimeout(() => {
                                                    const dataUpdate = [...data];
                                                    const index = oldData.tableData.id;
                                                    dataUpdate[index] = newData;
                                                    this.setState({
                                                        newData: newData
                                                    });
                                                    const reservationID=newData.reservationId;
                                                    resolve();
                                                    this.update(reservationID);
                                                }, 1000)
                                            }
                                        }
                                    }
                                }
                        }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    const reservationID = oldData.reservationId;
                                    resolve();
                                    this.delete(reservationID);
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