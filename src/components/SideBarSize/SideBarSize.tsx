import { sideBarSize,poppins } from '@/utils/Helper/helper'
import React from 'react'
import Size from '../Size/Size'

function SideBarSize() {
  return (
    <div className='border-b-2 pb-3'>
      <h3 className='pb-3'>Size</h3>
      <Size/>
    </div>
  )
}

export default SideBarSize
