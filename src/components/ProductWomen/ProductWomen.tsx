import { ClothList } from "@/utils/Type/type";
import ProductWomenChild from "../ProductWomenChild/ProductWomenChild";
function ProductWomen({womenProduct}:{womenProduct:ClothList[] | undefined}) {
  return (
    <>
     <ProductWomenChild womenProduct={womenProduct}/> 
    </>
  )
}

export default ProductWomen
