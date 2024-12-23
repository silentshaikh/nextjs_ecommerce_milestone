'use client';
// import { fashionDesign } from "@/utils/Helper/helper"
import FashionImg from "../FashionImg/FashionImg";
import useClothContext from "@/Hooks/ClothContext/ClothContext";

function FashionList() {
  const {fashionContent} = useClothContext();
  return (
    <div className="flex justify-evenly items-center gap-3 flex-wrap">
      {fashionContent.fashionimglist.map((e) => {
        return (
            <FashionImg key={e.imageid} imagename={e.imagename} imageid={e.imageid} imagetitle={e.imagetitle} />
        );
      })}
    </div>
  )
}

export default FashionList
