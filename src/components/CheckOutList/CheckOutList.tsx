import { headerCheckout } from "@/utils/Helper/helper"

function CheckOutList() {
  return (
    <ul className="flex gap-7 max-[410px]:gap-3 max-[320px]:gap-2 max-[270px]:flex-col max-[270px]:items-center max-[270px]:w-[100%]">
      {headerCheckout.map((e) => {
        return(
            <li key={e.name} className="uppercase max-[360px]:text-sm max-[320px]:text-[13px] max-[300px]:text-[12px] ">{e.name}</li>
        );
      })}
    </ul>
  )
}

export default CheckOutList
