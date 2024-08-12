import Image from "next/image"
import Link from "next/link"

import profileImg from "../../../public/images/profile.jpg"

const AboutMe = () => {
  return (
    <div className="w-4/6 grid lg:grid-cols-2 grid-cols-1 gap-8 my-10">
      <div className="img-col">
        <Image
          className="rounded-md w-full object-cover"
          src={profileImg}
          alt=""
        />
      </div>
      <div className="prose info-col flex flex-col text-gray-300">
        <h1 className="text-gray-200 mb-2">Hobby Artist from Mumbai & Web Developer.
        </h1>
        <p className="mb-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div>
          <ul>
            <li>
              Instagram: <Link href="https://www.instagram.com/doodlesbypost/" className="text-orange-600	no-underline" target="_blank">@doodlesbypost</Link>
            </li>
            <li>
              Email: email@example.com
            </li>
            <li>
              City: Mumbai, India
            </li>
            <li>
              Degree: Master
            </li>
            <li>
              LinkedIn: <Link href="https://www.linkedin.com/in/punyashree-shetty-862029102/" className="text-orange-600	no-underline" target="_blank">punyashree-shetty</Link>
            </li>
          </ul>
        </div>
        <div>
          Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
        </div>
      </div>
    </div>
  )
}

export default AboutMe