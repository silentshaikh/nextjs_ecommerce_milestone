'use client';
import { workSans } from '@/utils/Helper/helper';
import SideBarHeading from '../SideBarHeading/SideBarHeading';
import SideBarSize from '../SideBarSize/SideBarSize';
import SideAccordian from '../SideAccordian/SideAccordian';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
function SideBar() {
    const {sideBar} = useClothContext();

    return (
        <aside
            className={`${workSans.className} fixed top-[95px] 
            ${sideBar ? 'left-[-600px]' : ' left-0'}
            bg-white h-screen w-[320px] pt-16 px-4 
            max-[990px]:w-[300px] max-[910px]:w-[280px] 
            max-[840px]:w-[260px] max-[780px]:w-[240px] 
            max-[720px]:w-[220px] max-[655px]:w-[200px] 
            max-[420px]:w-[190px] max-[360px]:z-[5] 
            max-[360px]:w-[210px]`}>
            <SideBarHeading />
            <SideBarSize />
            <SideAccordian />
        </aside>
    );
};
export default SideBar;