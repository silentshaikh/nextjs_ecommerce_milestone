import React from 'react'
import ProductCartChild from '../ProductCartChild/ProductCartChild'

function ProductCart({productId}:{productId:string}) {
  return (
    <>
     <ProductCartChild productId={productId}/> 
    </>
  )
}

export default ProductCart
