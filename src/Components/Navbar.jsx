import React from 'react'
import {PiShoppingCartSimpleDuotone} from 'react-icons/pi'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import {AiFillEye} from 'react-icons/ai'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {MdLightMode} from 'react-icons/md';
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
export default function Navbar() {
  const[transu,settransu]=useState({
    translate:'-70rem 0rem',
  })
  const togglestyle = () => {
    if (transu.translate=='-70rem 0rem') {
        settransu({
          translate:'-0rem 3rem',
        })
    }
    else {
        settransu({
          translate:'-70rem 0rem',
                })
    }
}
const[bulb,setbulb]=useState({
  boxShadow:'none',
})

const toasti=()=>{
  toast("Dark mode on", {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "dark",
    })
}

const toggletheme = () =>{
    document.documentElement.classList.toggle("dark");
    if(document.documentElement.classList.contains("dark")){
      toasti();
      setbulb(
        {
          boxShadow:'2px 2px 20px white',
          color:'white',
          borderRadius:'15px'
        }
      )
    }
    else{
      toast("Light mode on ",{ 
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        })
     setbulb( {
        boxShadow:'none',
        
      })
    }
    <ToastContainer limit={1}/>
}
useEffect(()=>{
  if(document.documentElement.classList.contains("dark")){
    setbulb(
      {
        boxShadow:'2px 2px 20px white',
        color:'white',
        borderRadius:'15px'
      }
    )
  }
  else{
   setbulb( {
      boxShadow:'none',
      
    })
  }
},[])
  return (
    <>
    <div className='topline bg-[hsla(231,70%,4%,1)] /fold:w-[120%]  sm:w-[100%]  ' >
      <nav className='flex justify-between h-16'>
       <NavLink to='/login/home'> 
       <h1 className='text-white pt-5 ml-3 md:pt-4 md:text-xl text-xl px-3 md:px-10 fold:mx-2
       font-Mono hover:cursor-pointer dark:text-[#DCDCDC]'>BaZaarHub</h1></NavLink>
       <div className="hamburger m-4 inline-block cursor-pointer pt-1 text-end sm:hidden 
         pr-2 absolute pl-[83%] /fold:pl-[100%]"  onClick={togglestyle}>
        <div className="line h-0.5 w-5 my-1 bg-white"></div>
        <div className="line h-0.5 w-5 my-1 bg-white"></div>
        <div className="line h-0.5 w-5 my-1 bg-white"></div>
    </div>
       <div className='list'>     
        <ul className='space-y-9 bg-pink-900 mx-auto z-50 relative w-[182px] sm:w-[300px] sm:pl-28
         text-center text-xl 
         sm:text-sm   my-4 sm:mx-0 sm:my-0 p-4 sm:p-0
        sm:bg-[hsla(231,70%,4%,1)] sm:space-y-0 sm:flex sm:translate-x-[305%] sm:mt-5 sm:space-x-8 sm:ml-7' style={transu} > 
          <li className='text-gray-300 hover:text-white hover:outline-dashed sm:hover:outline-0' ><NavLink to='/login/home'>Home</NavLink></li>
          <li className='text-gray-300 hover:text-white hover:outline-dashed sm:hover:outline-0'><NavLink to='/about'>About</NavLink></li>
           <li className='text-gray-300 hover:text-white hover:outline-dashed sm:hover:outline-0'>
            <NavLink to='/'>Signup</NavLink></li>
          <li className='text-gray-300 hover:text-white hover:outline-dashed sm:hover:outline-0'>
            <NavLink to='#'>Help</NavLink></li>
          

          <li className='text-gray-300 hover:text-white sm:hidden hover:outline-dashed sm:hover:outline-0'>Cart</li>
            <li className='text-gray-300 hover:text-white hidden sm:block'>
              <NavLink to='/cart'>
            <PiShoppingCartSimpleDuotone className='h-8 w-8' />
            </NavLink>
              </li>
              <li className='text-gray-300 hover:text-white hidden sm:block '>
            <MdLightMode className='h-8 w-8  pb-1 cursor-pointer' onClick={toggletheme}  style={bulb} />
              </li>
              {/* <li className='text-gray-300 hover:text-white hidden sm:block'>
              <NavLink to='/watchlist'>
              <AiFillEye className='w-6 h-6 hover:h-7 hover:w-7 hover:text-gray-400'/>
            </NavLink>
              </li> */}
            </ul>
       </div>
      </nav>
    </div>
    {/* //bg-yellow-200 */}
    <hr className=' text-red-100'/>
    <div className='h-14 sm:h-24
     bg-[hsla(231,70%,4%,1)]
    w-[100%] /fold:w-[120%] pt-1 dark:border-b-2 dark:border-b-white ' id='category'>
      <ul className='flex justify-evenly text-white'>
        <NavLink to='/grocery'><li className='mt-3 sm:mt-2'>
          <img className=' fold:h-6 h-6 sm:h-14 sm:px-3 px-1 shadow-xl shadow-red-500 hover:shadow-green-700' 
          src='https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100'></img>
        <h2 className='hover:text-yellow-200 fold:text-[4px]sm:mx-3 mx-1 text-center text-[6px] sm:text-sm'>Grocery</h2></li></NavLink>
        
        <NavLink to='/electronics'> <li className='mt-3 sm:mt-2'>
          <img className=' h-6 sm:h-14 sm:px-3 px-1 shadow-xl shadow-red-500 hover:shadow-green-700' 
        src='data:image/jpeg;base64,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'></img>
        <h2 className='hover:text-yellow-200 fold:text-[4px]sm:mx-3 mx-1 text-center text-[6px] sm:text-sm'>Electronics</h2></li></NavLink>
        
        <NavLink to='/watches'><li className='mt-3 sm:mt-2'>
          <img className=' h-6 sm:h-14 sm:px-3 px-1 shadow-xl shadow-red-500 hover:shadow-green-700' 
          src='https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/y/n/s/-original-imags25bqhkhugw2.jpeg?q=70'></img>
        <h2 className='hover:text-yellow-200 fold:text-[4px]sm:mx-3 mx-1 text-center text-[6px] sm:text-sm'>
          Watches</h2></li></NavLink>
        
        <NavLink to='/fragrances'><li className='mt-3 sm:mt-2'><img className=' h-6 sm:h-14 sm:px-3 px-1 hover:shadow-green-700 shadow-xl shadow-red-500' src='https://images.unsplash.com/photo-1541643600914-78b084683601?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'></img>
        <h2 className='hover:text-yellow-200 fold:text-[4px]sm:mx-3 mx-1 text-center text-[6px] sm:text-sm'>Perfumes</h2></li></NavLink>
        
        <NavLink to='/appliances'><li className='mt-3 sm:mt-2'><img className=' h-6 sm:h-14 sm:px-3 px-1 shadow-xl hover:shadow-green-700 shadow-red-500' src='https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100'></img>
        <h2 className='hover:text-yellow-200 fold:text-[4px]sm:mx-3 mx-1 text-center text-[6px] sm:text-sm'>Appliances</h2></li></NavLink>
        
        <NavLink NavLink to='/mobiles'><li className='mt-3 sm:mt-2'><img className=' h-6 sm:h-14 sm:px-3 px-1 shadow-xl hover:shadow-green-700 shadow-red-500' src='https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100'></img>
        <h2 className='hover:text-yellow-200 fold:text-[4px]sm:mx-3 mx-1 text-center text-[6px] sm:text-sm'>Mobiles</h2></li></NavLink>
        
        <NavLink NavLink to='/fashion'><li className='mt-3 sm:mt-2'><img className=' h-6 sm:h-14 sm:px-3 px-1 shadow-xl hover:shadow-green-700 shadow-red-500' src='https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100'></img>
        <h2 className='hover:text-yellow-200 fold:text-[4px]sm:mx-3 mx-1 text-center text-[6px] sm:text-sm'>Fashion</h2></li></NavLink>
        
        <NavLink to='/offers'><li className='mt-3 sm:mt-2'><img className=' h-6 sm:h-14 sm:px-3 px-1 shadow-xl hover:shadow-green-700 shadow-red-500' src='https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100'></img>
        <h2 className='hover:text-yellow-200 fold:text-[4px] sm:mx-3 mx-1 text-center text-[6px] sm:text-sm'>Offers</h2></li></NavLink>
      </ul>
    </div>
     
    </>
  )
}
