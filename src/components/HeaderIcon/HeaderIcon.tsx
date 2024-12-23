import useClothContext from '@/Hooks/ClothContext/ClothContext';
import Image from 'next/image';
function HeaderIcon() {
  const {navListToggle,headerContent} = useClothContext();
  return (
    <div className="cursor-pointer max-[360px]:w-[30px] max-[360px]:h-[20px] max-[334px]:relative left-9" onClick={navListToggle}>
      <Image
      src={headerContent.navtoggicon}
      alt={headerContent.titletoggicon}
      width={26}
      height={16}
      />
    </div>
  );
}

export default HeaderIcon
