import ProductWomen from "@/components/ProductWomen/ProductWomen"
import { ClothList } from "@/utils/Type/type";

const fetchWomenData = async (womenProduct:string) => {
  try {
    const fetchWomenProd = await fetch(womenProduct, { cache: 'force-cache' });
  const prodIntoJson:ClothList[] = await fetchWomenProd.json();
  return prodIntoJson;
  } catch (error) {
    console.log(error)
  }
}

async function Women() {
  const womenProduct:ClothList[]|undefined =await fetchWomenData(`http://localhost:3000/api/women`);
  return (
    <main>
      <ProductWomen womenProduct={womenProduct}/>
    </main>
  )
}

export default Women
