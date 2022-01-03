import React, { useEffect, useState } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { costumerFetching  } from '../redux/actions';
const useFetchingData = (setLoading) => {
  console.log(typeof(setLoading))
  const dispatch = useDispatch();
  const tableData = useSelector(state => state.costumer);
  
  useEffect(() => {
    fetch(`http://localhost:3000/customers?_page=${tableData.page}&_limit=${tableData.limit}`)
      .then((res) => res.json())
      .then((data => dispatch(costumerFetching(data))))
      .then(setLoading(false))
  }, [tableData])
}

export default useFetchingData
