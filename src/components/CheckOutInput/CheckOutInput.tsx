'use client';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { CheckOutInp } from '@/utils/Type/type'
import React from 'react'

function CheckOutInput({name,place,value}:CheckOutInp) {
  const {onHandleCheckOutInp} = useClothContext();
  return (
    <input type="text" className='border p-2 mb-5 outline-none max-[1050px]:w-[100%]' name={name} id="" placeholder={`${place}`} value={value} onChange={(e) => onHandleCheckOutInp(e)}/>
  )
};
export default CheckOutInput;