'use client';
import {  clothList, workSans } from '@/utils/Helper/helper';
import ProductImg from '../ProductImg/ProductImg';
import ProductImgContent from '../ProductImgContent/ProductImgContent';
import { ClothList } from '@/utils/Type/type';
function ProductCartChild({productId}:{productId:string}) {
  const findProductMen:ClothList | undefined = clothList.find((e) => {
    return e.id === +productId;
  });
  if(!findProductMen){
    return <h1>Product Not Found</h1>
  }
  return (
    <section className={`${workSans.className} flex justify-evenly items-center pt-32 pb-10 max-[700px]:flex-col max-[700px]:gap-10`}>
      <ProductImg img={findProductMen.img} name={findProductMen.name} imgList={findProductMen.imgList} />
    <ProductImgContent name={findProductMen.name} color={findProductMen.color} size={findProductMen.size} price={findProductMen.price}/>
    </section>
  )
};
export default ProductCartChild;