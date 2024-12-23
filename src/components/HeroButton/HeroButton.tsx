'use client';
import useClothContext from '@/Hooks/ClothContext/ClothContext'
import { HiArrowLongRight } from 'react-icons/hi2'

function HeroButton() {
  const {heroContent} = useClothContext()
  return (
    <>
     <button className='w-[265px] h-[40px] bg-[#D9D9D9] flex justify-evenly items-center gap-8 max-[1025px]:w-[180px] max-[400px]:h-[32px]'>{heroContent.herobutton} <HiArrowLongRight /></button> 
    </>
  )
}

export default HeroButton
