'use client';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { FiMinus } from 'react-icons/fi'
import { GoPlus } from 'react-icons/go'
// {quan}:{quan:number}
function ProductImgQuantity({prodId}:{prodId:string,quan:number}) {
  const {prodQuan,incQuantity,decQuantity,cartData} = useClothContext(); 
  const quantityProduct = cartData.cartList.find((e) => e.productid === prodId);
  console.log(quantityProduct?.productquantity);
  // if(quantityProduct){
    return (
      <div className='flex gap-4 items-center  py-3  '>
        <button className='bg-[#F3F3F3] p-2' onClick={() => decQuantity(prodId)}><FiMinus />
        </button>
        <h5>{quantityProduct ? quantityProduct.productquantity : prodQuan}</h5>
        <button className='bg-[#F3F3F3] p-2' onClick={() => incQuantity(prodId)}><GoPlus />
        </button>
      </div>
    );
  // }
};
export default ProductImgQuantity;