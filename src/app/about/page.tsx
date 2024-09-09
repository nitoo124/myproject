import Nav from '@/components/nav'
import Footer from '@/components/footer'
import React from 'react'

function About() {
  return (
    <>
    <Nav/>
    <div className=' '>
      <h1 className=' font-bold text-4xl mt-8 text-cyan-700 text-center'>About us</h1>
      <p className=' mt-7 text-center bg-slate-200 mr-10 ml-10 pt-7 pb-5'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nemo tenetur quasi <br/> 
        pariatur illo repellat eius aliquid! Quia veniam repellendus ratione possimus <br/>
        illo sit pariatur laborum quaerat velit Lorem ipsum dolor sit amet adipisicing elit.<br/>
         Ut sapiente dolorum autem? Sed eveniet repudiandae iste labore hicunde ipsam<br/>
         enim praesentium, totam error porro reiciendis molestias? 
         <br/>
         <br/>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia nemo tenetur quasi <br/> 
        pariatur illo repellat eius aliquid! Quia veniam repellendus ratione possimus <br/>
        illo sit pariatur laborum quaerat velit Lorem ipsum dolor sit amet adipisicing elit.<br/>
         Ut sapiente dolorum autem? Sed eveniet repudiandae iste labore hicunde ipsam<br/>
         enim praesentium, totam error porro reiciendis molestias?
         <br/>
         <br/>

         <button className=' font-semibold text-xl bg-cyan-700 text-slate-100 py-2 px-5 rounded-md hover:text-cyan-700 hover:bg-slate-50'>Click Now</button>

         
         </p>
      
      </div>
    <Footer/>
    </>
  )
}

export default About