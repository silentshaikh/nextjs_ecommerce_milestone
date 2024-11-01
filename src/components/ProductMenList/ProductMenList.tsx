'use client';
import { menProduct,poppins, rubikBuble, workSans } from '@/utils/Helper/helper'
import React from 'react'
import Card from '../Card/Card';
import Link from 'next/link';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
function ProductMenList() {
  const {inputList} = useClothContext();
  let {meninput} = inputList;
  const searchProd = menProduct.filter((e) => {
    return e.name.toLowerCase().split(/\s+/).join("").includes(meninput.toLowerCase().split(/\s+/).join(""));
  });
  return (
    <section className={`${poppins.className} flex justify-evenly items-center flex-wrap`}>
      {
        searchProd.length>0 ?
      (searchProd.map((e,i) => {
        return(
            <Card key={e.id} color={e.color} name={e.name} img={e.img} id={e.id} category={e.category} imgList={e.imgList}
            size={e.size} price={e.price}  />
        );
      }))
      : (<div className={` ${rubikBuble.className} h-screen flex items-center`}> 
        <h1 className='text-4xl'>PRODUCT NOT AVAILABLE</h1>
      </div>) 
      }
    </section>
  )
};
export default ProductMenList
