import React from 'react';
import MaterialTable from 'material-table';

export const SecoundTable = (props) =>{
    const tableRef = React.createRef();

    return( 
        <>
            <MaterialTable
                title={props.title}
                tableRef={tableRef}
                columns={props.columns}
                data={props.data}
                options={{
                    actionsColumnIndex: -1,
                    search: false,
                    headerStyle: {
                        backgroundColor: 'black',
                        color: '#FFF'
                    },
                    paging:false
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
                editable={props.editable}
            />
        </>
    );
}