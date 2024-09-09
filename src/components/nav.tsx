import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <div className=' flex bg-cyan-700 justify-between text-xl'>
        <h1 className=' text-blue-100 text-2xl p-5 ml-5 font-bold'>Nitoo kumari</h1>

        <ul className=' flex gap-8 mr-10 p-5 text-xl font-medium  text-blue-100'>
            <li className = " hover:text-cyan-800 hover:bg-slate-50 p-1 rounded-lg"><Link href= "/">Home</Link></li>
            <li className = " hover:text-cyan-800 hover:bg-slate-50 p-1 rounded-lg"><Link href= "/about">About</Link></li>
            <li className = " hover:text-cyan-800 hover:bg-slate-50 p-1 rounded-lg"><Link href= "/courses">Courses</Link></li>

        </ul>
    </div>
  )
}

export default Nav