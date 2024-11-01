import { CheckOutCard } from '@/utils/Type/type';
import Image from 'next/image';
import CheckOutProductDetail from '../CheckOutProductDetail/CheckOutProductDetail';


function CheckOutProductCard({ color,img,name,size,price}:CheckOutCard) {
  return (
    <div className='flex gap-2 max-[430px]:gap-1 max-[380px]:gap-0'>
      <Image
      className='max-[410px]:size-[70px]'
      src={`/images/${img}`}
      alt={name}
      height={100}
      width={100}
      />
      <CheckOutProductDetail color={color} name={name} size={size} price={price}  />
    </div>
  )
}

export default CheckOutProductCard
