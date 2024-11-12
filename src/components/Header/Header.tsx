import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import CartSignUpBox from '../CartSignUpBox/CartSignUpBox';
import { workSans } from '@/utils/Helper/helper';
import HeaderContext from '../HeaderContext/HeaderContext';
function Header() {
  return (
    <header className={` ${workSans.className} border h-24 fixed top-0 right-0 left-0 z-10 bg-[#f3f3f3] flex justify-between items-center py-5 px-10 max-[780px]:justify-evenly max-[460px]:px-1 max-[380px]:px-4 max-[360px]:px-2`}>
    {/* <Navbar/> */}
    <HeaderContext/>
    <Logo/>
    <CartSignUpBox/>

    </header>
  )
}

export default Header
