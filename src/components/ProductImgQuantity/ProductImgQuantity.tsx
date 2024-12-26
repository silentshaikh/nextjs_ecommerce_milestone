'use client';
import { FiMinus } from 'react-icons/fi'
import { GoPlus } from 'react-icons/go'
// {quan}:{quan:number}
function ProductImgQuantity() {

  return (
    <div className='flex gap-4 items-center  py-3  '>
      <button className='bg-[#F3F3F3] p-2'><FiMinus />
      </button>
      <h5>0</h5>
      <button className='bg-[#F3F3F3] p-2'><GoPlus />
      </button>
    </div>
  )
}

export default ProductImgQuantity
