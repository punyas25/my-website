const ContactForm = () => {
  return (
    <form className="w-3/6 my-10">
      <div className="prose pb-12 ">
        <h1 className="text-base text-gray-300">Contact</h1>
        <p className="mt-1 text-sm leading-6 text-gray-300">
          Please use the following form for inquires and feedback
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring ring-gray-300 focus:ring-pink-300 p-1">
                <input
                  id="full-name"
                  name="full-name"
                  type="text"
                  autoComplete="full-name"
                  placeholder="Full Name"
                  // className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  className="block flex-1 bg-transparent py-1.5 pl-1 text-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-3">
            <div className="mt-2">
              {/* <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-pink sm:max-w-md"> */}
              <div className="flex rounded-md shadow-sm ring-1 ring-gray-300 focus:ring-pink p-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-gray-300 focus:ring-pink p-1">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  autoComplete="subject"
                  // className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-gray-300 focus:ring-pink p-1">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  // className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  placeholder="Message"
                />
              </div>
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