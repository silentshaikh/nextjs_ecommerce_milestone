import Image from 'next/image';
import Link from 'next/link';
function CartBox() {
  return (
    <Link href={'/cart'}>
    <div className='flex items-center '>
      <div className=' cursor-pointer w-[70px] h-[50px] bg-black text-white rounded-full  flex justify-center items-center max-[880px]:hidden'>
        <p>Cart</p>
      </div>
      <div className=' cursor-pointer w-[40px] h-[40px] rounded-full ring-8 ring-black flex justify-center items-center flex-col max-[380px]:ring-4 max-[350px]:size-[32px]'>
        <Image
        className='relative top-[7px]'
        src="/images/Vector (1).png"
        alt='cart'
        width={4}
        height={2}
        />
        <Image
        src="/images/Vector.png"
        alt='cart'
        width={14}
        height={13}
        />
      </div>
    </div>
    </Link>
  )
}

export default CartBox
