'use client';
import { ProductInputType, ProductSearchType } from '@/utils/Type/type';
import ProductHeading from '../ProductHeading/ProductHeading'
import ProductSearch from '../ProductSearch/ProductSearch'

function ProductContent({name,removDuplicateBtn}:ProductSearchType) {
  return (
    <section className=''>
      <ProductHeading/>
      <ProductSearch name={name} removDuplicateBtn={removDuplicateBtn}/>
    </section>
  )
}

export default ProductContent
