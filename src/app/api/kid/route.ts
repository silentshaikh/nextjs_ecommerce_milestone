import { kidProduct } from "@/utils/Helper/helper";
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json(kidProduct,{status:200});
};