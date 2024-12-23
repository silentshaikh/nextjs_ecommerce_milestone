'use client';
import useClothContext from '@/Hooks/ClothContext/ClothContext'


function TextForTerms() {
  const {cartContent} = useClothContext();
  return (
    <p className='text-sm '>
       {cartContent.terms}
    </p>
  )
}

export default TextForTerms
