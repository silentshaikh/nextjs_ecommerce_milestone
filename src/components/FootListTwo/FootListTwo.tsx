import { webLang } from '@/utils/Helper/helper'
import React from 'react'

function FootListTwo() {
  return (
    <div>
    <h5 className='pb-3 text-sm font-bold text-[#b6b1b1]'>LANGUAGE</h5>
    <ul className='text-[#b6b1b1]'>
  {webLang.map((e) => {
    return <li key={e}>{e}</li>
  })}
</ul>
</div>
  )
}

export default FootListTwo
