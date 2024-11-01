import Image from 'next/image';
import { ProductInputType } from '@/utils/Type/type';
import ProductKidInput from '../ProductKidInput/ProductKidInput';

function ProductKidForm({name}:ProductInputType) {
  return (
    <form action="">
        <Image
        className='relative top-8 left-4'
        src="/images/Group 4.png"
        alt='search'
        width={15}
        height={15}
        />
      <ProductKidInput name={name}/>
    </form>
  )
};
export default ProductKidForm;