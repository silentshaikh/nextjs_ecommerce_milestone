import { ClothList } from '@/utils/Type/type'
import Image from 'next/image'
import React from 'react'

function NewWeekCard({img,name,category,price,id}:ClothList) {
  return (
    <div   className=' py-10 flex  flex-col items-start max-[860px]:py-5 max-[360px]:py-2'>
      <Image
      className='size-[300px] '
      src={`/images/${img}`}
      alt={name}
      width={305}
      height={313}
      />
      <h3 className='text-sm uppercase max-[760px]:text-[10px]'>{category}</h3>
      <div  className='font-bold max-[1080px]:text-sm ' >
        <h4 className=''>{name}</h4>
      </div>
    </div>
  )
}

export default NewWeekCard
