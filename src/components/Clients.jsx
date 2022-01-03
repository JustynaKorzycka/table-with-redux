import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import useFetchingData from '../Hooks/useFetchingData';
import { logOut } from '../redux/actions';
import { costumerFetching  } from '../redux/actions';
import ClientsTable from './ClientsTable';



const Clients = () => {
  
  const [loading, setLoading] = useState(true);
  const costumerTable = useSelector(state => state.costumer);

   const dispatch = useDispatch();

  // useEffect(() => {
  //   const assingData = async() => {
  //     const data = await fetchData();
  //     await dispatch(costumerFetching(data));
  //     setLoading(false);
  //   }
  //   assingData()
  // },[constumerTable] )

  // const fetchData = async () => {
  //   const res = await fetch(`http://localhost:3000/customers?_page=${constumerTable.page}&_limit=${constumerTable.limit}`);
  //   const data = res.json();
  //   return data;
  // }
  useFetchingData(setLoading);
  console.log(loading)
  

  return (
    <div>
      <button onClick={() => dispatch(logOut())}>Logged out</button>
      <h1>List of Clients</h1>
      {costumerTable ? 'Loading...' : <ClientsTable/> }
    </div>

  )
}

export default Clients
