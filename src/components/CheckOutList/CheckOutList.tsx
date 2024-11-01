import { headerCheckout } from "@/utils/Helper/helper"

function CheckOutList() {
  return (
    <ul className="flex gap-7 max-[410px]:gap-3 max-[320px]:gap-2">
      {headerCheckout.map((e) => {
        return(
            <li key={e.name} className="uppercase max-[360px]:text-sm max-[320px]:text-[13px]">{e.name}</li>
        );
      })}
    </ul>
  )
}

export default CheckOutList
