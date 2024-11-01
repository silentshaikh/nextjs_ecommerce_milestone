import Image from 'next/image'
import React from 'react'
import HeroInput from '../HeroInput/HeroInput'

function HeroForm() {
  return (
    <form action="">
        <Image
        className='relative top-8 left-4'
        src="/images/Group 4.png"
        alt='search'
        width={15}
        height={15}
        />
      <HeroInput/>
    </form>
  )
}

export default HeroForm
