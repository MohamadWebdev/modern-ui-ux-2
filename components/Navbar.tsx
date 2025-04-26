import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between mt-5'>
      <h1 className='font-IMFellGreatPrimerSC text-[23.35px] text-white'>Light</h1>

      <div className='flex'>
        <Button style='gradient-1' title='Sign In' />

        <ul></ul>
      </div>
    </div>
  )
}

export default Navbar