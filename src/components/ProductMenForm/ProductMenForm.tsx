import Image from 'next/image';
import { ProductInputType } from '@/utils/Type/type';
import ProductMenInput from '../ProductMenInput/ProductMenInput';

function ProductMenForm({name}:ProductInputType) {
  return (
    <form action="">
        <Image
        className='relative top-8 left-4'
        src="/images/Group 4.png"
        alt='search'
        width={15}
        height={15}
        />
      <ProductMenInput name={name}/>
    </form>
  )
};
export default ProductMenForm;