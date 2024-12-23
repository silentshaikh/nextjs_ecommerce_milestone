'use client';
import ProductMenList from '../ProductMenList/ProductMenList';
import ProductContent from '../ProductContent/ProductContent';
import {  rubikBuble } from '@/utils/Helper/helper';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { ClothList } from '@/utils/Type/type';
function ProductMenChild({productMen}:{productMen:ClothList[]| undefined}) {
  const {sideBar, menBtn,onHandleFilter} = useClothContext();  
  return (
    <section 
      className={`${rubikBuble.className} bg-[#f3f3f3] pt-20 
     ${sideBar ? 'px-[20px]' : `pl-[350px] max-[1080px]:pl-[330px] 
      max-[960px]:pl-[300px] 
      max-[890px]:pl-[280px] 
      max-[840px]:pl-[260px] 
      max-[780px]:pl-[240px] 
      max-[720px]:pl-[220px] 
      max-[655px]:pl-[200px] 
      max-[420px]:pl-[190px]`}
      max-[360px]:px-[10px]
       max-[360px]:pt-12`}
    >
      <ProductContent name='meninput' removDuplicateBtn={menBtn} categ='men' btnFilter={onHandleFilter}/> 
      <ProductMenList productMen={productMen}/>
    </section>
  );
};
export default ProductMenChild;
