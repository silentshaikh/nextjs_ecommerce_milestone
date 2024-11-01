'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper React components
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/pagination';
 // Your custom styles

// Import required modules
import { Pagination } from 'swiper/modules';
import { heroList } from '@/utils/Helper/helper'; // Assuming the heroList is an array of slide data
import Image from 'next/image'; // Next.js Image component

export default function SwiperHero() {
  return (
    <Swiper
      slidesPerView={3} // Number of slides visible
      spaceBetween={30} // Space between slides
      pagination={{
        clickable: true,
      }} // Enable pagination
      modules={[Pagination]} // Add required Swiper modules
      className="mySwiper" // Custom class
    >
      {heroList.map((hero) => (
        <SwiperSlide key={hero.id}>
          <Image
            src={`/images/${hero.img}`} // Dynamically load images
            alt={`Hero ${hero.id}`} // Descriptive alt text
            height={300}
            width={366}
            className="slideImage" // Custom class for slide images
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
