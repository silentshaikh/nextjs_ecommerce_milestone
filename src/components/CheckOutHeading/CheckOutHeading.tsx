import { rubikBuble } from '@/utils/Helper/helper'
import React from 'react'

function CheckOutHeading() {
  return (
    <h1 className={`${rubikBuble.className} text-5xl  w-48 relative left-32 pb-5 max-[1100px]:left-20 max-[980px]:left-6 max-[270px]:text-center `}>
      CHECKOUT
    </h1>
  )
}

export default CheckOutHeading
