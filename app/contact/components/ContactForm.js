"use client"

import React, { useState, useEffect } from "react"

import Loader from "../../components/common/Loader"
import Error from "../../components/common/Error"

import { saveSubmission } from "../api"

const ContactForm = () => {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorState, setErrorState] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const onSubmit = (formData) => {
    let incomingData = {}
    for (const [key, value] of formData) {
      incomingData[key] = value
    }
    setData(incomingData)
    setIsLoading(true)
  }

  useEffect(() => {
    if (Object.keys(data).length) {
      saveSubmission(data)
        .then(response => {
          console.log(response);
          setSubmitSuccess(true)
          setIsLoading(false)
        })
        .catch(error => {
          setErrorState(true)
          setErrorMessage(error.message)
        })
      .finally(() => setIsLoading(false))
    }
  }, [data])


  if (isLoading) {
    return <Loader />
  }

  if (errorState) {
    return (
      <Error errorMessage={errorMessage} />
    )
  }

  if (submitSuccess) {
    return (
      <div className="w-4/6 my-10 prose text-center " >
        <h2 className="text-gray-300 mb-6">Your message has been submitted successfully</h2>
        <p className="text-gray-300"> I will get back to you soon</p>
      </div>
    )
  }

  return (
    <form className="w-4/6 my-10" action={onSubmit}>
      <div className="pb-12">
        <div className="prose">
          <h1 className="text-gray-300 mb-2">Contact</h1>
          <p className="mt-1 text-sm leading-6 text-gray-300">Please use the following form for inquires and feedback</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <div className="mt-1">
              <input
                id="fullname"
                name="fullname"
                type="text"
                autoComplete="fullname"
                placeholder="Full Name"
                className="block w-full rounded-md shadow-sm ring-1 bg-transparent p-2 text-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-700"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                className="block w-full rounded-md shadow-sm ring-1 bg-transparent p-2 text-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-700"
              />
            </div>
          </div>

          <div className="col-span-full">
            <div className="mt-1">
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Subject"
                autoComplete="subject"
                className="block w-full rounded-md shadow-sm ring-1 bg-transparent p-2 text-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-700"
              />
            </div>
          </div>

          <div className="col-span-full">
            <div className="mt-1">
              <textarea
                id="message"
                name="message"
                rows={3}
                className="block w-full rounded-md shadow-sm ring-1 bg-transparent p-2 text-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 ring-gray-300 focus:outline-none focus:ring-1 focus:ring-orange-700"
                placeholder="Message"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="lg:w-52 rounded-md bg-orange-700 hover:bg-orange-600 px-4 py-2 text-gray-200"
        >
          Send Message
        </button>
      </div>
    </form>
  )
}

export default ContactForm