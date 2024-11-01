import { CheckLabel } from '@/utils/Type/type'
import React from 'react'

function CheckOutLabel({labelValue}:CheckLabel) {
  return (
    <label className='uppercase py-3 font-bold'>
      {labelValue}
    </label>
  )
}

export default CheckOutLabel
