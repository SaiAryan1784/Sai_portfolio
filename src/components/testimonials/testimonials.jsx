import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar01.jpg'
import AVTR2 from '../../assets/avatar02.jpg'
import AVTR3 from '../../assets/avatar03.jpg'
import AVTR4 from '../../assets/avatar04.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'The Rock',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus facilis temporibus cumque provident ipsam soluta, tempora inventore repellat laborum quasi pariatur hic. Ipsum, molestias perspiciatis voluptatum eligendi provident sed temporibus corrupti beatae vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laboriosam ipsa itaque sequi quos eum voluptatum sunt iusto aperiam eius! Et odio ullam, tempora facere perspiciatis aliquam! Tempore, quidem facere.'
  },
  {
    avatar: AVTR2,
    name: 'The Mind Guy',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus facilis temporibus cumque provident ipsam soluta, tempora inventore repellat laborum quasi pariatur hic. Ipsum, molestias perspiciatis voluptatum eligendi provident sed temporibus corrupti beatae vitae.'
  },
  {
    avatar: AVTR3,
    name: 'The Stonks Guy',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus facilis temporibus cumque provident ipsam soluta, tempora inventore repellat laborum quasi pariatur hic. Ipsum, molestias perspiciatis voluptatum eligendi provident sed temporibus corrupti beatae vitae.'
  },
  {
    avatar: AVTR4,
    name: 'The Abe ***** Guy',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ducimus facilis temporibus cumque provident ipsam soluta, tempora inventore repellat laborum quasi pariatur hic. Ipsum, molestias perspiciatis voluptatum eligendi provident sed temporibus corrupti beatae vitae.'
  }
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients - Be the first one</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>

        {
          data.map(({avatar, name, review}, index)=>
          {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials