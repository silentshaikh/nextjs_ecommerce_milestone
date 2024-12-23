'use client';
import { ProductContentType } from '@/utils/Type/type';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { useRouter } from 'next/navigation';
import ProductCardSize from '../ProductCardSize/ProductCardSize';
function ProductImgContent({color,name,size,price}:ProductContentType) {
  const navigToCart = useRouter();
  const {colr,selectColr} = useClothContext()
  return (
    <div className='flex flex-col border-[#D9D9D9] border-2 p-5 max-[730px]:px-4 max-[300px]:p-3'>
      <h1 className='font-bold pb-5 max-[720px]:pb-3 max-[700px]:pb-5'>{name}</h1>
      <h2 className='font-bold pb-5 max-[720px]:pb-3 max-[700px]:pb-5'>${price}</h2>
      <h3 className='pb-8 max-[720px]:pb-4'>MRP incl. of all taxes</h3>
      <p className='w-80 font-bold text-sm pb-16 max-[950px]:pb-8 max-[950px]:w-64 max-[720px]:pb-4 max-[700px]:w-80 max-[700px]:pb-12 max-[380px]:pb-6 max-[380px]:w-64 max-[320px]:w-60 max-[300px]:w-52'>Relaxed-fit shirt. Camp collar and
short sleeves. Button-up front.
</p>
    <h4 className='font-bold'>Color:</h4>
        <div className='flex gap-1 pb-3'>
        {color.map((e) => {
            return(
                <button onClick={() => selectColr(e.hex)} key={e._key} style={{backgroundColor:`${e.hex}`}} className={`${colr === e.hex ? 'border-4 border-[#9b9a9a]': ''}  h-[50px] w-[50px] max-[870px]:size-[35px] max-[700px]:size-[45px] max-[380px]:size-[40px] max-[320px]:size-[35px] max-[300px]:size-[30px]`}></button>
            );
        })}
        </div>

        <h4 className='font-bold'>Size:</h4>
        <ProductCardSize productSize={size} />
        <button onClick={() => navigToCart.push('/cart')} className='uppercase bg-[#D9D9D9] mt-3 py-2 max-[380px]:w-[250px] max-[300px]:w-[220px]'>add to cart</button>
    </div>
  )
}

export default ProductImgContent
