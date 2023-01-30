import React from 'react'
// import { RxHamburgerMenu, } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import { HamburgerMenu } from './../../components/hamburgermenu'

export const Navigation = () => {
  return (

    <section className='bg-red-300 py-2'>
      <div className='flex justify-around'>
        <ul className='flex gap-x-4'>
          <NavLink to='/signin'>sign in</NavLink>
          <NavLink to='/signup'>sign up</NavLink>
        </ul>
        
          <div>
            <HamburgerMenu />
          </div>
        

      </div>
    </section>
  )
}

export default Navigation
