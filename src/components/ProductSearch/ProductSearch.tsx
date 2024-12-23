'use client';
import { ProductContType} from '@/utils/Type/type';
import ProductBtn from '../ProductBtn/ProductBtn';
import { usePathname } from 'next/navigation';
import ProductMenForm from '../ProductMenForm/ProductMenForm';
import ProductWomenForm from '../ProductWomenForm/ProductWomenForm';
import ProductKidForm from '../ProductKidForm/ProductKidForm';

function ProductSearch({name,removDuplicateBtn,categ,btnFilter}:ProductContType) {
  const webPath = usePathname();
  return (
    <div className='flex justify-between items-center  max-[1080px]:justify-evenly max-[969px]:flex-col max-[969px]:gap-3'>
      {webPath === '/men' ? <ProductMenForm name={name}/> : ''}
      {webPath === '/women' ? <ProductWomenForm name={name}/> : ''}
      {webPath === '/kid' ? <ProductKidForm name={name}/> : ''}
      <ProductBtn name={name} removDuplicateBtn={removDuplicateBtn} categ={categ} btnFilter={btnFilter} />
    </div>
  );
};

export default ProductSearch;