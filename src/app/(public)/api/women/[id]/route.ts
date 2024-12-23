import { ClothList } from "@/utils/Type/type";
import {  NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,{params}:{params:{id:string}}){
    try {
        const fetchProductWomen = await fetch(`${process.env.NEXT_PUBLIC_CLOTH_API}/api/women`);
    const dataIntoJson:ClothList[] = await fetchProductWomen.json();
    const getProductDetail = dataIntoJson.find((e) => {
        return e.productid === params.id;
    });
    if(getProductDetail){
        return NextResponse.json(getProductDetail,{status:200})
    }else{
        return NextResponse.json('failed to fetch product detail',{status:500});
    }
    } catch (error) {
        return NextResponse.json(`${error}: failed to fetch men product detail`,{status:500});
    }
    
};