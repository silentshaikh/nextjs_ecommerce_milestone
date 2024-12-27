'use client';
import { workSans } from '@/utils/Helper/helper';
import ProductImg from '../ProductImg/ProductImg';
import ProductImgContent from '../ProductImgContent/ProductImgContent';
import { ClothList } from '@/utils/Type/type';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
 function ProductCartChild({productId}:{productId:string,productDetail:ClothList|undefined}) {
    const {productList} = useClothContext();
  const findProductMen:ClothList | undefined = productList?.find((e) => {
    return e.productid === productId;
  });
  // console.log(findProductMen)
  if(!findProductMen){
    return <h1>Product Not Found</h1>
  };
  return (
    <section className={`${workSans.className} flex justify-evenly items-center pt-32 pb-10 max-[700px]:flex-col max-[700px]:gap-10`}>
      <ProductImg img={findProductMen.productimage} name={findProductMen.productname} imgList={findProductMen.productimagelist} />
    <ProductImgContent quan={findProductMen.productquantity} prodId={productId} name={findProductMen.productname}  color={findProductMen.productcolors} size={findProductMen.productsizes} price={findProductMen.productprice}/>
    </section>
  )
};
export default ProductCartChild;