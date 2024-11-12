import ProductContent from "../ProductContent/ProductContent";
import { rubikBuble } from "@/utils/Helper/helper";
import ProductMenList from "../ProductMenList/ProductMenList";
import ProductSideBar from "../ProductSideBar/ProductSideBar";
import ProductMenChild from "../ProductMenChild/ProductMenChild";
import ProductMenParent from "../ProductMenParent/ProductMenParent";
import { ClothList } from "@/utils/Type/type";
function ProductMen({productMen}:{productMen:ClothList[] | undefined}) {
  return (
    <>
   <ProductMenParent productMen={productMen}/>
    </>
  )
};
export default ProductMen
