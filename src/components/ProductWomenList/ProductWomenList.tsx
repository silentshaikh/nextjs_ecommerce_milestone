import { poppins, rubikBuble, womenProduct } from '@/utils/Helper/helper';
import Card from '../Card/Card';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { ClothList } from '@/utils/Type/type';

function ProductWomenList({}:{womenProduct:ClothList[] | undefined}) {
  const {inputList,productList,womenProduct} = useClothContext();
  // let {womeninput} = inputList;
  //find product
  // const searchWomenProduct:ClothList[]| undefined = womenProduct?.filter((e) => {
  //   return e.name.toLowerCase().split(/\s+/).join("").includes(womeninput.toLowerCase().split(/\s+/).join(""));
  // });
  if(womenProduct){
    return (
      <section className={`${poppins.className} flex justify-evenly items-center flex-wrap`}>
        {
         womenProduct.length > 0 ? 
        (womenProduct.map((e) => {
          return(
         
              <Card key={e.id} color={e.color} name={e.name} img={e.img} id={e.id} category={e.category} imgList={e.imgList}
              size={e.size} price={e.price} type={e.type} isAvailable={e.isAvailable} />
            
          )
        }))
      : (<div className={` ${rubikBuble.className} h-screen flex items-center`}> 
        <h1 className='text-4xl'>PRODUCT NOT AVAILABLE</h1>
      </div>) 
      }
      </section>
    )
  }
}

export default ProductWomenList
