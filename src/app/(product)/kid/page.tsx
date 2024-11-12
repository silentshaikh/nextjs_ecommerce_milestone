import ProductKid from "@/components/ProductKid/ProductKid";
import { ClothList } from "@/utils/Type/type";
const fetchKidData =async (kidProduct:string) => {
  try {
    const fetchKidProd = await fetch(kidProduct, { cache: 'force-cache' })
    const kidIntoJson = await fetchKidProd.json();
    return kidIntoJson;
  } catch (error) {
    console.log(error);
  }
}
async function Kid() {
  const kidProduct:ClothList[]|undefined = await fetchKidData(`http://localhost:3000/api/kid`);
  return (
    <main>
      <ProductKid productKid={kidProduct}/>
    </main>
  )
};
export default Kid;