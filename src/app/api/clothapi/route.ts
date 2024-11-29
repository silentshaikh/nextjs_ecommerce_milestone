import { clothList } from "@/utils/Helper/helper";
import { ClothList } from "@/utils/Type/type";
import { access, mkdir, readFile, writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import path from "path";

const clothJsonFIlePath = path.join(process.cwd(),'src','data','clothList.json');

async function ensureFileExist(){
    try {
        // Ensure directory exists
        await mkdir(path.dirname(clothJsonFIlePath),{recursive:true});
        // Check if file exists
        await access(clothJsonFIlePath)
      } catch (error) {
        //Create an empty json file
        alert('New File create')
        await writeFile(clothJsonFIlePath,JSON.stringify([]));
      }
};

async function readClothFile(){
    await ensureFileExist();
  const readData = await readFile(clothJsonFIlePath,'utf-8')
  return JSON.parse(readData);
}
export async function GET(){
   try {
    const clothList:ClothList[] = await readClothFile();
    return NextResponse.json(clothList,{status:200});
   } catch (error) {
    return NextResponse.json({error:"Server Down"},{status:500});
   }
};