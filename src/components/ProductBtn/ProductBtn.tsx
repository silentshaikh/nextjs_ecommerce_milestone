'use client';
import { workSans } from '@/utils/Helper/helper';
import ProductButton from '../ProductButton/ProductButton';
import { ProductContType, ProductSearchType } from '@/utils/Type/type';
function ProductBtn({removDuplicateBtn,categ,btnFilter}:ProductContType) {
  return (
    <div className={`${workSans.className}  w-[350px] flex  justify-center gap-1 flex-wrap max-[1070px]:w-[300px]  max-[500px]:w-[260px] max-[460px]:w-[200px] max-[440px]:w-[180px] max-[400px]:w-[160px] max-[360px]:w-[140px] max-[340px]:w-[130px]`}>
      {removDuplicateBtn.map((e) => {
        return <ProductButton key={e} name={e} categ={categ} btnFilter={btnFilter}/>
      })}
    </div>
  )
};
export default ProductBtn;