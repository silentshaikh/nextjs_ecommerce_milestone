'use client';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { FiMinus } from 'react-icons/fi'
import { GoPlus } from 'react-icons/go'
function ProductImgQuantity({prodId}:{prodId:string,quan:number}) {
  const {incQuantity,decQuantity,cartData} = useClothContext(); 
  const quantityProduct = cartData.cartList.find((e) => e.productid === prodId)
  console.log(quantityProduct?.productquantity);
  const prodQuan = quantityProduct && quantityProduct.productquantity; 
    return (
      <div className='flex gap-4 items-center  py-3  '>
        <button className='bg-[#F3F3F3] p-2' onClick={() => decQuantity(prodId)}><FiMinus />
        </button>
        <h5>{prodQuan}</h5>
        <button className='bg-[#F3F3F3] p-2' onClick={() => incQuantity(prodId)}><GoPlus />
        </button>
      </div>
    );
};
export default ProductImgQuantity;