'use client';
import React from 'react'
import ProductMenChild from '../ProductMenChild/ProductMenChild'
// import Context from '@/Context/Context'
import { ClothList } from '@/utils/Type/type';

function ProductMenParent({productMen}:{productMen:ClothList[] | undefined}) {
  return (
    <>
      {/* <Context> */}
        <ProductMenChild productMen={productMen}/>
      {/* </Context> */}
    </>
  )
}

export default ProductMenParent
