import Link from "next/link"
import React from "react"

const imageUrl = process.env.NEXT_PUBLIC_STRAPI_IMG_URL

const GalleryGrid = ({ gridData }) => {
  return (
    <div className="p-6 container mx-auto">
      <div className="md:grid lg:gap-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {gridData.map((x) => {
          return (
            <article
              key={x.project_slug}
              className="p-4 mb-6 transition duration-300 group rounded-xl cursor-pointer"
            >
              <Link
                style={{ backgroundImage: `url(${imageUrl + x.cover_image.url})` }}
                className='bg-cover relative flex flex-col justify-center mb-4 rounded-2xl min-w-64 min-h-64 prose'
                href={`gallery/${x.project_slug}`}
                key={x.project_slug}
              >
                <div className="p-5 z-10">
                  <h2 className="text-gray-200">{x.project_name}</h2>
                  {/* <p className="text-gray-200">{x.project_description[0].children[0].text}</p> */}
                </div>
                <div
                  className="p-6 absolute w-full h-full rounded-2xl transition-all transform translate-y-8 opacity-0 bg-orange-800 group-hover:opacity-40 group-hover:-translate-y-0"
                >
                </div>
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default GalleryGrid