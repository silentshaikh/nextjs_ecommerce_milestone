'use client';
import useClothContext from "@/Hooks/ClothContext/ClothContext";
function CollectTwo() {
  const {collectionContent} = useClothContext();
  return (
    <div className='max-[500px]:text-sm'>
      <h5>{collectionContent.collectsort}(&minus;)</h5>
      <p className='text-[#5E5E5E] text-sm max-[500px]:text-[10px]'>{collectionContent.lesstomore}</p>
      <p className='text-[#5E5E5E] text-sm max-[500px]:text-[10px]'>{collectionContent.moretoless}</p>
    </div>
  )
};
export default CollectTwo;