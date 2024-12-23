'use client';
// import { homeList } from "@/utils/Helper/helper"
import {poppins} from "@/utils/Helper/helper"
import NewWeekCard from "../NewWeekCard/NewWeekCard"
import useClothContext from "@/Hooks/ClothContext/ClothContext";
function NewWeekList() {
  const {weekContent} = useClothContext();
  return (
    <div className={`${poppins.className}  py-10 flex  justify-evenly items-center flex-wrap`}>
      {weekContent.weekimglist.map((e) => {
        return(
            <NewWeekCard key={e.imageid} imageid={e.imageid} imagename={e.imagename} imagetitle={e.imagetitle} producttype={e.producttype} />
        )
      })}
    </div>
  )
}

export default NewWeekList
