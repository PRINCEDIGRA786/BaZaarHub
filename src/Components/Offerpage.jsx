import React from 'react'
import Navbar from './Navbar'

export default function Offerpage() {
  return (
    <>
      <Navbar/>
      <div className='dark:bg-black h-[110%] p-2'>
      <div className="text-center font-Mono text-2xl py-4 dark:text-white">DHAKEDAR OFFERS ARE HERE</div>
        <div className=' grid grid-cols-2 gap-7'>
            <div>
            <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b76e4671bbd70d50.jpg?q=20'
            className=' h-60 rounded-xl opacity-90 hover:cursor-pointer hover:shadow-xl hover:shadow-slate-600 hover:opacity-100 '/>
            </div>
            <div>
            <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/83297cf771250b25.jpg?q=20'
            className='h-60 rounded-xl opacity-90 hover:cursor-pointer hover:shadow-xl hover:shadow-slate-600 hover:opacity-100 '/>
            </div>
            <div>
            <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4801adbcf39acbc1.jpg?q=20'
            className='h-60 rounded-xl opacity-90 hover:cursor-pointer hover:shadow-xl hover:shadow-slate-600 hover:opacity-100'/>
            </div>
            <div>
            <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/8a89ee09acc1a9e5.jpg?q=20'
            className='h-60 rounded-xl opacity-90 hover:cursor-pointer hover:shadow-xl hover:shadow-slate-600 hover:opacity-100'/>
            </div>
            <div>
            <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/05cdea6dbe08c481.jpg?q=20'
            className='h-60 rounded-xl opacity-90 hover:cursor-pointer hover:shadow-xl hover:shadow-slate-600 hover:opacity-100'/>
            </div>
            <div>
            <img src='https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/84ae27f93c14a4e3.jpg?q=20'
            className='h-60  rounded-xl opacity-90 hover:cursor-pointer hover:shadow-xl hover:shadow-slate-600 hover:opacity-100'/>
            </div>
        </div>
      </div>
    </>
  )
}
