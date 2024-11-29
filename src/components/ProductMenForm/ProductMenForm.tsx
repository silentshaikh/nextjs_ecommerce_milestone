'use client';
import Image from 'next/image';
import { ProductInputType } from '@/utils/Type/type';
import ProductMenInput from '../ProductMenInput/ProductMenInput';
import useClothContext from '@/Hooks/ClothContext/ClothContext';

function ProductMenForm({name}:ProductInputType) {
  const {onProductSearch} = useClothContext();
  return (
    <form action="" onSubmit={onProductSearch}>
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