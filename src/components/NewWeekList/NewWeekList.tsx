'use client';
import { homeList } from "@/utils/Helper/helper"
import Card from "../Card/Card"
import {poppins} from "@/utils/Helper/helper"
import NewWeekCard from "../NewWeekCard/NewWeekCard"
function NewWeekList() {
  return (
    <div className={`${poppins.className}  py-10 flex  justify-evenly items-center flex-wrap`}>
      {homeList.map((e,i) => {
        return(
            <NewWeekCard key={e.id ? e.id+i : ""}  name={e.name} img={e.img} size={e.size} color={e.color} imgList={e.imgList} id={e.id} category={e.category} price={e.price} />
        )
      })}
    </div>
  )
}

export default NewWeekList
