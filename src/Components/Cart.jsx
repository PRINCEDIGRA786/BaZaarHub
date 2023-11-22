import{RiDeleteBin6Line} from 'react-icons/ri'
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import { useDispatch } from 'react-redux'
import {incre} from '../State/action-creators/index';
import { decre } from '../State/action-creators/index';
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { remove } from '../State/action-creators/index'
import { ToastContainer } from 'react-toastify';
import {BsCashCoin} from 'react-icons/bs'
import { useEffect } from 'react';
import{SiPaytm} from 'react-icons/si';
import {FaCcAmazonPay} from 'react-icons/fa';
import Pay from './Pay';
export default function Cart() {
  // var quantity=useSelector(state=>state.Num)
  var cart=useSelector(state=>state.Cartt);
  var a=0;
  const navigate = useNavigate();
  const dispatch=useDispatch();
    const tmoney =(b,c)=>{
      try{
        a=parseFloat(a)+parseFloat (b.replace(/,/g,""))*c;

      }
      catch{
        a=parseFloat(a)+parseFloat (b)*c;
      }
    }
  
  return (
    <>
    <Navbar/>
    <div className='dark:bg-black p-4 h-[100%] bg-cover'>
    <div> 
      <h1 className='text-center font-Mono uppercase my-5 p-2 fold:text-sm folld:text-xl sm:text-2xl
      dark:text-white'>CART</h1>
    </div>
        <div >
          <table className='border-separate border-spacing-5  w-[90%] 
          mx-auto text-center  shadow-md shadow-gray-400 rounded-xl dark:bg-[#202020]'>
            <thead>
            <tr className=' border-2 border-gray-950 text-center '>
              <th className='pl-6 font-bold text-md dark:text-white'>Product Added</th>
              <th className='font-bold text-md dark:text-white'>Product Name</th>
              <th className='pl-12 font-bold text-md dark:text-white'>Rating</th>
              <th className='pl-12 font-bold text-md dark:text-white'>Price </th>
              <th className='pr-12 font-bold text-md dark:text-white'>Quantity</th>
              
            </tr>
            </thead>
        {cart.map((element)=>(
            <tbody>
              {tmoney(element.price,element.quantity)}
           <tr >
            <td >
         <div className='text-center'>
         <img className=" h-24 w-24 ml-16 shadow-lg shadow-gray-500" src={element.thumbnail} alt="Card image cap"/>
           </div>
         </td>
         <td>
           <div>
         <h6 className="font-semibold font-serif dark:text-white">{element.title}</h6>
           </div>
         </td>
         {/* <div className="mt-2 folld:mt-0 sm:pr-32 folld:pr-0 w-44 sm:w-[60%] fold:w-[40%] folld:w-[80%]"> */}
         <td className='pl-12 ' >
          <div>
            < h2 className='font-semibold font-serif dark:text-white' >{element.rate}</h2>
            </div> 
            </td>
         <td className='pl-14 font-semibold font-serif dark:text-white'  >₹{element.price}</td>
             <NavLink to='/cart'>
         <td className='pl-10 pb-4'>
         <div className=' h-6 w-24  mb-4 flex '>
           <button className= ' bg-blue-950 hover:bg-blue-900 h-6 w-6 mx-2 text-white text-center ' 
           onClick={()=>{dispatch(decre(element.id))}}
           >-</button>
          <p className='dark:text-white'>
            {element.quantity}
            </p> 
           <button className='bg-blue-950 hover:bg-blue-900 h-6 w-6 mx-2 text-white text-center' onClick={()=>{dispatch(incre(element.id))}}>+</button>
         </div>
           </td>
           </NavLink>
       {/* </div> */}
       <NavLink to='/cart'>
       <td className='pl-6 mt-5'>
       <div >
       <RiDeleteBin6Line className='w-8 h-11 
        hover:text-red-600 cursor-pointer shadow-sm shadow-neutral-200 dark:text-white dark:hover:text-red-600' onClick={()=>{dispatch(remove(element.id))}}/>
       </div>
        </td>
        </NavLink>
        </tr>
           </tbody>
          
          ))}
          </table>
          </div>
          <div className='payableamount my-6 h-60 w-[60%] rounded-lg mx-auto bg-slate-100 shadow-md
           shadow-slate-800 dark:bg-slate-800 dark:text-white dark:shadow-slate-300'>
              <h1 className='my-2 text-center p-3 font-mono font-semibold'>Total Amount: ₹{a.toLocaleString()}</h1>
              <h2 className='my-2 text-center font-semibold '>Proceed via:</h2>
              <div className='mt-5 flex justify-center space-x-5'>
                <div className='flex flex-col hover:shadow-md hover:shadow-slate-800 h-28 w-40 rounded-lg p-4 dark:hover:shadow-slate-200'>
                  <div className='text-center mx-auto'>
                    <BsCashCoin className='h-8 w-8 text-green-900'/>
                    </div>
                    <div>
                <p className='font-semibold font-serif text-center text-sm py-4'>  
                   Cash on Delievery
                  </p></div>
                   </div>
                   <div className='flex flex-col h-28 w-40 hover:shadow-md hover:shadow-slate-800  dark:hover:shadow-slate-200 rounded-lg p-4'>
                  <div className='text-center mx-auto'>
                    <FaCcAmazonPay className='h-8 w-8 text-blue-950 dark:text-blue-700'/>
                    </div>
                    <div>
                <p className='font-semibold font-serif text-center text-sm py-4'>  
                   UPI PAY
                  </p></div>
                   </div>
                   <div className='flex flex-col hover:shadow-md h-28 w-40 hover:shadow-slate-800  dark:hover:shadow-slate-200 rounded-lg p-4'>
                  <div className='text-center mx-auto'>
                    {/* <NavLink to='/pay'> */}

                    <SiPaytm className='h-8 w-8 text-blue-600'/>
                    {/* </NavLink> */}
                    </div>
                    <div>
                <p className='font-semibold font-serif text-center text-sm py-4'>  
                  Paytm kro
                  </p></div>
                   </div>
                </div>
          </div>
          <div className='text-center mt-20 mb-20 mx-auto'>
      <NavLink to='/login/home'>
   <button className='bg-green-700 h-24 w-64 text-center rounded-xl uppercase text-white border-24
    border-black font-extrabold hover:bg-green-800'>Continue Shopping</button>
    </NavLink>
    </div>
    <ToastContainer/>
    </div>
    </>
  )
}