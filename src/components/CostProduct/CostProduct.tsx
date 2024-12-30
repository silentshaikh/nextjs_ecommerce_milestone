import { TypeFOrCostProduct } from '@/utils/Type/type'
import React from 'react'

function CostProduct({name,price}:TypeFOrCostProduct) {
  return (
    <div className="flex  justify-around text-sm pb-3 font-bold ">
        <h5>{name}</h5>
        <h5 className=''>${price.toFixed(2)}</h5>
      </div>
  )
}

export default CostProduct
