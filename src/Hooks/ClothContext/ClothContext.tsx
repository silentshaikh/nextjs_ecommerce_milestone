'use client';
import { ClothAppContext } from '@/Context/Context';
import { useContext } from 'react';

function useClothContext() {
  const clothContext = useContext(ClothAppContext);
  if(!clothContext){
    throw new Error("useCustomHook must be used within a ClothContext.Provider");
  };
  return clothContext;
};
export default useClothContext;
