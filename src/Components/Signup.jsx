import React from 'react'
import { useState } from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Signup() {
    const[first,setfirst]=useState()
    const[stat,setstat]=useState()
    // const navigate=useNavigate()
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
        <div className='sigbox mt-8  border-2 border-white h-[70vh] w-[75vw] rounded-md mx-auto
        md:h-[420px] md:w-[400px] bg-gradient-to-b from-[#131119b3] to-black'>
            <form>
             <div className='text-white flex-col'>
            <h3 className='my-1 mt-3 ml-[5vw] text-xs md:text-sm text-yellow-50 md:ml-3'>Start for free</h3>
                <h1 className='my-1 text-center font-Mono text-[5vw] md:text-3xl'>Create new account </h1>
                <h3 className='ml-[5vw] my-2 text-xs md:text-sm text-yellow-50 md:ml-3'>Already a member?
                <a className='text-[#34b3b8] hover:text-[#48f3f9]' href='/login'>Log in</a></h3>
                </div>
                <div className='mt-5 space-y-4 md:space-y-5 px-[5%] md:ml-5'>
                <div>
                <input type='text' id='inu' className='block bg-slate-500 w-[100%] 
                rounded-md pl-2 font-semibold text-white hover:border-white h-8 md:w-[90%]'
                 placeholder='Name'></input>
            </div>
            
            <div id='email' className='mailpass'>
                <input type='email' placeholder='Email' className='block bg-slate-500 w-[100%] 
                rounded-md pl-2 font-semibold text-white hover:border-white h-8 md:w-[90%]'></input>
            </div>
            <div id='userid' className='mailpass'>
            <input id="username" placeholder='User-Id' type="text" className='block bg-slate-500 w-[100%] 
                rounded-md pl-2 font-semibold text-white hover:border-white h-8 md:w-[90%]' 
                onChange={((e)=>{
                setfirst({
                    ...first,
                    userid:e.target.value
                })
            })}
            ></input>
            </div>
            <div id='pass' className='mailpass'>
            <input id="password" placeholder='Password'type="password" className='block bg-slate-500 w-[100%] 
                rounded-md pl-2 font-semibold text-white hover:border-white h-8 md:w-[90%]' 
                onChange={((e)=>{
                setfirst({
                    ...first,
                    passid:e.target.value
                })
            })}
            ></input>
            </div>
            <div id='createbtn ' className='text-center md:pt-4'>
                <NavLink to='/login/home' className='delay-700'>

          <button type='submit' className='bg-green-700 hover:bg-green-800 mx-auto text-white 
          font-semibold rounded-lg p-1 md:p-2
          ' onClick={(()=>{
              localStorage.setItem(first['userid'],first['passid']);
                alert("Account created successfully")
            //   toast.success("Account Created Successfully",{position:'top',
            //   theme:'dark',
            //   autoClose:3000});
            })}
            >Create account</button>
        <ToastContainer/>
            </NavLink>
            
            </div>
              </div>
            </form>
        </div>
   </div>
    </>
  )
}
