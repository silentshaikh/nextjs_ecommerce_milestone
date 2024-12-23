// import { sideBarSize,poppins } from '@/utils/Helper/helper'
import React from 'react'
import Size from '../Size/Size'

function SideBarSize({sizeFilter}:{sizeFilter:(size:string) => void}) {
  return (
    <div className='border-b-2 pb-3'>
      <h3 className='pb-3'>Size</h3>
      <Size sizeFilter={sizeFilter}/>
    </div>
  )
}

export default SideBarSize
