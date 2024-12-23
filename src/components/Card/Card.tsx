'use client';
import { ClothList } from '@/utils/Type/type';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
function Card({productimage,productname,productcategory,productid}:ClothList) {
  const navigToDetail = useRouter();
  return (
    <div onClick={() => navigToDetail.push(`/${productcategory}/${productid}`)}  className='cursor-pointer py-10 flex flex-col items-start max-[860px]:py-5 max-[360px]:py-2'>
      <Image
      className='size-[350px] max-[1080px]:size-[320px] max-[969px]:w-[300px] max-[910px]:w-[280px] max-[860px]:size-[270px] max-[820px]:size-[250px] max-[760px]:size-[230px] max-[700px]:size-[210px] max-[630px]:size-[300px] max-[515px]:size-[280px] max-[500px]:size-[260px] max-[480px]:size-[240px] max-[450px]:size-[220px] max-[440px]:size-[200px] max-[400px]:size-[180px] max-[380px]:size-[160px] max-[360px]:size-[140px] max-[300px]:size-[250px]'
      src={productimage}
      alt={productname}
      width={305}
      height={313}
      />
      <h3 className='text-sm uppercase max-[760px]:text-[10px]'>{productcategory}</h3>
      <div className='font-bold max-[1080px]:text-sm '>
        <h4 className=' max-[960px]:text-[13px] max-[890px]:text-[12px] max-[820px]:text-[11px] max-[760px]:text-[10px] max-[700px]:text-[9px] max-[630px]:text-[12px] max-[500px]:text-[11px] max-[480px]:text-[10px] max-[440px]:text-[9px] max-[400px]:w-[180px] max-[380px]:w-[160px] max-[360px]:w-[140px] max-[300px]:w-[250px]'>{productname}</h4>
      </div>
    </div>
  );
};
export default Card;