'use client';
import {  clothList, workSans } from '@/utils/Helper/helper';
import ProductImg from '../ProductImg/ProductImg';
import ProductImgContent from '../ProductImgContent/ProductImgContent';
import { ClothList } from '@/utils/Type/type';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
 function ProductCartChild({productId,productDetail}:{productId:string,productDetail:ClothList|undefined}) {
    const {productList} = useClothContext();
  const findProductMen:ClothList | undefined = productList?.find((e) => {
    return e.id === productDetail?.id;
  });
  if(!findProductMen){
    return <h1>Product Not Found</h1>
  };
  return (
    <section className={`${workSans.className} flex justify-evenly items-center pt-32 pb-10 max-[700px]:flex-col max-[700px]:gap-10`}>
      <ProductImg img={findProductMen.img} name={findProductMen.name} imgList={findProductMen.imgList} />
    <ProductImgContent name={findProductMen.name} color={findProductMen.color} size={findProductMen.size} price={findProductMen.price}/>
    </section>
  )
};
export default ProductCartChild;