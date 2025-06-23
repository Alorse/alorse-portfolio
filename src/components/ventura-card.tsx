"use client"

import Image from "next/image"
import Link from "next/link"

export function VenturaCard() {
  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src="https://media.venturatravel.org/unsafe/144x/smart/3eb757ed-8fc6-4b23-8dba-da8edbf0bc1e-ventura_travel_logo.png"
          alt="Ventura Travel"
          width={120}
          height={40}
          className="h-10 object-contain"
        />
        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Great Place To Work Certified
        </span>
      </div>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Proud member of Ventura Travel's engineering team, a leading corporate travel company recognized for its outstanding workplace culture.
      </p>

      <Link
        href="https://www.venturatravel.org"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
      >
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </Link>
    </div>
  )
}