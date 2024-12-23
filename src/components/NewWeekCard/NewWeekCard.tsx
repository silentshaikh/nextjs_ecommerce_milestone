import {  WeekImageItem } from '@/utils/Type/type'
import Image from 'next/image'
import React from 'react'

function NewWeekCard({imagename,imagetitle,producttype}:WeekImageItem) {
  return (
    <div   className=' py-10 flex  flex-col items-start max-[860px]:py-5 max-[360px]:py-2'>
      <Image
      className='size-[300px] '
      src={imagename}
      alt={imagetitle}
      width={305}
      height={313}
      />
      <h3 className='text-sm uppercase max-[760px]:text-[10px]'>{producttype}</h3>
      <div  className='font-bold max-[1080px]:text-sm ' >
        <h4 className=''>{imagetitle}</h4>
      </div>
    </div>
  )
}

export default NewWeekCard
