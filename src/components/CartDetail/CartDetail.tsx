'use client';
// import { cart } from "@/utils/Helper/helper"
import CartCard from "../CartCard/CartCard"
import CartOtherDetail from "../CartOtherDetail/CartOtherDetail"
import useClothContext from "@/Hooks/ClothContext/ClothContext"

function CartDetail() {
  const {cartData} = useClothContext();
  const {AddProduct} = cartData;
  if(AddProduct.length>0){
    return (
      <div className='flex items-center justify-center gap-10 flex-wrap py-10 border-[#D9D9D9] border-b-2 px-5'>
        {
          AddProduct.map((e) => {
            return(
              <div key={e.productid} className="flex items-center gap-3 mb-7">
              <CartCard category={e.productcategory} name={e.productname} img={e.productimage} price={e.productprice}  />
              <CartOtherDetail productId={e.productid} productcolor={e.productcolor} productsize={e.productsize} productquantity={e.productquantity} />
              </div>
            )
          })
        }
       
        {/* <div className="flex items-center gap-3 mb-7">
        <CartCard category={cart.productcategory} name={cart.productname} img={cart.productimage} price={cart.productprice}  />
        <CartOtherDetail/>
        </div>
        <div className="flex items-center gap-3 ">
        <CartCard category={cart.productcategory} name={cart.productname} img={cart.productimage} price={cart.productprice}  />
        <CartOtherDetail/>
        </div> */}
        
      </div>
    )
  }else{
    return(
      <>
      <h1>No Product in Cart</h1>
      </>
    )
  }
}

export default CartDetail
