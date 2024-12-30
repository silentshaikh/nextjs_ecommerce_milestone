'use client';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import Image from 'next/image';
import Link from 'next/link';
function CartBox() {
  const {headerContent,cartData} = useClothContext()
  return (
    <Link href={'/cart'}>
    <div className='flex items-center '>
      <div className=' cursor-pointer w-[70px] h-[50px] bg-black text-white rounded-full  flex justify-center items-center max-[880px]:hidden'>
        <p>{headerContent.cartname}</p>
      </div>
      <div className=' cursor-pointer w-[40px] h-[40px] rounded-full ring-8 ring-black flex justify-center items-center flex-col max-[380px]:ring-4 max-[350px]:size-[32px]'>
        <Image
        className='relative top-[7px]'
        src={headerContent.cartimgtwo}
        alt={headerContent.cartname}
        width={4}
        height={2}
        />
        <Image
       src={headerContent.cartimgone}
       alt={headerContent.cartname}
        width={14}
        height={13}
        />
      </div>
      <h5 className='relative bottom-6 bg-[#D9D9D9] px-1 rounded-full text-white font-bold'>{cartData.totalQuantity}</h5>
    </div>
    </Link>
  )
}

export default CartBox
