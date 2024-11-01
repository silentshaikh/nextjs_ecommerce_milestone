import { workSans } from "@/utils/Helper/helper"
import CheckOutChild from "../CheckOutChild/CheckOutChild"
import CheckOutHeader from "../CheckOutHeader/CheckOutHeader"
import CheckOutHeading from "../CheckOutHeading/CheckOutHeading"


function CheckOutPage() {
  return (
    <section className={`${workSans.className} pt-40  bg-[#f3f3f3]`}>
        <CheckOutHeading/>
        <CheckOutHeader/>
      <CheckOutChild/>
    </section>
  )
}

export default CheckOutPage
