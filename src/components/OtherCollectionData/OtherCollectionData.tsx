import React from 'react'
import CollectOne from '../CollectOne/CollectOne'
import CollectTwo from '../CollectTwo/CollectTwo'

function OtherCollectionData() {
  return (
    <div className='flex gap-10 max-[425px]:hidden'>
      <CollectOne/>
      <CollectTwo/>
    </div>
  )
}

export default OtherCollectionData
