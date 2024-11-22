import { Box } from '@mui/material';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper modules
import { Navigation } from 'swiper/modules';
import TransferIconComponent from '_lib/TransferIconComponent';
import { contactInterface } from '_interfaces';
import { contactData } from '_constants';

const carouselItems: contactInterface[] = contactData;

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
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          1100: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1400: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1800: {
            slidesPerView: 4,
            spaceBetween: 5,
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
