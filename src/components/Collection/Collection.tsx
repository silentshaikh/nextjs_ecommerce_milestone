import { workSans } from "@/utils/Helper/helper";
import CollectionHeading from "../CollectionHeading/CollectionHeading";
import CollectionHeader from "../CollectionHeader/CollectionHeader";
import CollectionList from "../CollectionList/CollectionList";
function Collection() {
  return (
    <section className={`${workSans.className} bg-[#f3f3f3] p-10 `}>
      <CollectionHeading/>
      <CollectionHeader/>
      <CollectionList/>
    </section>
  )
}

export default Collection
