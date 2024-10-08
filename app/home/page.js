"use client"

import { useEffect, useState } from "react"

import HeroBlock from "../components/common/HeroBlock"
import ImageGrid from "../components/common/ImageGrid"
import Loader from "../components/common/Loader"
import Error from "../components/common/Error"

import { fetchProjectsData } from "./api"

export default function Page() {
  const [imageGridData, setImageGridData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorState, setErrorState] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    fetchProjectsData()
      .then(response => {
        setImageGridData(response)
      })
      .catch(error => {
        setErrorState(true)
        setErrorMessage(error.message)
      })
      .finally(() => setIsLoading(false))
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (errorState) {
    return (
      <Error errorMessage={errorMessage} />
    )
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
    </div>
  );
}
