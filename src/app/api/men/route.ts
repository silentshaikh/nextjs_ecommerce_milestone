import { ClothList } from "@/utils/Type/type";
import { menProduct } from "@/utils/Helper/helper";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        const fetchCloth = await fetch(`http://localhost:3000/api/clothapi`);
        const clthData:ClothList[] = await fetchCloth.json();
        const findMenProduct = clthData.filter((e) => {
            return e.category === 'men';
        }); 
        return NextResponse.json(findMenProduct,{status:200});
    } catch (error) {
        return NextResponse.json({error:"Men Data not found"},{status:500});
    }
};