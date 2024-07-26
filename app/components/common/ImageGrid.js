import Image from "next/image"
import Link from "next/link"
import React from "react"

import sampleImg from "../../../public/images/sample.jpg"

const ImageGrid = () => {
  const data = [
    {
      link: "add link here",
      image: sampleImg,
      title: "Image title",
      comment: `you can add text with html tag <b>like this  </b>`,
    },
    {
      link: "add link here",
      image: sampleImg,
      title: "Image title",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: sampleImg,
      title: "Image title",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: sampleImg,
      title: "Image title",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: sampleImg,
      title: "Image title",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: sampleImg,
      title: "Image title",
      comment: `you can add text with html tag <b>like this   </b>`,
    },
  ]

  return (
    <div className="p-6 container mx-auto">
      <div className="md:grid lg:gap-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {data.map((x) => {
          return (
            <>
              <article
                key={x.comment}
                className="p-4 mb-6 transition duration-300 group transform hover:-translate-y-2 rounded-xl cursor-pointer"
              >
                <Link
                  href={x.link}
                  className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                />
                <div className="relative mb-4 rounded-2xl">
                  <Image
                    width={400}
                    height={400}
                    className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                    src={x.image}
                    alt=""
                  />
                  <Link
                    className="flex justify-center items-center bg-orange-800 bg-opacity-20 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                    href={x.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {x.title}
                  </Link>
                </div>
              </article>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default ImageGrid