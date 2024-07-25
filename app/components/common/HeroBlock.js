import Link from 'next/link'

const HeroBlock = ({ title, content, link, linkText }) => {
  return (
    <div className="prose hero-block flex flex-col w-3/6 my-20 mx-10 place-items-center text-center">
      <h1 className="text-gray-300 mb-2">{title}</h1>
      <p className="text-gray-300 mt-1 mb-6">{content}</p>
      {link &&
        <Link href={link} className='lg:w-52 rounded-md bg-orange-700 px-4 py-2 text-gray-200 hover:bg-orange-600 no-underline'>{linkText}</Link>
      }
    </div>
  )
}

export default HeroBlock