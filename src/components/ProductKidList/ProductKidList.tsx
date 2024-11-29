'use client';
import {  poppins, rubikBuble } from '@/utils/Helper/helper';
import Card from '../Card/Card';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { ClothList } from '@/utils/Type/type';
function ProductKidList({productKid}:{productKid:ClothList[] | undefined}) {
  const {inputList,kidProduct} = useClothContext();
  //find product

  if(kidProduct){
    return (
      <section className={`${poppins.className} flex justify-evenly items-center flex-wrap`}>
        {
          kidProduct.length > 0 ?
        (kidProduct.map((e,i) => {
          return(
              <Card key={e.id} color={e.color} name={e.name} img={e.img} id={e.id} category={e.category} imgList={e.imgList}
              size={e.size} price={e.price} type={e.type} isAvailable={e.isAvailable}/>
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