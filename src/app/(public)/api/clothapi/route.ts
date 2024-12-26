
import { client } from "@/sanity/lib/client";
import { ClothList } from "@/utils/Type/type";
import {NextResponse } from "next/server";

export async function GET(){
   try {
    const clothList:ClothList[]  = await client.fetch(`
      *[_type == "productcardcontent"]{
  productprice,
    productname,
    "productid":productid.current,
    productsizes,
    producttype,
    productcategory,
    "productimage":productimage.asset->url,
      productimagelist[]{
        imageid,
        "productimage":productimage.asset->url,
      },
     productavaiableornot,
    productcolors[]{
    hex,
      _key
    }
    
}`)
    return NextResponse.json(clothList,{status:200});
   } catch (error) {
    return NextResponse.json(`${error}: failed to fetch men product detail`,{status:500});
   }
};




