import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=' bg-green-300 w-full h-12'>
      <ul className=' flex justify-center gap-8 p-1 font-normal text-lg cursor-pointer'>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/Experience">Experience</Link>
        </li>
        <li>
        <Link href="/PersonalProject">Personal Project</Link>
        </li>
        <li>
        <Link href="/ContactMe">Contact Me</Link>
          
          </li>

      </ul>
    </div>
  )
}

export default page