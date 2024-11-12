import { ClothList, MenDetailProps } from "@/utils/Type/type";
import ProductCart from "@/components/ProductCart/ProductCart";
const fetchWomenDetail = async (womenDetail:string) => {
  try {
    const fetchWomenDetail = await fetch(womenDetail,{ cache: 'force-cache' });
    const detailIntoJson:ClothList = await fetchWomenDetail.json();
    return detailIntoJson;
  } catch (error) {
    console.log(error)
  }
}
async function WomenDetail({params}:MenDetailProps) {
  let {id} = params;
  const womenDetail = await fetchWomenDetail(`http://localhost:3000/api/women/${id}`);
  if (!id) {
    return <div className="pt-32">Product ID not found</div>; // Error handling in case ID is missing
  }
  return (
    <>
     <ProductCart productId={id} productDetail={womenDetail}/>
    </>
  )
};
export default WomenDetail;