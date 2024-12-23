import { FashionImageItem} from '@/utils/Type/type'
import Image from 'next/image'
import React from 'react'

function FashionImg({imageid,imagename,imagetitle}:FashionImageItem) {
  return (
  <Image 
  className=''
  key={imageid}
  src={imagename}
  alt={imagetitle}
  height={304}
  width={366}
  />
  )
}

export default FashionImg
