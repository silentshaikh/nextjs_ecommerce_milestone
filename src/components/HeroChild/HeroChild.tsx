import React from 'react'
import HeroContext from '../HeroContext/HeroContext'
import HeroImages from '../HeroImages/HeroImages'

function HeroChild() {
  return (
    <section className='flex justify-evenly max-[1260px]:justify-between max-[1025px]:justify-evenly max-[830px]:flex-col '>
      <HeroContext/>
      <HeroImages/>
    </section>
  )
}

export default HeroChild
