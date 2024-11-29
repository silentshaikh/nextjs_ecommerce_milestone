import { ClothList } from "@/utils/Type/type";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const fetchCloth = await fetch(`http://localhost:3000/api/clothapi`);
        const clthData:ClothList[] = await fetchCloth.json();
        const findKidProduct = clthData.filter((e) => {
            return e.category === 'kid';
        }); 
        return NextResponse.json(findKidProduct,{status:200});
    } catch (error) {
        return NextResponse.json({error:"Kid Data not found"},{status:500});
    }
};