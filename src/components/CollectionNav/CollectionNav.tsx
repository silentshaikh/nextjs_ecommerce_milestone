'use client';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { collectionNav } from '@/utils/Helper/helper'
import React from 'react'

function CollectionNav() {
  const {onCollectionFilter,collectNav} = useClothContext();
  return (
    <ul className='text-[#5E5E5E] flex gap-4 relative top-10  max-[425px]:top-0'>
      {collectionNav.map((e) => {
        return <li key={e} className={`cursor-pointer max-[500px]:text-[12px] `} onClick={() => onCollectionFilter(e) }>{e}</li>
      })}
    </ul>
  )
}

export default CollectionNav;
