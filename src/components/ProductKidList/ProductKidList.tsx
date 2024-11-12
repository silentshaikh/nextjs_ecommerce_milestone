'use client';
import { kidProduct, poppins, rubikBuble } from '@/utils/Helper/helper';
import Card from '../Card/Card';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { ClothList } from '@/utils/Type/type';
function ProductKidList({productKid}:{productKid:ClothList[] | undefined}) {
  const {inputList} = useClothContext();
  let {kidinput} = inputList;
  //find product
  const searchKidProduct = kidProduct.filter((e) => {
    return e.name.toLowerCase().split(/\s+/).join("").includes(kidinput.toLowerCase().split(/\s+/).join(""));
  });
  return (
    <section className={`${poppins.className} flex justify-evenly items-center flex-wrap`}>
      {
        searchKidProduct.length > 0 ?
      (searchKidProduct.map((e,i) => {
        return(
            <Card key={e.id} color={e.color} name={e.name} img={e.img} id={e.id} category={e.category} imgList={e.imgList}
            size={e.size} price={e.price} />
        );
      }))
      : (<div className={` ${rubikBuble.className} h-screen flex items-center`}> 
        <h1 className='text-4xl'>PRODUCT NOT AVAILABLE</h1>
      </div>) 
    }
    </section>
  )
};
export default ProductKidList;