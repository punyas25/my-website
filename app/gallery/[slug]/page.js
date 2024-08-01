"use client"

import { useEffect, useState } from "react"

import Carousel from "../components/Carousel"
import ProjectInfo from "../components/ProjectInfo"
import Loader from "../../components/common/Loader"

import { fetchProjectData } from "../api"

export default function Page({ params }) {
  const { slug } = params

  const [projectData, setProjectData] = useState([])
  const [carouselData, setCarouselData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchProjectData(slug)
      .then(response => {
        setProjectData(response[0])
        setCarouselData(response[0].project_images)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => setIsLoading(false))
  }, [])


  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-slate-800 text-gray-300 p-5">
      <div className="prose hero-block flex flex-col w-3/6 my-20 mx-10 place-items-center text-center">
        <h1 className="text-gray-300 mb-2">{projectData.project_name}</h1>
      </div>
      <Carousel carouselData={carouselData} />
      <ProjectInfo projectData={projectData}
      />
    </div>
  );
}
