import ProductSize from '../ProductSize/ProductSize'
import ProductColor from '../ProductColor/ProductColor'
import CardAddSubt from '../CardAddSubt/CardAddSubt'
import { workSans } from '@/utils/Helper/helper'

function CartOtherDetail() {
  return (
    <div className={`${workSans.className} flex flex-col items-center gap-2`}>
      <ProductSize/>
      <ProductColor/>
      <CardAddSubt/>
    </div>
  )
}

export default CartOtherDetail
