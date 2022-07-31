import React from 'react'
import kapy from '../img/kapy.png'
import kda from '../img/kda.png'
import kwusdc from '../img/kwUSDC.png'

function Details() {
  return (
    <div className='flex flex-col items-center gap-5  w-full lg:w-1/3'>
        <h2 className='font-bold text-3xl'>Details</h2>    
        <div className='border border-neutral-500 rounded-lg flex gap-2 w-3/4 justify-center py-4 px-2'>
            <img className='w-6 h-6' src={kda} alt="KDA" />
            <p>1 KDA =</p>
            <img className='w-6 h-6' src={kapy} alt="KAPY" />
            <p>5,000,000 KAPY</p>
        </div>
        <div className='border border-neutral-500 rounded-lg flex w-3/4 py-4 px-2'>
            <div className='w-full text-center flex flex-col gap-3'>
                <h3 className='font-bold text-lg'>Pricing Details</h3>
                <div className='w-full flex justify-center gap-2'>
                    <img className='w-6 h-6' src={kapy} alt="KAPY" />
                    <p>1 KAPY =</p>
                    <img className='w-6 h-6' src={kda} alt="KDA" />
                    <p>.00001 KDA</p>
                </div>
                <div className='w-full flex justify-center gap-2'>
                    <img className='w-6 h-6' src={kapy} alt="KAPY" />
                    <p>1 KAPY =</p>
                    <img className='w-6 h-6' src={kwusdc} alt="kwUSDC" />
                    <p>0.00002 KDA</p>
                </div>
                <p className='text-xs'>Last updated @ 04:00P UTC July 29th 2022</p>
            </div>
        </div>
    </div>
  )
}

export default Details