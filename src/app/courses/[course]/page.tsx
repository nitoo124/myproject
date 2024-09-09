import React from 'react'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

function Course({params} : {params :{course :string}}) {
  return (
    <>
    <Nav/>
    <div  className=' font-bold text-4xl mt-8 text-cyan-700 text-center'>Course Details</div>

    <div className=' bg-slate-200 text-center mt-10 mx-10 m-5 py-5 h-screen'>
    <h1 className=' text-3xl font-bold mt-10'>{params.course}</h1>

    <p className=' mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio, culpa, <br/>
       ex consequuntur laudantium aliquid quos dicta debitis alias aut, inventore deleniti! <br/>
        animi reprehenderit veniam magnam minima.
        <br/>
        <br/>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio, culpa, <br/>
       ex consequuntur laudantium aliquid quos dicta debitis alias aut, inventore deleniti! <br/>
        animi reprehenderit veniam magnam minima.
        <br/>
        <br/>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio, culpa, <br/>
       ex consequuntur laudantium aliquid quos dicta debitis alias aut, inventore deleniti! <br/>
        animi reprehenderit veniam magnam minima.
        <br/>
        <br/>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio, culpa, <br/>
       ex consequuntur laudantium aliquid quos dicta debitis alias aut, inventore deleniti! <br/>
        animi reprehenderit veniam magnam minima.
        <br/>
        <br/>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates distinctio, culpa, <br/>
       ex consequuntur laudantium aliquid quos dicta debitis alias aut, inventore deleniti! <br/>
        animi reprehenderit veniam magnam minima.</p>
    </div>

    <Footer/>
    </>
  )
}

export default Course