import Image from "next/image"
import Link from "next/link"
import React from "react"

const imageUrl = process.env.NEXT_PUBLIC_STRAPI_IMG_URL

const ImageGrid = ({ gridData }) => {
  return (
    <div className="p-6 container mx-auto">
      <div className="md:grid lg:gap-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {gridData.map((x) => {
          return (
            <>
              <article
                key={x.project_slug}
                className="p-4 mb-6 transition duration-300 group transform hover:-translate-y-2 rounded-xl cursor-pointer"
              >
                <Link
                  href={x.external_link}
                  className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                />
                <div className="relative mb-4 rounded-2xl">
                  <Image
                    width={400}
                    height={400}
                    className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                    src={imageUrl + x.image_src.url}
                    alt={x.image_title}
                  />
                  <Link
                    className="flex justify-center items-center bg-orange-800 bg-opacity-20 absolute top-0 left-0 w-full h-full p-2 text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                    href={x.external_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {x.image_title}
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