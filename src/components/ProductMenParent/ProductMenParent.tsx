'use client';
import React from 'react'
import ProductMenChild from '../ProductMenChild/ProductMenChild'
import Context from '@/Context/Context'

function ProductMenParent() {
  return (
    <>
      {/* <Context> */}
        <ProductMenChild/>
      {/* </Context> */}
    </>
  )
}

export default ProductMenParent
