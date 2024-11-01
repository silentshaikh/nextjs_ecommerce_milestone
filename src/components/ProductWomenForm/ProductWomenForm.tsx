import Image from 'next/image';
import { ProductInputType } from '@/utils/Type/type';
import ProductWomenInput from '../ProductWomenInput/ProductWomenInput';

function ProductWomenForm({name}:ProductInputType) {
  return (
    <form action="">
        <Image
        className='relative top-8 left-4'
        src="/images/Group 4.png"
        alt='search'
        width={15}
        height={15}
        />
      <ProductWomenInput name={name}/>
    </form>
  )
};
export default ProductWomenForm;