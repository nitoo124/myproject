import React from 'react'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

function Courses() {
  return (
    <>
    <Nav/>
    <div className=' font-bold text-4xl mt-8 text-cyan-700 text-center'>Courses</div>

  
<ul className=' bg-slate-200 text-center mt-8 mr-10 ml-10 gap-5b py-5 font-semibold text-xl'>
  <li className=' mt-2 hover:bg-cyan-700 hover:text-slate-50 p-2'><Link href = "/courses/JavaScript">JavaScript</Link></li>
  <li className=' mt-2  hover:bg-cyan-700 hover:text-slate-50 p-2'><Link href = "/courses/Python">Python</Link></li>
  <li className=' mt-2  hover:bg-cyan-700 hover:text-slate-50 p-2'><Link href = "/courses/CSS">CSS</Link></li>
  <li className=' mt-2  hover:bg-cyan-700 hover:text-slate-50 p-2'><Link href = "/courses/HTML">HTML</Link></li>
  <li className=' mt-2  hover:bg-cyan-700 hover:text-slate-50 p-2'><Link href = {`/courses/TypeScript`}>TypeScript</Link></li>
  <li className=' mt-2  hover:bg-cyan-700 hover:text-slate-50 p-2'><Link href = "/courses/SEO">SEO</Link></li>

</ul>

<Footer/>
    </>
    
  )
}

export default Courses