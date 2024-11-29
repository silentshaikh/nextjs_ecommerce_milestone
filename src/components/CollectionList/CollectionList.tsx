'use client';
import { poppins } from '@/utils/Helper/helper'
import NewWeekCard from '../NewWeekCard/NewWeekCard';
import useClothContext from '@/Hooks/ClothContext/ClothContext';
function CollectionList() {
   const {collection,backUpCollection} = useClothContext();
  //  console.log(collection)
  if(collection.length === 0){
    return(
      <div className={`${poppins.className} py-10 flex justify-evenly items-center flex-wrap`}>
        {backUpCollection.map((e,i) => {
          // if(i>0 && i<5){
            return(
              <NewWeekCard key={e.id}  name={e.name} img={e.img} size={e.size} color={e.color} imgList={e.imgList} id={e.id} category={e.category} price={e.price} isAvailable={e.isAvailable} type={e.type} />
            );
          // }
        })}
      </div>
    );
  }else{
    return (
      <div className={`${poppins.className} py-10 flex justify-evenly items-center flex-wrap`}>
        {collection.map((e,i) => {
          // if(i>0 && i<5){
            return(
              <NewWeekCard key={e.id}  name={e.name} img={e.img} size={e.size} color={e.color} imgList={e.imgList} id={e.id} category={e.category} price={e.price} isAvailable={e.isAvailable} type={e.type} />
            );
          // }
        })}
      </div>
    )
  }
}
export default CollectionList;