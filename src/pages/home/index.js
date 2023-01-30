import React from 'react'
import Navigation from './navigation'
import MobileMenu from './../../components/mobilemenu'

export const Home = () => {
  return (
    <section className=''>
      <div className=''>
        <Navigation></Navigation>

        <MobileMenu />
      </div>
    </section>
  )
}

export default Home
