import React, { useState } from 'react'
// import Cart from './Cart'
// import './card.css'
import {PiDotsThreeOutlineBold} from 'react-icons/pi';
import {FaInfoCircle} from 'react-icons/fa';
import {AiFillEye} from 'react-icons/ai';
import {AiTwotoneHeart} from 'react-icons/ai';
import { useSelector } from 'react-redux/es/hooks/useSelector';
// import {actionCreators} from '../State/index';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import addToCart from '../State/action-creators/index';
import { addToWatchList } from '../WatchState/action-creators/index';
import { page } from '../State/action-creators/index';
export default function Card(props) {
    var {title,id,price,thumbnail,rate,discountPercentage,brand,description,images}=props
    const dispatch=useDispatch()
    var cart=useSelector(state=>state.Cartt)
    const[coloset,setcolor]=useState({
      'color':'black',
    })
    const togglecolor=()=>{
      if(coloset.color=='red'){
        setcolor({'color':'black'})
      }
      else{
        setcolor({'color':'red'})
      }
    }
  return (
    <>
     {/* <div className="card hover:shadow-lg duration-1000 hover:shadow-orange-500 mt-2 mb-2 pt-2 ml-3 folld:ml-10 fold:ml-6 
     sm:ml-4 hover:ring-1 ring-orange-300 rounded-xl"> */}
      <NavLink to='/page' className='ml-8' 
      onClick={()=>{dispatch(page(id, title, description, rate, thumbnail, images, brand, price, 
      discountPercentage))}}>
      <div className='card h-40 w-40 lg:h-64 lg:w-64 fold:h-36 fold:w-36 sm:h-60 sm:w-40 p-5 
      fold:p-2  shadow-sm sm:shadow-md hover:shadow-xl shadow-gray-500 m-2
       hover:bg-slate-50  rounded-md 
        //ml-[26%]sm:ml-[33px] 
       dark:bg-[#383838] dark:hover:bg-[#606060]'>
     {/* <span className=" text-red-800 text-xs font-extrabold ml-40 px-2 py-0 rounded-full bg-pink-300 dis">{discountPercentage}%OFF</span> */}
    <img className="card-img  duration-700 w-14 h-14 mx-auto  md:w-32 md:h-28 sm:w-28 sm:h-24
    " src={thumbnail} alt="Card image cap"/>
    <div className="card-body mt-2 h-12 sm:h-16">
    <h6 className="card-title my-1 text-center font-sans font-semibold p-4 pt-0 pb-0 text-[8px] sm:text-[12px] sm:pb-6
      leading-3 sm:leading-4 md:leading-5 lg:text-md dark:text-white">{title}</h6> 
  </div>
<div className='flex justify-around'>
  <AiTwotoneHeart className='w-4 h-4 md:w-6 md:h-6 md:hover:h-7 md:hover:w-7
  text-black
  dark:text-white hover:text-red-700 ' onClick={()=>{togglecolor()}} style={coloset}/>
  <h1 className='uppercase text-[8px] sm:text-[11px] md:text-sm  font-extrabold
  dark:text-white overflow-hidden'>{brand}</h1>
  <PiDotsThreeOutlineBold className=' h-4 w-4 md:w-5 md:h-5 hover:text-yellow-600 '/>
</div>
</div>     
     </NavLink>
 </>
  );
}