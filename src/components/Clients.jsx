import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/actions';
import { costumerFetching  } from '../redux/actions';
import ClientsTable from './ClientsTable';



const Clients = () => {
  
  const [loading, setLoading] = useState(true);
  const costumerTable = useSelector(state => state.costumer);
  
  const dispatch = useDispatch();

  useEffect(() => {
      
    const assingData = async() => {
      const data = await fetchData();
      await dispatch(costumerFetching(data));
      setLoading(false);
      }
       
    assingData()
    })

  const fetchData = async () => {
    const res = await fetch(`http://localhost:3000/customers?_page=${costumerTable.page}&_limit=${costumerTable.limit}`);
    const data = res.json();
    return data;
  }

  

  return (
    <div>
      <button onClick={() => dispatch(logOut())}>Logged out</button>
      <h1>List of Clients</h1>
      {loading ? 'Loading...' : <ClientsTable/> }
    </div>

  )
}

export default Clients
