import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { page } from '../State/action-creators/index';
export default function Watchlist(props) {
    const dispatch=useDispatch();
  return (
    <>
    <NavLink to='/page' className='mx-auto' onClick={()=>{dispatch(page(props.id, props.title, props.description, props.rate, props.thumbnail, props.images, props.brand, props.price, props.discountPercentage))}}>
    <div className='card h-40 w-40 fold:h-28 fold:w-28 p-4 fold:p-2 hover:pt-0 rounded-[50%] dark:rounded-[40%] hover:shadow-lg
     hover:shadow-slate-400 dark:bg-white
    opacity-90 hover:opacity-100'>
        <img src={props.thumbnail} className='h-32 w-32 fold:h-24 fold:w-24 dark:hover:h-32 hover:h-36 p-2 dark:p-3 '></img>
    </div>
    </NavLink>
        
    </>
  )
}
