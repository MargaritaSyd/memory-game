import { Navigation, Pagination, EffectCoverflow, Mousewheel } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import SwiperCard from './SwiperCard';

const lightBulb = require('../img/light-bulb.jpg')
const ticTacToe = require('../img/tic-tac-toe.png')
const pokemon = require('../img/pokemon.png')

const SwiperComponent = () => {
  return (
    <Swiper
      className="swiper-style"
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      slidesPerView={3}
      // modules={[Navigation, EffectCoverflow, Pagination, Mousewheel]}
      modules={[EffectCoverflow, Pagination, Mousewheel]}
      simulateTouch
      // navigation
      slideToClickedSlide
      centeredSlides
      mousewheel={{
        forceToAxis: true,
      }}
    >
      <SwiperSlide className='swiperSlide'>
        <SwiperCard
          imgSrc={lightBulb}
          title='Memory'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperCard
          imgSrc={ticTacToe}
          title='Tic Tac Toe'
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperCard
          imgSrc={pokemon}
          title='Pokemon'
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent