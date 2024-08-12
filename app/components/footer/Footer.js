import logoImage from "../../../public/images/tangerine.png"
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-slate-900">
      <div className="w-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between pb-2 mb-2 border-b-2 border-gray-500">
          <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <Image src={logoImage} className="h-8 w-8" alt="My Website Logo" />
            <span className="self-center text-gray-300 text-2xl font-semibold whitespace-nowrap">My Website</span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0">
            <li>
              <Link href="/about" className="text-gray-300 hover:text-whiteme-4 md:me-6">About</Link>
            </li>
            <li>
              <Link href="/gallery" className="text-gray-300 hover:text-whiteme-4 md:me-6">Gallery</Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-300 hover:text-whiteme-4 md:me-6">Contact</Link>
            </li>
            <li>
              <Link href="/credits" className="text-gray-300 hover:text-whiteme-4 md:me-6">Credits</Link>
            </li>
          </ul>
        </div>
        <div>
          <span className="block text-sm sm:text-center text-gray-300 ">© 2023 <a href="https://flowbite.com/" className="hover:text-white">My Website</a>. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer;