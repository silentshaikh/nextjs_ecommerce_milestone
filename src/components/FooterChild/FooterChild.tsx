'use client';
import FooterList from '../FooterList/FooterList';
import FootChild from '../FootChild/FootChild';
import { workSans } from '@/utils/Helper/helper';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
function FooterChild() {
  return (
    <footer  className={`${workSans.className} flex justify-evenly py-10 bg-[#f3f3f3] border-t-2 max-[700px]:gap-15 max-[410px]:text-[12px]`}>
    <FooterList/>
    <FootChild/>
  </footer>
  )
}

export default FooterChild
