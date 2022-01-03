import React from 'react';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { changePage } from '../redux/actions'

const PaginationTable = () => {
   const dispatch = useDispatch();
  const iconStyle = {
    fontSize: '20px',
    color: '#fff',
    width: '30px',
    height: '30px',
    color: 'blue'
  }


 


  return (
    <div className='pagination'>
      <button className='btn' onClick={()=> dispatch(changePage(-1))}><BsFillArrowLeftSquareFill style={iconStyle} /></button>
      <button className='btn' onClick={()=> dispatch(changePage(1))} ><BsFillArrowRightSquareFill style={iconStyle}/></button>

      
    </div>
  )
}

export default PaginationTable
