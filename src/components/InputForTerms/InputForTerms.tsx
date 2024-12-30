'use client';

import useClothContext from "@/Hooks/ClothContext/ClothContext";

function InputForTerms() {
  const {isChecked,onHandleCheck} = useClothContext();
  return (
    <>
     <input type="checkbox" name="" id="" checked={isChecked} onChange={onHandleCheck} /> 
    </>
  )
}

export default InputForTerms
