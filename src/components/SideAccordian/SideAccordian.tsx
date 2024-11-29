import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { workSans } from '@/utils/Helper/helper';
import SideAvailable from '../SideAvailable/SideAvailable';
import SideColors from '../SideColors/SideColors';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { usePathname } from 'next/navigation';

const Text = () =>{
  const sidebarPath = usePathname();
  const {onOutOfStock,onProductAvailable,onProductKidAvailable,onProductWomenAvailable,onOutOfStockWomen,onOutOfStockKid} = useClothContext()
  return(
    
    <form action='' className='flex flex-col'>
  {sidebarPath === '/men' ?<> <div className='flex gap-4' onClick={onProductAvailable}><SideAvailable label='Availability' name='available' id='available'/></div>  <div className='flex gap-4' onClick={onOutOfStock}><SideAvailable label='Out of Stock' name='outofstock' id='outofstock'/></div></>:''}
  {sidebarPath === '/women' ? <><div className='flex gap-4' onClick={onProductWomenAvailable}><SideAvailable label='Availability' name='available' id='available'/></div>  <div className='flex gap-4' onClick={onOutOfStockWomen}><SideAvailable label='Out of Stock' name='outofstock' id='outofstock'/></div></>:''}
  {sidebarPath === '/kid' ? <><div className='flex gap-4' onClick={onProductKidAvailable}><SideAvailable label='Availability' name='available' id='available'/></div>  <div className='flex gap-4' onClick={onOutOfStockKid}><SideAvailable label='Out of Stock' name='outofstock' id='outofstock'/></div> </>:''}
 
  </form>
  )
  
// );
}

const PriceFilter = () => {
  const {priceInp,onPriceFilter,onPriceFilterWomen,onPriceFilterKid} = useClothContext();
  const pricePath = usePathname();
  return(
    <>
    {pricePath === '/men' ? <input className='w-[200px] bg-[#D9D9D9] outline-none' type="range" name="price" min={0} max={80} value={priceInp.price} onChange={(e) => onPriceFilter(e)} />:''}
    {pricePath === '/women' ? <input className='w-[200px] bg-[#D9D9D9] outline-none' type="range" name="priceWomen" min={0} max={80} value={priceInp.priceWomen} onChange={(e) => onPriceFilterWomen(e)} />:''}
    {pricePath === '/kid' ? <input className='w-[200px] bg-[#D9D9D9] outline-none' type="range" name="priceKid" min={0} max={80} value={priceInp.priceKid} onChange={(e) => onPriceFilterKid(e)} />:''}
    </>
  )
}

const clorList = ( <SideColors/> );

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Availability',
    children: <Text/>,
  },
  {
    key: '2',
    label: 'Colors',
    children: clorList,
  },
  {
    key: '3',
    label: 'Price Range',
    children: <PriceFilter/>,
  }
  
];

const SideAccordian: React.FC = () => <Collapse className={`${workSans.className}`} items={items} bordered={false}  />;

export default SideAccordian;