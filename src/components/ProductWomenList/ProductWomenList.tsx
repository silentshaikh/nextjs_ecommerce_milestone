import { poppins, rubikBuble} from '@/utils/Helper/helper';
import Card from '../Card/Card';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { ClothList } from '@/utils/Type/type';

function ProductWomenList({}:{womenProduct:ClothList[] | undefined}) {
  const {womenProduct} = useClothContext();
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
            <Card  key={e.productid} productcolors={e.productcolors} productname={e.productname} productimage={e.productimage} productid={e.productid} productcategory={e.productcategory} productimagelist={e.productimagelist}
            productsizes={e.productsizes} productprice={e.productprice}  producttype={e.producttype} productavaiableornot={e.productavaiableornot}/>   
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
