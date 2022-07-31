import React from 'react'
import telegram from '../img/tg.png'

function Status() {
  return (
    <div className='flex flex-col items-center gap-5 w-full lg:w-1/3'>
        <h2 className='font-bold text-3xl'>Status</h2>
        <p className='text-black font-bold bg-white rounded-3xl px-5 py-2'>Whitelisted wallets only</p>
        <div className='text-xs w-full text-center underline underline-offset-2	'>
            <a href="#" target="_blank" rel="noopener noreferrer">
            <img className='inline' src={telegram} alt='Telegram' /> Catch us on Telegram to check whitelist status </a>
        </div>
        <p className='font-bold text-lg'>Time left until public sale</p>
        <div>COUNT DOWN GOES HERE</div>
        
    </div>
  )
}

export default Status