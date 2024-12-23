'use client';
import Image from 'next/image';
import { ProductImages } from '@/utils/Type/type'
import useClothContext from '@/Hooks/ClothContext/ClothContext';

function ProductImg({img,name,imgList}:ProductImages) {
  const {imgChange,images} = useClothContext()
  return (
    <div className='flex item-center gap-5 max-[720px]:gap-3 max-[450px]:gap-2 max-[410px]:gap-1'>
      
      <Image
      className='h-[500px] max-[950px]:h-[400px] max-[950px]:w-[350px] max-[800px]:w-[300px] max-[800px]:h-[350px] max-[720px]:w-[280px] max-[700px]:size-[400px] max-[520px]:size-[350px] max-[450px]:size-[320px] max-[410px]:size-[300px] max-[380px]:size-[280px] max-[350px]:size-[250px] max-[320px]:size-[230px] max-[300px]:size-[210px]'
      src={images !== null ? imgList[images].productimage : img}
      alt={name}
      height={200}
    width={400}
      />
      <div className='flex flex-col gap-3'>
        {imgList.map((e,i) => {
            return(
                <Image key={i}
                  onClick={() => imgChange(i)}
                className='cursor-pointer h-[110px] max-[950px]:size-[80px] max-[800px]:size-[70px] max-[720px]:size-[65px] max-[700px]:size-[90px] max-[520px]:size-[70px] max-[450px]:size-[65px] max-[410px]:size-[60px] max-[380px]:size-[55px] max-[350px]:size-[50px] max-[320px]:size-[45px] max-[300px]:size-[40px]'
                 src={e.productimage}
                 alt={name}
                 height={50}
                 width={100}
                 />
            );
        })}
      </div>
    </div>
  )
}

export default ProductImg
