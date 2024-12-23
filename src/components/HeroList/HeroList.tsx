'use client'
import useClothContext from '@/Hooks/ClothContext/ClothContext'
// import { heroNav } from '@/utils/Helper/helper'
import Link from 'next/link'
import React from 'react'

function HeroList() {
  const {heroContent} = useClothContext();
  return (
    <ul className=''>
      {heroContent.heronavlist.map((e) => {
        return <li key={e.itemid}><Link href={e.itemlink}>{e.listitem}</Link></li>
      })}
    </ul>
  )
}

export default HeroList
