// src/components/MultiItemCarousel.jsx

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper modules
import { Navigation } from 'swiper/modules';
import TransferIconComponent from '_lib/TransferIconComponent';

const carouselItems = [
  {
    icon: 'livia',
    name: 'Livia Bator',
    role: 'CEO',
  },
  {
    icon: 'randy',
    name: 'Randy Press',
    role: 'Director',
  },
  {
    icon: 'workman1',
    name: 'Workman',
    role: 'Designer',
  },
  {
    icon: 'workman2',
    name: 'Workman',
    role: 'Designer',
  },
  {
    icon: 'workman3',
    name: 'Workman',
    role: 'Designer',
  },
  // Add more items as needed
];

const MultiItemCarousel = () => {
  return (
    <Box sx={{ width: '100%', padding: 2 }}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        loop={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {carouselItems.map((item, index) => (
          <SwiperSlide key={index}>
            <TransferIconComponent item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default MultiItemCarousel;
