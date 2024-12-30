import ProductSize from '../ProductSize/ProductSize'
import ProductColor from '../ProductColor/ProductColor'
import CardAddSubt from '../CardAddSubt/CardAddSubt'
import { workSans } from '@/utils/Helper/helper'

function CartOtherDetail({productsize,productcolor,productquantity,productId}:{productId:string,productsize:string,productcolor:string,productquantity:number}) {
  return (
    <div className={`${workSans.className} flex flex-col items-center gap-2`}>
      <ProductSize size={productsize}/>
      <ProductColor color={productcolor}  />
      <CardAddSubt quantity={productquantity} productId={productId} />
    </div>
  )
}

export default CartOtherDetail
