'use client';

import useClothContext from "@/Hooks/ClothContext/ClothContext";

function CollectOne() {
  const {collectionContent} = useClothContext()
  return (
    <h5  className='max-[500px]:text-sm'>
      {collectionContent.collectfilter}(&#43;)
    </h5>
  )
}

export default CollectOne
