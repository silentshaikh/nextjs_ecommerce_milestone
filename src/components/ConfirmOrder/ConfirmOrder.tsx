'use client';
import TermAndCond from '../TermAndCond/TermAndCond'
import OrderButton from '../OrderButton/OrderButton'
import useClothContext from '@/Hooks/ClothContext/ClothContext';

function ConfirmOrder() {
  const {onHandleTerms} = useClothContext();
  return (
    <form action='' onSubmit={onHandleTerms} className='flex flex-col items-center'>
        <TermAndCond />
        <OrderButton />
    </form>
  )
}

export default ConfirmOrder
