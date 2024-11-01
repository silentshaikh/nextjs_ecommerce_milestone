import { rubikBuble } from "@/utils/Helper/helper"
function HeroContext() {
  return (
    <div>
      <h1 className={`${rubikBuble.className} text-6xl font-extrabold w-[338px] max-[400px]:w-[300px] max-[320px]:w-[250px] max-[300px]:text-5xl`}>NEW COLLECTION</h1>
      <h3 className='w-[87px] h-[48px] py-2 max-[830px]:mb-10'>Summer 2024</h3>
    </div>
  )
}

export default HeroContext
