"use client"
import React, { useRef, useState } from "react"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectFade, Keyboard } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const imageUrl = process.env.NEXT_PUBLIC_STRAPI_IMG_URL

const Carousel = ({ carouselData }) => {
  return (
    <div className="w-5/6 mb-20">
      <Swiper
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[Autoplay, EffectFade, Keyboard, Navigation, Pagination]}
        className="project-swiper"
      >
        {carouselData.map((x) => {
          return (
            <>
              <SwiperSlide key={x.image_title}>
                <Image
                  className="rounded-xl w-full object-contain lg:h-[700px] h-96"
                  src={imageUrl + x.image_src.url}
                  alt={x.image_title}
                  width={400}
                  height={400}
                />
              </SwiperSlide>
            </>
          )
        })}
      </Swiper>
    </div>
  )
}

export default Carousel

