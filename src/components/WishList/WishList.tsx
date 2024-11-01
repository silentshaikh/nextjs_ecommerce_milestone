
import { FiHeart } from 'react-icons/fi'

function WishList() {
  return (
    <div className='cursor-pointer w-[50px] h-[50px] bg-black rounded-full text-white flex justify-center items-center max-[700px]:hidden'>
      <FiHeart className=' text-2xl -rotate-3'/>
    </div>
  )
}
export default WishList;
