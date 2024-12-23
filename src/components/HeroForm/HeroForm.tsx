'use client';
import Image from 'next/image'
import HeroInput from '../HeroInput/HeroInput'
import useClothContext from '@/Hooks/ClothContext/ClothContext'

function HeroForm() {
  const {heroContent} = useClothContext();
  return (
    <form action="">
        <Image
        className='relative top-8 left-4'
        src={heroContent.inputimage}
        alt={heroContent.inputplaceholder}
        width={15}
        height={15}
        />
      <HeroInput/>
    </form>
  )
}

export default HeroForm
