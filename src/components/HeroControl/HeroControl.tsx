import React from 'react'
import HeroButton from '../HeroButton/HeroButton'
import HeroContBtn from '../HeroContBtn/HeroContBtn'

function HeroControl() {
  return (
    <div className='flex gap-5 relative left-10 bottom-10 w-[350px] max-[1070px]:left-1 max-[830px]:bottom-0 max-[830px]:top-5 max-[444px]:w-[280px] max-[320px]:w-[240px]'>
      <HeroButton/>
      <HeroContBtn/>
    </div>
  )
}

export default HeroControl
