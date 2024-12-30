
import useClothContext from "@/Hooks/ClothContext/ClothContext";
import { rubikBuble } from "@/utils/Helper/helper";
// import { navList } from "@/utils/Helper/helper"
import Link from "next/link"
function NavList() {
  const {list,navListToggle,headerContent} = useClothContext();
  return (
    <ul className={`navlist  ${rubikBuble.className} z-10 flex gap-5 max-[780px]:px-10 max-[780px]:py-3 max-[780px]:flex-col max-[780px]:relative max-[780px]:top-24 ${list ? 'max-[780px]:left-0' : 'max-[780px]:-left-96'} max-[780px]:transition-all max-[780px]:duration-1000`}>
      {headerContent.navlist.map((e) => {
        return <li key={e.itemid} className="capitalize  font-semibold text-2xl" onClick={navListToggle}> <Link href={e.itemlink}>{e.listitem}</Link> </li>
      })}
    </ul>
  );
};
export default NavList;