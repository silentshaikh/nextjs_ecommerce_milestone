import { ClothList } from "@/utils/Type/type";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const fetchCloth = await fetch(`${process.env.NEXT_PUBLIC_CLOTH_API}/api/clothapi`);
        const clthData:ClothList[] = await fetchCloth.json();
        const findWomenProduct = clthData.filter((e) => {
            return e.productcategory === 'women';
        }); 
        return NextResponse.json(findWomenProduct,{status:200});
    } catch (error) {
        return NextResponse.json(`${error}: failed to fetch men product detail`,{status:500});
    }
} 