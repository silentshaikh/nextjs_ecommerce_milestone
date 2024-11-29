import { ClothList } from "@/utils/Type/type";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest,{params}:{params:{id:string}}){
    try {
        const fetchProductWomen = await fetch(`http://localhost:3000/api/women`);
    const dataIntoJson:ClothList[] = await fetchProductWomen.json();
    const getProductDetail = dataIntoJson.find((e) => {
        return e.id === +params.id;
    });
    if(getProductDetail){
        return NextResponse.json(getProductDetail,{status:200})
    }else{
        return NextResponse.json('failed to fetch product detail',{status:500});
    }
    } catch (error) {
        return NextResponse.json('failed to fetch product detail',{status:500});
    }
    
};