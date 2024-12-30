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
              <NewWeekCard key={e.productid} imageid={i} imagename={e.productimage} imagetitle={e.productname} producttype={e.producttype}  />
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
              <NewWeekCard key={e.productid} imageid={i} imagename={e.productimage} imagetitle={e.productname} producttype={e.producttype}  />
            );
          // }
        })}
      </div>
    )
  }
 
}
export default CollectionList;