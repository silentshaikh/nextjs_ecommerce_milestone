import { menProduct } from "@/utils/Helper/helper";
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json(menProduct,{status:200});
};