import { ClothList } from "@/utils/Type/type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest,{params}:{params:{id:string}}){
    try {
        const fetchKidProd = await fetch(`http://localhost:3000/api/kid`);
        const dataIntoJson:ClothList[] = await fetchKidProd.json();
        const findProductDetail:ClothList|undefined = dataIntoJson.find((e) => {
            return e.id === +params.id;
        });
        if(findProductDetail){
            return NextResponse.json(findProductDetail,{status:200});
        }else{
            return NextResponse.json('failed to fetch product detail',{status:500});
        }
    } catch (error) {
        return NextResponse.json('failed to fetch product detail',{status:500});
    }
}