import { ClothList } from '@/utils/Type/type';
import ProductKidChild from '../ProductKidChild/ProductKidChild';
function ProductKid({productKid}:{productKid:ClothList[] | undefined}) {
  return (
    <>
      <ProductKidChild productKid={productKid}/>
    </>
  )
}

export default ProductKid
