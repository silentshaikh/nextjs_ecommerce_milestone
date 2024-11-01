import { FasionDesign } from '@/utils/Type/type'
import Image from 'next/image'
import React from 'react'

function FashionImg({id,img,alignstyle}:FasionDesign) {
  return (
  <Image 
  className=''
  key={id}
  src={`/images/${img}`}
  alt="Fashion Design"
  height={304}
  width={366}
  />
  )
}

export default FashionImg
