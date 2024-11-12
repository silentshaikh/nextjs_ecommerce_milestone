'use client';
import { menProduct,poppins, rubikBuble, workSans } from '@/utils/Helper/helper'
import React from 'react'
import Card from '../Card/Card';
import Link from 'next/link';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { ClothList } from '@/utils/Type/type';
function ProductMenList({productMen}:{productMen:ClothList[]| undefined}) {
  const {inputList,fetchProductData} = useClothContext();
  // const productMen = await fetchProductData(`http://localhost:3000/api/men`);
  let {meninput} = inputList;
  const searchProd = productMen?.filter((e) => {
    return e.name.toLowerCase().split(/\s+/).join("").includes(meninput.toLowerCase().split(/\s+/).join(""));
  });
  if(searchProd){
    return (
      <section className={`${poppins.className} flex justify-evenly items-center flex-wrap`}>
        {
          searchProd.length>0 ?
        (searchProd.map((e,i) => {
          return(
              <Card  key={e.id} color={e.color} name={e.name} img={e.img} id={e.id} category={e.category} imgList={e.imgList}
              size={e.size} price={e.price}  />
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
      <>
      <h1>Product Not FOund</h1>
      </>
    )
  }
};
export default ProductMenList
