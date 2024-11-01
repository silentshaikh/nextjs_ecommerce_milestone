import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { workSans } from '@/utils/Helper/helper';
import SideAvailable from '../SideAvailable/SideAvailable';
import SideColors from '../SideColors/SideColors';

const text = (
  <form action='' className='flex flex-col'>
  <SideAvailable label='Availability' name='available'/>
  <SideAvailable label='Out of Stock' name='outofstock'/>
  </form>

);

const clorList = ( <SideColors/> );

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Availability',
    children: text,
  },
  {
    key: '2',
    label: 'Colors',
    children: clorList,
  },
  {
    key: '3',
    label: 'Price Range',
    children: text,
  },
  {
    key: '4',
    label: 'Tags',
    children: text,
  },
  {
    key: '5',
    label: 'Collection',
    children: text,
  },
  {
    key: '6',
    label: 'Ratings',
    children: text,
  },
  
];

const SideAccordian: React.FC = () => <Collapse className={`${workSans.className}`} items={items} bordered={false}  />;

export default SideAccordian;