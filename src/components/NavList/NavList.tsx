
import useClothContext from "@/Hooks/ClothContext/ClothContext";
import { navList } from "@/utils/Helper/helper"
import Link from "next/link"
function NavList() {
  const {list,navListToggle} = useClothContext();
  return (
    <ul className={`navlist z-10 flex gap-5 max-[780px]:px-10 max-[780px]:py-3 max-[780px]:flex-col max-[780px]:relative max-[780px]:top-24 ${list ? 'max-[780px]:left-0' : 'max-[780px]:-left-96'} max-[780px]:transition-all max-[780px]:duration-1000`}>
      {navList.map((e) => {
        return <li key={e.name} className="capitalize font-semibold" onClick={navListToggle}> <Link href={e.link}>{e.name}</Link> </li>
      })}
    </ul>
  );
};
export default NavList;