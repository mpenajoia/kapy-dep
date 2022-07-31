import React from 'react'


function Participate() {

  return (
    <div className='flex flex-col items-center gap-2'>
        <h2 className='font-bold text-3xl'>Participate Now</h2>
        <div>

            {/* ternary here */}
            <button className='bg-gradient-to-r to-[#E176FC] via-[#F17E6F] from-[#EFBC71] text-black font-bold text-lg rounded-lg px-3 py-1'>Connect Wallet</button>

        </div>
    </div>
  )
}

export default Participate