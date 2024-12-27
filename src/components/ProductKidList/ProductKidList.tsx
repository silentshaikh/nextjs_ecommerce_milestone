'use client';
import {  poppins, rubikBuble } from '@/utils/Helper/helper';
import Card from '../Card/Card';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { ClothList } from '@/utils/Type/type';
function ProductKidList({}:{productKid:ClothList[] | undefined}) {
  const {kidProduct} = useClothContext();
  if(kidProduct){
    return (
      <section className={`${poppins.className} flex justify-evenly items-center flex-wrap`}>
        {
          kidProduct.length > 0 ?
        (kidProduct.map((e) => {
          return(
            <Card  key={e.productid} productcolors={e.productcolors} productname={e.productname} productimage={e.productimage} productid={e.productid} productcategory={e.productcategory} productimagelist={e.productimagelist}
            productsizes={e.productsizes} productprice={e.productprice}  producttype={e.producttype} productavaiableornot={e.productavaiableornot} productquantity={e.productquantity}/>
          );
        }))
        : (<div className={` ${rubikBuble.className} h-screen flex items-center`}> 
          <h1 className='text-4xl'>PRODUCT NOT AVAILABLE</h1>
        </div>) 
      }
      </section>
    )
  }else{
    return(
      <div className='h-screen'>
      <h1>Product Not Found</h1>
      </div>
    )
  }
};
export default ProductKidList;