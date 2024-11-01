import { rubikBuble } from "@/utils/Helper/helper"

function WeekHeading() {
  return (
    <>
     <h2 className={`${rubikBuble.className} text-6xl flex flex-col relative px-16 max-[450px]:text-4xl`}>NEW <span>THIS WEEK<sup className="text-2xl text-[#000E8A] absolute  top-10">(50)</sup></span>  </h2> 
    </>
  )
}

export default WeekHeading
