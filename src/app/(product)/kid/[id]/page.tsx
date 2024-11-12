import ProductCart from '@/components/ProductCart/ProductCart';
import { MenDetailProps } from '@/utils/Type/type';
const fetchProductDetail = async (kidDetail:string) => {
  try {
    const fetchKidDetail = await fetch(kidDetail,{ cache: 'force-cache' })
    const detailIntoJson = await fetchKidDetail.json();
    return detailIntoJson;
  } catch (error) {
    console.log(error)
  }
}
async function KodDetail({params}:MenDetailProps) {
    let {id} = params;
    const kidProductDetail = await fetchProductDetail(`http://localhost:3000/api/kid/${id}`);
    if (!id) {
        return <div className="pt-32">Product ID not found</div>; // Error handling in case ID is missing
      }
      return (
        <>
         <ProductCart productId={id} productDetail={kidProductDetail}/>
        </>
      )
}

export default KodDetail
