import ProductMen from "@/components/ProductMen/ProductMen"
import { ClothList } from "@/utils/Type/type";

const fetchMenData = async (productApi:string) => {
  try {
    const fetchProduct = await fetch(productApi, { cache: 'force-cache' });
    const productIntoJson:ClothList[] = await fetchProduct.json();
    return productIntoJson;
  } catch (error) {
    console.log(error);
  }
}
async function Men() {
  const productMen:ClothList[] | undefined = await fetchMenData(`http://localhost:3000/api/men`);
  return (
    <main>
      <ProductMen productMen={productMen}/>
    </main>
  )
}

export default Men
