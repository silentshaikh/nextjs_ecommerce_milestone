import { CheckOutInp } from '@/utils/Type/type'
import React from 'react'

function CheckOutInput({name,place}:CheckOutInp) {
  return (
    <input type="text" className='border p-2 mb-5 outline-none max-[950px]:w-[100%]' name={name} id="" placeholder={`${place}`}/>
  )
}

export default CheckOutInput
