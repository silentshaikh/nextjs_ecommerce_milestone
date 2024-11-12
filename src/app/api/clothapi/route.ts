import { clothList } from "@/utils/Helper/helper";
import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json(clothList,{status:200});
};