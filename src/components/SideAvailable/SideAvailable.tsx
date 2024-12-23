'use client';
// import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { TypeForAvailable } from '@/utils/Type/type'
import React from 'react'

function SideAvailable({name,label,id}:TypeForAvailable) {
  
  return (
    // <div className='flex gap-4' onClick={onProductAvailable}>
    <>
     <input type="checkbox" name={name} id={id} /> 
     <label htmlFor={id}>{label}</label>
    </>
    // </div>
  )
};
export default SideAvailable;