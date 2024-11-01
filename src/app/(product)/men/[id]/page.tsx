import { MenDetailProps } from "@/utils/Type/type";
import ProductCart from "@/components/ProductCart/ProductCart";
function MenDetail({params}:MenDetailProps) {
  let {id} = params;
  if (!id) {
    return <div className="pt-32">Product ID not found</div>; // Error handling in case ID is missing
  }
  return (
    <>
     <ProductCart productId={id} />
    </>
  )
}

export default MenDetail;