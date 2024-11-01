'use client';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
function HeroContBtn() {
  const {setHeroSlide} = useClothContext();
  return (
    <>
     <div className='flex gap-2'>
        <button onClick={() => setHeroSlide(false)} className='size-[40px] ring-slate-500 ring-2 flex justify-center items-center max-[400px]:size-[30px]'><RiArrowLeftSLine  className='w-[30px] h-5 ' /></button>
        <button onClick={() => setHeroSlide(true)} className='size-[40px] ring-slate-500 ring-2 flex justify-center items-center max-[400px]:size-[30px]'><RiArrowRightSLine className='w-[30px] h-5 '  /></button>
        </div> 
    </>
  )
}

export default HeroContBtn;
