import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { RiEyeLine } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";


const Login = () => {
  return (
    <section className='bg-black'>
      <div className="container pt-[70px] flex items-center justify-center">
        <div className="form px-[40px] bg-white w-[440px] h-[618px] rounded-2xl">
          <div className="logo pt-[40px] pb-[15px] flex justify-center">
            <img src='logo.png' />
          </div>
          <div className="text text-center ">
              <h1 className='font-bold font-Popins text-2xl leading-[30px]'> Welcome Back! </h1>
              <p className='font-normal font-Popins text-sm leading-[16px] text-[#7E7E8F] pt-[5px] pb-[30px]'>
                 Let’s build something greate
              </p>
            </div>
          <form>
            <p className='font-Popins font-normal text-sm '> E-mail or phone number</p>
            <div className='relative email border-[#E8EDF2] border-[1px] rounded-lg flex justify-between mt-[8px] mb-[20px]'>
              <input className=' font-Popins font-normal text-sm text-[#C6CBD9] p-[15px] ' placeholder='Email' />
            <HiOutlineMail className='absolute text-2xl text-[#C6CBD9] top-[14px] right-[12px]' /> 
            </div>
            <p className='font-Popins font-normal text-sm'> Password</p>
            <div className='relative password border-[#E8EDF2] border-[1px] rounded-lg  flex justify-between mt-[8px] mb-[20px]'>
              <input className='w-full font-Popins font-normal text-sm text-[#C6CBD9] p-[15px]' placeholder='Password' />
            <RiEyeLine className='absolute text-2xl text-[#C6CBD9] top-[14px] right-[12px]' />
            </div>
            <button className='bg-[#7364DB] w-full font-Popins font-semibold text-base py-[14px] px-[158px]
             rounded-lg text-center text-white hover:bg-purple-400 '> Login </button>
          </form>  
          <div className="forget">
              <p className='flex justify-end font-Popins font-normal text-xs text-[#8083A3] my-[20px]'> Forgot password?</p>
          </div>
          <div className="socialSite  flex justify-between gap-[20px] mb-[20px] ">
            <div className="google w-full flex items-center gap-[10px] px-[12px] border-[#E8EDF2] border-[1px] rounded-lg ">
              <FcGoogle />
              <p className='font-Popins font-normal text-xs py-[17px]'>Google account </p>
            </div>
            <div className="facebook w-full flex items-center gap-[10px] px-[12px] border-[#E8EDF2] border-[1px] rounded-lg">
               <FaFacebook className='text-blue-500' />
              <p className='font-Popins font-normal text-xs py-[17px]'> Facebook account</p>
            </div>
          </div>
          <div className="signUp">
            <h2 className='font-Popins font-normal text-[14px] text-center'> Don’t have an account? 
              <span className='text-[#7364DB]'>Sign up </span>
            </h2>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Login