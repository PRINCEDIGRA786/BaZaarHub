import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {FcGoogle} from 'react-icons/fc'
import {FaFacebookF} from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {FaTwitter} from 'react-icons/fa'
export default function AlerLogin({visible,onClose}) {
    const[log,setlog]=useState(true);
    const[checklog,setchecklog]=useState()
    const[user,setuser]=useState();
    const toasti =()=>{
        toast("Wow! Successfully login",{position:'bottom-right',
    theme:'light'});
    }
    if(!visible){
        return null;
    }
  return (
    <>
    <div className='bg-opacity-50 inset-0 fixed z-50  justify-center mt-[13vh]'>
    <div className='rounded-md border-2 border-slate-300  w-[50vw] h-[86vh] mx-auto
     bg-slate-100 dark:bg-gradient-to-br
     dark:from-[#101010] dark: to-[#606060]'>
        <div className='text-end p-2'>
            <button className='dark:text-white text-black hover:shadow-slate-800 justify-end mr-4 font-extrabold text-xl hover:shadow-lg
             dark:hover:shadow-slate-200 rounded-lg' onClick={()=>{onClose();
             }}>X</button>
              
            </div>
        <div className='flex justify-around'>
           <div><button className='h-[8vh] w-[12vw] dark:bg-slate-400 bg-slate-500 hover:bg-slate-600 text-white font-semibold dark:hover:bg-slate-300' onClick={()=>setlog(true)}>Login</button> </div> 
           <div><button className='h-[8vh] w-[12vw] dark:bg-slate-400 bg-slate-500 hover:bg-slate-600 text-white font-semibold dark:hover:bg-slate-300' onClick={()=>setlog(false)}>Signup</button> </div> 
        </div>
        {log &&<div className='forlog' >
          <div className='dark:text-white my-2'>
           <p className='text-center'> Sign in with:</p> 
            </div>  
            <div className='flex justify-center py-6 space-x-12'>
                <div><FcGoogle className='h-7 w-7 hover:shadow-lg rounded-lg hover:shadow-orange-400 hover:cursor-pointer dark:hover:shadow-[#d8d5d5cb]'/></div>
                <div><FaFacebookF className='h-7 w-7 hover:shadow-lg rounded-lg hover:shadow-blue-600 hover:cursor-pointer dark:hover:shadow-[#d8d5d5cb] text-blue-700'/></div>
                <div><FaTwitter className='h-7 w-7 hover:shadow-lg rounded-lg hover:shadow-blue-300 hover:cursor-pointer dark:hover:shadow-[#d8d5d5cb] text-blue-400'/></div>
            </div>
            <div className='py-3'>
                <div className='my-1'><p className='text-center text-white'>or:</p></div>
                <div className='text-center'>
                    <input type='text' className='h-[6vh] bg-slate-500 hover:bg-slate-400 rounded-md w-[60%]
                     text-white px-4 p-1  placeholder:text-slate-200' placeholder='Email or username'
                     onChange={((e)=>{
                        setchecklog({
                          ...checklog,
                          Userid:e.target.value
                        })
                      })}/>
                </div>
                <div className='text-center mt-6'>
                    <input type='text' className='h-[6vh] w-[60%] hover:bg-slate-400  bg-slate-500 rounded-md
                    text-white px-4 p-1 placeholder:text-slate-200' placeholder='Password'
                     onChange={((e)=>{
                        setchecklog({
                          ...checklog,
                          Passid:e.target.value
                        })
                      })} />
                </div>
                <div className='text-center mt-6'>
                    <button  className='h-[6vh] w-[60%] bg-blue-700 hover:bg-blue-600 text-white rounded-md'
                     onClick={(()=>{
                        if(!localStorage.getItem(checklog['Userid'])){
                            alert('No Such Username found ! Try later')
                          }
                          else if(localStorage.getItem(checklog['Userid'])==checklog['Passid']){
                              alert('Successfully Logged-in'); 
                              onClose();
                          }
                          else{
                              alert("!Wrong Password or User-id ! Try Again later")
                          }
                      })}>Sign in </button>
                </div>
                <div className=' mt-6 flex justify-center'>
                    <p className='dark:text-white'>Not a member?</p>
                    <p className='text-blue-500 hover:cursor-pointer font-semibold hover:underline' 
                    onClick={()=>setlog(false)}>Register</p>
                </div>
            </div>
        </div>}
        {
            !log &&
        <div className="forsign">
        <div className='dark:text-white my-2'>
           <p className='text-center'> Sign up with:</p> 
            </div>  
            <div className='flex justify-center py-6 space-x-12'>
            <div><FcGoogle className='h-7 w-7 hover:shadow-lg rounded-lg hover:shadow-orange-400 hover:cursor-pointer dark:hover:shadow-[#d8d5d5cb]'/></div>
                <div><FaFacebookF className='h-7 w-7 hover:shadow-lg rounded-lg hover:shadow-blue-600 hover:cursor-pointer dark:hover:shadow-[#d8d5d5cb] text-blue-700'/></div>
                <div><FaTwitter className='h-7 w-7 hover:shadow-lg rounded-lg hover:shadow-blue-300 hover:cursor-pointer dark:hover:shadow-[#d8d5d5cb] text-blue-400'/></div>
           </div>
            <div className='py-2'>
                <div className='my-1'><p className='text-center text-white'>or:</p></div>
                <div className='text-center mt-2'>
                    <input type='text' className='h-[6vh] hover:bg-slate-400 bg-slate-500 rounded-md w-[60%] text-white px-4 p-1  placeholder:text-slate-200' placeholder='Name'/>
                </div>
                <div className='text-center mt-2'>
                    <input type='text' className='h-[6vh] hover:bg-slate-400 bg-slate-500 rounded-md w-[60%] text-white px-4 p-1  placeholder:text-slate-200' placeholder='Username'
                     onChange={((e)=>{
                        setuser({
                            ...user,
                            userid:e.target.value
                        })
                    })}
                    />
                </div>
                <div className='text-center mt-2'>
                    <input type='text' className='h-[6vh] hover:bg-slate-400 bg-slate-500 rounded-md w-[60%] text-white px-4 p-1  placeholder:text-slate-200' placeholder='Email'/>
                </div>
                <div className='text-center mt-2'>
                    <input type='text' className='h-[6vh] hover:bg-slate-400 bg-slate-500 rounded-md w-[60%] text-white px-4 p-1  placeholder:text-slate-200' placeholder='Password'
                     onChange={((e)=>{
                        setuser({
                            ...user,
                            passid:e.target.value
                        })
                    })}
                    />
                </div>
                <div className='text-center mt-4'>
                    <button  className='h-[6vh] w-[60%] bg-blue-700 text-white rounded-md'
                    onClick={(()=>{
                        localStorage.setItem(user['userid'],user['passid']);
                        alert("Account created successfully");
                        onClose();
                    })}
                        >Sign up </button>
                </div>
                </div>
        </div>
        }
    </div>
   </div>
   </>
  )
}

