
import { client } from "@/sanity/lib/client";
import { ClothList } from "@/utils/Type/type";
// import { access, mkdir, readFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
// import path from "path";

// const clothJsonFIlePath = path.join(process.cwd(),'src','data','clothList.json');

// async function ensureFileExist(){
//     try {
//         // Ensure directory exists
//         await mkdir(path.dirname(clothJsonFIlePath),{recursive:true});
//         // Check if file exists
//         await access(clothJsonFIlePath)
//       } catch (error) {
//         //Create an empty json file
//         alert('New File create')
//         await writeFile(clothJsonFIlePath,JSON.stringify([]));
//       }
// };

// async function readClothFile(){
//     await ensureFileExist();
//   const readData = await readFile(clothJsonFIlePath,'utf-8')
//   return JSON.parse(readData);
// }
export async function GET(){
   try {
    // const clothList:ClothList[] = await readClothFile();
    const clothList:ClothList[]  = await client.fetch(`
      *[_type == "productcardcontent"]{
  productprice,
    productname,
    "productid":productid.current,
    productsizes,
    producttype,
    productcategory,
    productquantity,
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
    
}

`)
    return NextResponse.json(clothList,{status:200});
   } catch (error) {
    return NextResponse.json(`${error}: failed to fetch men product detail`,{status:500});
   }
};




