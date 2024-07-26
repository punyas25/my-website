"use client"
import React, { useRef, useState } from "react"
import Image from "next/image"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectFade, Keyboard } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

import sampleImg from "../../../public/images/sample.jpg"
import sampleImg2 from "../../../public/images/sample2.jpg"
import sampleImg3 from "../../../public/images/sample3.jpg"

const data = [
	{
		image: sampleImg,
		title: "Image title",
	},
	{
		image: sampleImg2,
		title: "Image title",
	},
	{
		image: sampleImg3,
		title: "Image title",
	},
	{
		image: sampleImg2,
		title: "Image title",
	},
	{
		image: sampleImg,
		title: "Image title",
	},
	{
		image: sampleImg2,
		title: "Image title",
	},
	{
		image: sampleImg3,
		title: "Image title",
	},
]

const Carousel = () => {
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
          delay: 2500,
          disableOnInteraction: false,
        }}
				modules={[Autoplay, EffectFade, Keyboard, Navigation, Pagination]}
				className="project-swiper"
			>
				{data.map((x) => {
					return (
						<>
							<SwiperSlide>
								<Image
									className="rounded-xl w-full object-cover lg:h-[700px] h-96"
									src={x.image}
									alt={x.title}
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

