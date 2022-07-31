import React from 'react'
import logo from '../img/logo.png'
import mobileLogo from '../img/mobileLogo.png'

function TopBar() {
    const handleConnect = () => {
        console.log('Connect me')
    }
    const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;


  return (
    <div className='flex justify-between w-full items-center px-7 lg:px-28 mt-3 lg:mt-10'>
        <img src={isMobile ? mobileLogo : logo} alt="Kapybara Logo" />
        <div className='flex gap-3'>
            {/* ternary here
            <div>Wallet addy</div> */}
            <button onClick={handleConnect} className='px-6 py-2 bg-neutral-700 rounded-md text-xl font-bold'>Connect</button>

        </div>
    </div>
  )
}

export default TopBar