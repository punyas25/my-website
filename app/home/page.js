"use client"

import { useEffect, useState } from "react"

import HeroBlock from "../components/common/HeroBlock"
import ImageGrid from "../components/common/ImageGrid"
import Loader from "../components/common/Loader"

import { fetchProjectsData } from "./api"

export default function Page() {
  const [imageGridData, setImageGridData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // Add error state as well

  useEffect(() => {
    fetchProjectsData()
      .then(response => {
        setImageGridData(response)
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
      <HeroBlock
        title="Quis eleifend quam adipiscing vitae proin sagittis."
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        link="/contact"
        linkText="Contact Me"
      />
      <ImageGrid gridData={imageGridData} />
      <div>
        <p>Credits for icon/assets used</p>
        <a href="https://www.flaticon.com/free-icons/tangerine" title="tangerine icons">Tangerine icons created by Freepik - Flaticon</a>
      </div>
      <div>
        <a href="https://iconscout.com/icons/looding" class="text-underline font-size-sm" target="_blank">Loading</a> by <a href="https://iconscout.com/contributors/zkyicon" class="text-underline font-size-sm" target="_blank">Zky Icon</a>
      </div>
      <div>
        <a href="https://iconscout.com/icons/error" class="text-underline font-size-sm" target="_blank">Error</a> by <a href="https://iconscout.com/contributors/elegant-themes" class="text-underline font-size-sm" target="_blank">Elegant Themes</a>
      </div>
    </div>
  );
}
