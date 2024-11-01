import WishList from '../WishList/WishList';
import SignUp from '../SignUp/SignUp';
import CartBox from '../CartBox/CartBox';
function CartSignUpBox() {
  return (
    <div className='flex gap-10 max-[460px]:gap-5 max-[380px]:gap-3 max-[334px]:relative max-[334px]:right-6'>
      <WishList/>
      <CartBox/>
      <SignUp/>
    </div>
  )
}

export default CartSignUpBox;
