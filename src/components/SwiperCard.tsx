import React from 'react';

interface SwiperCardProps {
  imgSrc: string
  title: string
}
const SwiperCard = ({imgSrc, title}:SwiperCardProps) => {
  return (
    <>
      <img className='swiperImage'
        src={imgSrc}
        alt="10"
      />
      <h6>{title}</h6>
    </>
  );
}

export default SwiperCard;
