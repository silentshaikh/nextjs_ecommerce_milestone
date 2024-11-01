import { heroNav } from '@/utils/Helper/helper'
import Link from 'next/link'
import React from 'react'

function HeroList() {
  return (
    <ul className=''>
      {heroNav.map((e) => {
        return <li key={e.name}><Link href={e.link}>{e.name}</Link></li>
      })}
    </ul>
  )
}

export default HeroList
