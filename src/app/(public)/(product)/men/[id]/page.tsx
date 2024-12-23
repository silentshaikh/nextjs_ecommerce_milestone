import { ClothList, MenDetailProps } from "@/utils/Type/type";
import ProductCart from "@/components/ProductCart/ProductCart";

const fetchProductDetail =async (detail:string) => {
  try {
    const fetchDetail = await fetch(detail,{ cache: 'force-cache' });
  const detailIntoJson:ClothList = await fetchDetail.json();
  return detailIntoJson;
  } catch (error) {
    console.log(error)
  }
}
async function MenDetail({params}:MenDetailProps) {
  const {id} = params;
  const menProductDetail = await fetchProductDetail(`http://localhost:3000/api/men/${id}`)

  if (!id) {
    return <div className="pt-32">Product ID not found</div>; // Error handling in case ID is missing
  }
  return (
    <>
     <ProductCart productId={id} productDetail={menProductDetail}/>
    </>
  )
};
export default MenDetail;