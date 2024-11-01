"use client";
import useClothContext from '@/Hooks/ClothContext/ClothContext';
import { heroList } from '@/utils/Helper/helper';
import Image from 'next/image';
import React from 'react';

function HeroImages() {
  const { heroSlide } = useClothContext();
  
  return (
    <div className='flex gap-5 max-[830px]:justify-evenly  w-[630px] overflow-hidden max-[1025px]:w-[550px] max-[910px]:w-[490px] max-[520px]:w-[400px] max-[520px]:gap-2 max-[444px]:w-[375px] max-[400px]:w-[320px] max-[340px]:w-[260px] max-[280px]:w-[250px] max-[280px]:gap-1'>
      {heroList.map((e, i) => {
        return (
          <Image
            key={i}
            className={`size-[300px] transform transition-transform duration-500 ease-in-out ${heroSlide ? "-translate-x-[315px] max-[1025px]:-translate-x-[270px] max-[910px]:-translate-x-[240px] max-[520px]:-translate-x-[220px] max-[444px]:-translate-x-[185px] max-[400px]:-translate-x-[155px] max-[340px]:-translate-x-[125px]" : "-translate-x-[0px]"} max-[1300px]:size-[300px]  max-[1025px]:size-[260px] max-[910px]:size-[230px] max-[520px]:size-[200px] max-[444px]:size-[180px] max-[400px]:size-[150px] max-[340px]:size-[120px]`}
            src={`/images/${e.img}`}
            alt={`${e.id + i}`}
            height={300}
            width={366}
          />
        );
      })}
    </div>
  );
};

export default HeroImages;
