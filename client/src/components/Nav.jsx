import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './Home';
const Nav = () => {
  let [flag,setFlag]=useState(false);


  function parseJwt(token){
    const [header,payload,signature]=token.split('.')
    const decodedPayload=atob(payload);
    const parsedPayload=JSON.parse(decodedPayload);
    return parsedPayload;
  }

  const logedUserToken=localStorage.getItem('token');
  const logedEmail=(parseJwt(logedUserToken)).email;

  return (
    <div className='absolute w-screen z-20'>
      <div className=" flex justify-center h-24 w-screen ">
        <div className="flex justify-around mt-5  items-center font-bold text-[#C8C0C0] bg-[#141426] rounded-2xl w-4/5">
          <div className="">
            <img src="expmple.png" alt="Logo" />
          </div>
          <div className="">
            <ul className='flex space-x-16 '>
              <NavLink to="/" className='cursor-pointer hidden md:block'>Home</NavLink>
              <NavLink to={`/leaderboard/${logedEmail}`} className='cursor-pointer hidden md:block'>Progress</NavLink>
        
              <NavLink to='/classes' className='cursor-pointer hidden md:block'>AddClasses</NavLink>
              <NavLink to='/enrollclass' className='cursor-pointer hidden md:block'>EnrollClass</NavLink>
              <NavLink to='/timetable' className='cursor-pointer hidden md:block'>LeaderBoard</NavLink>
              <NavLink to='/displayfiles' className='cursor-pointer hidden md:block'>Display</NavLink>
            </ul>

          </div>
          <div className="flex items-center justify-center gap-3">

            <ul className='w-52 h-12 border-2 border-solid border-white rounded-2xl flex justify-center items-center opacity-0 md:opacity-100'>

              <NavLink to='/signin' className='cursor-pointer '>Login</NavLink>
            </ul>

            <ul className='w-52 h-12 border-2 border-solid border-white rounded-2xl flex justify-center items-center opacity-0 md:opacity-100'>

              <NavLink to='/superuser' className='cursor-pointer '>LoginTeacher</NavLink>
            </ul>

            {flag ? <RxCross1 className='md:hidden text-3xl z-10' onClick={()=>setFlag(prev=>!prev)} />:<RxHamburgerMenu className='md:hidden text-3xl z-10' onClick={()=>setFlag(prev=>!prev)}/>}


          </div>
        </div>
            <div className={`h-[100vh] w-[100vw] bg-black ${flag ? "absolute" : "hidden"} flex items-center justify-center`}>
            <ul className='flex flex-col gap-5'>
              <li href='#' className='cursor-pointer md:hidden block text-white text-4xl'>Home</li>
              <li href='#' className='cursor-pointer md:hidden block text-white text-4xl'>LeaderBoard</li>
              <li href='#' className='cursor-pointer md:hidden block text-white text-4xl'>TimeTable</li>
              <li href='#' className='cursor-pointer md:hidden block text-white text-4xl'>Login</li>
            </ul>
            </div>
      </div>
    </div>

  )
}

export default Nav