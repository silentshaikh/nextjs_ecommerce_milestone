import { TypeForCartCard } from '@/utils/Type/type'
import Image from 'next/image'
function CartCard({name,price,category,img}:TypeForCartCard) {
  return (
    <>
        <div  className='flex flex-col items-start'>
      <Image
      className='size-[320px] max-[620px]:size-[280px] max-[400px]:size-[250px] max-[320px]:w-[230px]'
      src={img}
      alt={name}
      width={305}
      height={313}
      />
      <h3 className='text-sm uppercase'>{category}</h3>
      <div className='font-bold flex flex-col  relative max-[320px]:text-sm' >
        <h4 >{name}</h4>
        <h4 className=' max-[350px]:left-52 max-[320px]:left-44'>{price}</h4>
      </div>
    </div>
    </>
  )
}

export default CartCard;
