import { poppins, rubikBuble, womenProduct } from '@/utils/Helper/helper';
import Card from '../Card/Card';
import useClothContext from '@/Hooks/ClothContext/ClothContext';

function ProductWomenList() {
  const {inputList} = useClothContext();
  let {womeninput} = inputList;
  //find product
  const searchWomenProduct = womenProduct.filter((e) => {
    return e.name.toLowerCase().split(/\s+/).join("").includes(womeninput.toLowerCase().split(/\s+/).join(""));
  });
  return (
    <section className={`${poppins.className} flex justify-evenly items-center flex-wrap`}>
      {
       searchWomenProduct.length > 0 ? 
      (searchWomenProduct.map((e) => {
        return(
       
            <Card key={e.id} color={e.color} name={e.name} img={e.img} id={e.id} category={e.category} imgList={e.imgList}
            size={e.size} price={e.price}    />
          
        )
      }))
    : (<div className={` ${rubikBuble.className} h-screen flex items-center`}> 
      <h1 className='text-4xl'>PRODUCT NOT AVAILABLE</h1>
    </div>) 
    }
    </section>
  )
}

export default ProductWomenList
