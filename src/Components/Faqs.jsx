import React from 'react'
import { useState } from 'react';
import {BsChevronDown} from 'react-icons/bs'

export default function Faqs(props) {
    var{question, answer}=props;
    const[torotate,settorotate]=useState(
        {
          'transform':'rotate(0deg)'
        }
      )
    const[faqstate,setfaqstate]=useState(
        {
          'display':'none',
        }
      );
      const faqclick=()=>{
        if(faqstate.display=='none'){
          setfaqstate({
            'display':'block'
          })
          settorotate({
            'transform':'rotate(180deg)'}
          )
        }
        else{
          setfaqstate({
            'display':'none'
          })
          settorotate({
            'transform':'rotate(0deg)'}
          )
        }
    
    
      }
  return (
    <>
       <div className=' bg-[#191f46fa] hover:bg-[#13103f] shadow-md shadow-orange-600
      text-slate-300 hover:text-white mx-[8%] px-[1.6%] fold:mx-[5%] folld:mx-[10%] sm:mx-[25%]'>
        <span className='flex justify-between duration-500'>
          <div>
        <h1 className='pl-2 justify-start'>{question}</h1>
          </div>

        <div onClick={faqclick}>
        <p className='h-7 w-7 font-bold sign pt-1' ><BsChevronDown className='h-5 w-5 font-extrabold' style={torotate}/></p>
        </div>

        </span>
        <span>
      <p style={faqstate} className='p-2'>
      {answer}
      </p>

        </span>
      </div>
    </>
  )
}
