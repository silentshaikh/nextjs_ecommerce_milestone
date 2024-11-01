'use client';
import { fashionDesign } from "@/utils/Helper/helper"
import FashionImg from "../FashionImg/FashionImg";

function FashionList() {
  return (
    <div className="flex justify-evenly items-center gap-3 flex-wrap">
      {fashionDesign.map((e,i) => {
        return (
            <FashionImg key={i} img={e.img} id={e.id} alignstyle={e.alignstyle}/>
        );
      })}
    </div>
  )
}

export default FashionList
