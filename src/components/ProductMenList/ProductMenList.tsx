'use client';
import { poppins, rubikBuble } from '@/utils/Helper/helper'
import React from 'react'
import Card from '../Card/Card';
// import Link from 'next/link';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { ClothList } from '@/utils/Type/type';
function ProductMenList({}:{productMen:ClothList[]| undefined}) {
  const {product} = useClothContext();
  // const productMen = await fetchProductData(`http://localhost:3000/api/men`);
  // let {meninput} = inputList;
  // const searchProd = productMen?.filter((e) => {
  //   return e.name.toLowerCase().split(/\s+/).join("").includes(meninput.toLowerCase().split(/\s+/).join(""));
  // });
  console.log(product);
  if(product){
    return (
      <section className={`${poppins.className} flex justify-evenly items-center flex-wrap`}>
        {
          product.length>0 ?
        (product.map((e) => {
          return(
              <Card  key={e.productid} productcolors={e.productcolors} productname={e.productname} productimage={e.productimage} productid={e.productid} productcategory={e.productcategory} productimagelist={e.productimagelist}
              productsizes={e.productsizes} productprice={e.productprice}  producttype={e.producttype} productavaiableornot={e.productavaiableornot}/>
          );
        }))
        : (<div className={` ${rubikBuble.className} h-screen flex items-center`}> 
          <h1 className='text-4xl'>PRODUCT NOT AVAILABLE</h1>
        </div>) 
        }
      </section>
    )
  }else{
    return (
      <div className='h-screen'>
      <h1>Product Not Found</h1>
      </div>
    )
  }
};
export default ProductMenList
