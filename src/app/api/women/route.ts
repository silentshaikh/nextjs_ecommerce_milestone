import { womenProduct } from "@/utils/Helper/helper";
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json(womenProduct,{status:200})
} 