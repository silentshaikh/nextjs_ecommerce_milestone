import { TypeForAvailable } from '@/utils/Type/type'
import React from 'react'

function SideAvailable({name,label}:TypeForAvailable) {
  return (
    <div className='flex gap-4'>
     <input type="checkbox" name={name} id="" /> 
     <label htmlFor="">{label}</label>
    </div>
  )
};
export default SideAvailable;