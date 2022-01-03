import React from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { useSelector } from 'react-redux';
import PaginationTable from './PaginationTable';



const ClientsTable = () => {

  const constumerTable = useSelector(state => state.costumer);
    
  return (
    <>
    <BootstrapTable
      data={constumerTable.data}
      striped
      hover
    >
      <TableHeaderColumn dataField='id' isKey>Client ID</TableHeaderColumn>
      <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
      <TableHeaderColumn dataField='surname'>Surname</TableHeaderColumn>
      <TableHeaderColumn dataField='dateOfRegistration'>Date of registration</TableHeaderColumn>
      <TableHeaderColumn dataField='endOfSubscription'>Date of End of Substription</TableHeaderColumn>
      </BootstrapTable>
      <PaginationTable />
    </>
  )
}

export default ClientsTable
