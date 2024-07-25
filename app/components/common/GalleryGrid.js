import Link from "next/link"
import React from "react"

const imgUrl = "https://i.etsystatic.com/30972341/r/il/50bbb0/3733725846/il_570xN.3733725846_9t2s.jpg"

const GalleryGrid = () => {
  const data = [
    {
      link: "add link here",
      image: imgUrl,
      projectName: "Image projectName 1",
      projectDesc: `you can add text with html tag <b>like this  </b>`,
    },
    {
      link: "add link here",
      image: imgUrl,
      projectName: "Image projectName 2",
      projectDesc: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: imgUrl,
      projectName: "Image projectName",
      projectDesc: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: imgUrl,
      projectName: "Image projectName",
      projectDesc: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: imgUrl,
      projectName: "Image projectName",
      projectDesc: `you can add text with html tag <b>like this   </b>`,
    },
    {
      link: "add link here",
      image: imgUrl,
      projectName: "Image projectName",
      projectDesc: `you can add text with html tag <b>like this   </b>`,
    },
  ]

  return (
    <div className="p-6 container mx-auto">
      <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {data.map((x) => {
          return (
            <>
              <article
                key={x.projectDesc}
                className="p-6 mb-6 transition duration-300 group rounded-xl cursor-pointer"
              >
                <Link
                  style={{ backgroundImage: `url(${x.image})` }}
                  className='bg-cover relative flex flex-col justify-center mb-4 rounded-2xl min-w-64 min-h-64 prose'
                  href={x.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-5 z-10">
                    <h2 className="text-gray-200">{x.projectName}</h2>
                    <p className="text-gray-200">{x.projectDesc}</p>
                  </div>
                  <div
                    className="p-6 absolute w-full h-full rounded-2xl transition-all transform translate-y-8 opacity-0 bg-orange-800 group-hover:opacity-40 group-hover:-translate-y-0"
                  >
                  </div>
                </Link>
              </article>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default GalleryGrid