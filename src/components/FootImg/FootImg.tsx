'use client';
// import useClothContext from '@/Hooks/ClothContext/ClothContext';
import Image from 'next/image'


function FootImg() {
  // const {footerContent} = useClothContext();
  return (
    <>
     <Image
     className='max-[700px]:size-[200px] max-[360px]:w-[150px] max-[300px]:w-[130px]'
     src='/images/Frame 275.png'
     alt="footer"
    width={400}
    height={300}
     /> 
    </>
  )
}

export default FootImg
