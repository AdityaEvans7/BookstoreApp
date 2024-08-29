import React, { useEffect, useState } from 'react'
import Carts from "./Carts"
import axios from "axios"
import {Link} from "react-router-dom"
function Course() {
    const [book, setBook] = useState([]);
    useEffect(() =>{
        const getBook=async()=>{
            try{
             const res =   await axios.get("http://localhost:4001/book");
             console.log(res.data)
             setBook(res.data)

            }catch(error){
                console.log(error)

            }
        }
        getBook();
    },[]);
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 item-center justify-center text-center'>
            <h1 className='text-2xl md:text-4xl'>We're delighted to have you {" "}
            <span className='text-pink-500'>here! :)</span></h1>
            <p className='mt-12'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit ipsa fugiat temporibus corrupti explicabo voluptas dolores. Ratione temporibus totam quis rerum, maiores dolores, est dignissimos aliquid facere illum corporis odio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dicta similique in distinctio commodi vero totam voluptatem, enim ipsam at, cum cupiditate aspernatur aliquid saepe cumque hic modi officia culpa.
            </p>
           <Link to="/">
           <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
           </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
            {
                book.map((item)=>(
                    <Carts key={item.id} item={item}/>
                ))
            }
        </div>

    </div>
    </>
  )
}

export default Course
