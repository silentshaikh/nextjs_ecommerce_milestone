'use client';
import { ProductContType, ProductInputType, ProductSearchType } from '@/utils/Type/type';
import ProductHeading from '../ProductHeading/ProductHeading'
import ProductSearch from '../ProductSearch/ProductSearch'

function ProductContent({name,removDuplicateBtn,categ,btnFilter}:ProductContType) {
  return (
    <section className=''>
      <ProductHeading/>
      <ProductSearch name={name} removDuplicateBtn={removDuplicateBtn} categ={categ} btnFilter={btnFilter}/>
    </section>
  )
}

export default ProductContent
