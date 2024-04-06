import logoImage from "../../public/images/tangerine.png"
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="rounded-lg my-4">
      <div className="w-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between pb-2 mb-2 border-b-2 border-gray-500">
          <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image src={logoImage} className="h-8 w-8" alt="My Website Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">My Website</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
            <li>
              <a href="#" className=" text-gray-300 hover:text-whiteme-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" className=" text-gray-300 hover:text-whiteme-4 md:me-6">Gallery</a>
            </li>
            <li>
              <a href="#" className=" text-gray-300 hover:text-white">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <span className="block text-sm sm:text-center">© 2023 <a href="https://flowbite.com/" className="text-gray-300 hover:text-white">My Website</a>. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;