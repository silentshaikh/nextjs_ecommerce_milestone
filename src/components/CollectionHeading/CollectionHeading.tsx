'use client';
import useClothContext from "@/Hooks/ClothContext/ClothContext";
import { rubikBuble } from "@/utils/Helper/helper";

function CollectionHeading() {
  const {collectionContent} = useClothContext();
  return (
    <>
     <h3 className={`${rubikBuble.className} text-6xl w-[334px] px-16 pb-12 max-[600px]:text-4xl max-[425px]:w-[270px] max-[320px]:w-[250px] max-[320px]:text-3xl max-[290px]:w-[230px]`}>{collectionContent.collectionheading}</h3> 
    </>
  )
}

export default CollectionHeading
