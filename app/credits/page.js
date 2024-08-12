"use client"

import Link from 'next/link'
import Image from 'next/image'

import logoImage from "../../public/images/tangerine.png"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-slate-800 text-gray-300 p-5">
      <div className="prose mx-auto my-20 mx-10 ">
        <h2 className="text-gray-300 mb-10">Credits for various assets used throughout the project</h2>
        <table class="table-auto w-full divide-y border divide-slate-500 border-separate rounded-md p-2 text-gray-300">
          <thead>
            <tr>
              <th class="text-gray-300 px-4 py-2">Asset</th>
              <th class="text-gray-300 px-4 py-2">Created by</th>
              <th class="text-gray-300 px-4 py-2">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-slate-500 px-4 py-2 flex justify-between">Tangerine icon
                <Image src={logoImage} className="h-8 w-8 my-0" alt="My Website Logo" />
              </td>
              <td class="border border-slate-500 px-4 py-2">Freepik - Flaticon</td>
              <td class="border border-slate-500 px-4 py-2"><Link href="https://www.flaticon.com/free-icons/tangerine" className="text-orange-600	no-underline md:me-6">Link to Tangerine</Link></td>
            </tr>
            <tr>
              <td class="border border-slate-500 px-4 py-2 flex justify-between">
                Error icon
                <svg className="w-8" viewBox="0 0 32 32" id="error"><path fill="#C2410C" d="M16 32c8.836 0 16-7.164 16-16S24.836 0 16 0 0 7.164 0 16s7.164 16 16 16zm2-14a2 2 0 0 1-4 0V8a2 2 0 0 1 4 0v10zm-2 3.968a2 2 0 1 1-.001 4.001A2 2 0 0 1 16 21.968z"></path></svg>
              </td>
              <td class="border border-slate-500 px-4 py-2">Elegant Themes</td>
              <td class="border border-slate-500 px-4 py-2"><Link href="https://iconscout.com/icons/error" className="text-orange-600	no-underline md:me-6">Link to Error Icons</Link></td>
            </tr>
            <tr>
              <td class="border border-slate-500 px-4 py-2 flex justify-between">Loading icon
                <svg className="w-8" viewBox="0 0 32 32" id="loading"><g><path fill="#C2410C" d="M29.89 15.81a2.51 2.51 0 1 0-5 .45 9.65 9.65 0 0 1-1.68 6.34 10.24 10.24 0 0 1-5.74 4 10.71 10.71 0 0 1-7.38-.7 11.44 11.44 0 0 1-5.48-5.62A12.07 12.07 0 0 0 9.46 27 12.58 12.58 0 0 0 17.9 29a13.31 13.31 0 0 0 8.18-4 14 14 0 0 0 3.81-8.75v-.08A2.29 2.29 0 0 0 29.89 15.81zM7.11 15.74A9.65 9.65 0 0 1 8.79 9.4a10.24 10.24 0 0 1 5.74-4 10.71 10.71 0 0 1 7.38.7 11.44 11.44 0 0 1 5.48 5.62A12.07 12.07 0 0 0 22.54 5 12.58 12.58 0 0 0 14.1 3 13.31 13.31 0 0 0 5.92 7a14 14 0 0 0-3.81 8.75v.08a2.29 2.29 0 0 0 0 .37 2.51 2.51 0 1 0 5-.45z"></path></g></svg>
              </td>
              <td class="border border-slate-500 px-4 py-2">Zky Icon</td>
              <td class="border border-slate-500 px-4 py-2"><Link href="https://iconscout.com/icons/looding" className="text-orange-600	no-underline md:me-6">Link to Loading Icons</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
