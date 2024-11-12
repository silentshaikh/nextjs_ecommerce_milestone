
import ProductCartChild from '../ProductCartChild/ProductCartChild'
import { ClothList } from '@/utils/Type/type';


async function ProductCart({productId,productDetail}:{productId:string,productDetail:ClothList|undefined}) {
    // const menDetail:ClothList | undefined =await  fetchMenDetail(productId);
  
  return (
    <>
     <ProductCartChild productId={productId} productDetail={productDetail}/> 
    </>
  );
};
export default ProductCart;