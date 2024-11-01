'use client';
import { poppins,clothList, menProduct } from '@/utils/Helper/helper'
import NewWeekCard from '../NewWeekCard/NewWeekCard';
function CollectionList() {
   
  return (
    <div className={`${poppins.className} py-10 flex justify-evenly items-center flex-wrap`}>
      {menProduct.map((e,i) => {
        if(i>0 && i<4){
          return(
            <NewWeekCard key={e.id}  name={e.name} img={e.img} size={e.size} color={e.color} imgList={e.imgList} id={e.id} category={e.category} price={e.price} />
          );
        }
      })}
    </div>
  )
}
export default CollectionList;