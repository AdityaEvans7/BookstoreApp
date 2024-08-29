import React from 'react'
import toast from 'react-hot-toast'
import { useAuth,  } from '../context/AuthProvider';

function Logout() {
    const [authuser,setAuthUser]=useAuth()
    const handleLogout=()=>{
        try{
            setAuthUser({
                ...authuser,
                user:null
            })
            localStorage.removeItem("Users")
            toast.success("Logout successfull")
            setTimeout(() =>{
                window.location.reload();},2000)
        }catch(error){
            toast.error("Erorr:" + error)
            setTimeout(() => {},3000)
            
        }
    }

  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
      onClick={handleLogout}
      >Logout</button>
    </div>
  )
}

export default Logout
