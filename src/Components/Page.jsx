import { Rating } from 'react-simple-star-rating'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import addToCart from '../State/action-creators/index';
import Navbar from './Navbar';
import {GiStarFormation} from 'react-icons/gi'
import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from 'react-toastify';
export default function Page(props) {
  const[main,setmain]=useState(0)
  // const toggle=(a)=>{
  //     setmain(a)
  // }
  const [rating, setRating] = useState(0);
  
  //toasify on the cart
  const toasti=()=>{
     toast.success(<Toasticart/>,{
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    })

    // toast.success(<Toasticart/>,{
    //   position: "bottom-right",
    //   autoClose: 2000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: false,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "light",
    // }
    // )
  }

    // Catch Rating value
    const handleRating = (rate) => {
      setRating(rate)
    }
  
    const handleReset = () => {
      // Set the initial value
      setRating(0)
    }
    const dispatch=useDispatch()
    var{id,title,thumbnail,price,rate}=props.page
    var cart=useSelector(state=>state.Cartt)
    var nowat;
    
  const pricci=(x,y)=>{
    console.log(x);
    console.log(y)
    try{
      nowat=x.replace(/,/g,"")*y;
      nowat=nowat/100;

    }
    catch{
      nowat=x*y;
      nowat=nowat/100;
    }
    console.log(nowat);

  }
 
  return (
    <>
    {/* <div> <h1 className='text-center font-Mono text-2xl md:text-3xl mb-5 py-5 bg-[hsla(231,70%,4%,1)] text-white'>BaZaarHub</h1></div> */}
       {/* <div> <h1>The id of the card is :{props.page.id} chobbrraa</h1></div> */}
       <Navbar/>
       {pricci(props.page.price,props.page.discountPercentage)}
    <div className="page flex flex-col md:flex-row dark:bg-black">
      <div className='images flex flex-col-reverse lg:flex-row ml-4'>
        <div className='flex lg:flex-col flex-row lg:space-y-16 lg:space-x-0 md:mb-24 md:mt-9 
        lg:mt-16 mx-auto space-x-10'>
         <img src={props.page.images[0]} alt="Loading" className="side md:h-16 md:w-16 h-12 w-12 focus:ring-8 ring-purple-600 cursor-pointer rounded-md shadow-black shadow-md hover:shadow-orange-300 dark:shadow-slate-400 dark:hover:shadow-orange-200 dark:shadow-lg " onClick={()=>{setmain(0)}} />
        <img src={props.page.images[1]} alt="Loading" className="side md:h-16 md:w-16 h-12 w-12 cursor-pointer shadow-md hover:shadow-orange-300 rounded-md  shadow-black dark:shadow-slate-400 dark:hover:shadow-orange-200 dark:shadow-lg" onClick={()=>{setmain(1)}} />
        <img src={props.page.images[2]} alt="Loading" className="side md:h-16 md:w-16 h-12 w-12 cursor-pointer shadow-md hover:shadow-orange-300 rounded-md shadow-black dark:shadow-slate-400 dark:hover:shadow-orange-200 dark:shadow-lg" onClick={()=>{setmain(2)}}/>
        </div>
      <div className='lg:ml-20 mt-2 mx-auto mb-6 md:mx-11 lg:mt-5 xl:mt-7 '>
      <img src={props.page.images[main]} alt="Loading" className="main
      lg:w-[30vw] lg:h-[60vh] md:h-[80vh] md:w-[70vw] h-[70vh] w-[90%]  shadow-xl rounded-md shadow-gray-500" />
      </div>
      </div>
      <div className='detail flex-col mx-auto md:mx-0 border-1 rounded-md m-2 border-slate-300 shadow-lg
       shadow-gray-800 md:mr-3 w-[95%] lg:h-[90%] lg:w-[50%] mt-6 dark:bg-[#202020] '>
        <div className="title font-extrabold text-center text-md md:text-lg pt-1 pb-1 rounded-sm
         text-white 
        bg-[hsla(231,70%,4%,1)] dark:bg-[#404040]">{props.page.title}</div>
        <div className='flex justify-between '>
        <div className='brand font-Mono ml-4 text-md md:text-md mt-2 dark:text-white'> {props.page.brand}</div>
        <div className='m-3 mb-0'>
          {/* <GiStarFormation className='h-8  w-8 cursor-pointer opacity-90 dark:text-yellow-200
           text-yellow-300
         hover:opacity-100 '/> */}
        <ReactStars
            count={5}
            // onChange={ratingChanged}
            size={24}
            value={props.page.rate}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />,

         </div>
        </div>
        <hr className='mx-2 mt-3 font-extrabold'/>
        <div className='descrip md:p-11 p-5 text-md md:text-md font-medium dark:text-white'>{props.page.description}</div>
        <div className='ml-[15%] text-lg md:text-2xl font-sans dark:text-white flex space-x-4'>
         <p className='line-through text-red-700'>₹{props.page.price} </p> 
         <p className='text-green-700 font-bold text-3xl'>
         ₹{nowat.toLocaleString()} 
          </p>
          <p className='h-10 px-auto pb-1 w-36 rounded-full text-[20px] font-extrabold text-center text-white bg-black'>
            {props.page.discountPercentage}% OFF
          </p>
          </div>
        <div className="text-center my-3">
        {/* <Rating className='flex-row' onClick={handleRating} initialValue={props.page.rate}  /> */}
        </div>
      <div className="btn text-center md:mt-11 my-8 xl:mb-11">
      {/* <NavLink to='/cart'> */}
      <button type="submit" className='text-center p-1 bg-pink-200 text-md hover:bg-pink-300 hover:shadow-md
       hover:shadow-pink-300'
      onClick={()=>{ 
        price=nowat;
         dispatch(addToCart({id,title,thumbnail,price,rate}));
         toasti();
    }}>Add to Cart</button>
    <ToastContainer/>
      {/* </NavLink>  */}
    </div>
      </div>
    </div>
    </>
  )
}


function Toasticart() {


  return (
    <div className='App flex space-x-5'>
        <div>

        <p className='text-md font-bold pt-1 text-slate-900'>Added to Cart</p></div>

      <NavLink to='/cart'>
        <div>
        <button className='bg-green-500 hover:bg-green-400 text-slate-800 font-extrabold h-7 text-sm w-28 hover:text-black 
         rounded-md
      '>GO TO CART</button>
        </div>
      </NavLink>

    </div>
  )
}