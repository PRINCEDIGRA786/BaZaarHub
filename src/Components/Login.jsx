import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export default function Login() {
    const navigate=useNavigate()
    var id;
    const[second,setsecond]=useState()
  return (
        <>
    <div className='absolute'>
        <img className='w-[100vw] h-[100vh] blur-none' 
        // src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi5UDI9LRSMZv_M1LejQHoW8-UJB5nPINfAA&usqp=CAU'
        src='https://miro.medium.com/v2/resize:fit:1200/1*G_2f5pzs3Vsvx6vE4GPHRA.jpeg'       
       />
    </div>
    <div className=' relative bg-gradient-to-tl w-[100vw] h-[100vh] 
     '>
    {/* from-[#000428] to-[#004e92] */}
    <h1 className=' text-yellow-600 hover:text-yellow-500 text-center pt-4 font-Mono text-[8vw] sm:text-[42px]'>BaZaarHub</h1>
        <div className='sigbox mt-8  border-2 border-white h-[60vh] w-[75vw] rounded-md mx-auto
        sm:h-[400px] sm:w-[400px] bg-gradient-to-b from-[#110e16ba] to-black'>
            <h1 className='text-center text-white my-3  font-Mono text-2xl sm:text-3xl'>LOGIN</h1>
            <div className='p-4 sm:space-y-6'>
              <div className='inp1'>

             <label htmlFor='usern' className='text-white block text-sm my-2 mt-2 ml-[2vw] md:ml-2 md:text-lg'><b>User-Id:</b></label>
         <input  className='block bg-slate-500 w-[100%] 
                rounded-md pl-2 font-semibold text-white hover:border-white h-8 md:w-[90%] mt-3 md:ml-2' type='text' placeholder='User-Id' 
                onChange={((e)=>{
                  setsecond({
                    ...second,
                    Userid:e.target.value
                  })
                })}
                ></input>
                </div>
          <div className='inp2 my-5'>
         <label htmlFor='Pass' className='text-white text-sm ml-[2vw] my-2
         md:ml-2 md:text-lg'><b>Password:</b></label>
         <input type='password' className='block bg-slate-500 w-[100%] 
                rounded-md pl-2 font-semibold text-white hover:border-white h-8 md:w-[90%] mt-3 
                md:ml-2' placeholder='Password' onChange={((e)=>{
           setsecond({
             ...second,
             Passid:e.target.value
            })
        })}></input>
          </div>
          {/* <NavLink to='home'> */}
         <div className='my-6 text-center sm:pt-6' id='createbtn'>
          <button type="submit" className='bg-green-600 hover:bg-green-800  p-2 rounded-md text-white'
           onClick={(()=>{
              if(!localStorage.getItem(second['Userid'])){
                  alert('No Such Username found ! Try later')
                }
                else if(localStorage.getItem(second['Userid'])==second['Passid']){
                    alert('Successfully Logged-in');
                    navigate('./home')
                }
                else{
                    alert("!Wrong Password or User-id ! Try Again later")
                }
            })}><b>LOGIN</b></button>
            </div>
          </div>
        </div>
            </div>
            </>
  )
}
