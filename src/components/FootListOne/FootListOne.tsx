import { webInfo } from '@/utils/Helper/helper'
import React from 'react'

function FootListOne() {
  return (
    <div>
        <h5 className='pb-3 text-[#b6b1b1] text-sm font-bold'>INFO</h5>
        <ul className='uppercase text-[#b6b1b1]'>
      {webInfo.map((e) => {
        return <li key={e}>{e}</li>
      })}
    </ul>
    </div>
  )
}

export default FootListOne
