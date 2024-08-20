import React from 'react'
import bner from "../../public/bner.avif"

function Banner() {
  return (
    <>
    <div className='max-w-scree-2x1 container mr-auto mx-auto md:px-20 px-0 flex flex-col md:flex-row my-10'>
        <div className=" order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className='space-y-12'>
        <h1 className='text-3xl font-bold'>
            Hello, welcomes here to learn something{" "} <span className='text-pink-500'>new everyday!!!</span></h1>
            <p className='text-l'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, quo? Nostrum officia aliquam voluptates voluptas eos expedita aut, sequi culpa!
            </p>
            <label className="input input-bordered flex items-center gap-2">
  Email
  <input type="text" className="grow" placeholder="adityaevans13@gmail.com" />
</label>
        </div>
        <button className="btn mt-3 btn-secondary">Secondary</button>
        </div>
        <div className=" order-1 w-full md:w-1/2">
        <img src={bner} className="w-90 h-90" alt="" />
        </div>
      
      </div>
    </>
  )
}

export default Banner
