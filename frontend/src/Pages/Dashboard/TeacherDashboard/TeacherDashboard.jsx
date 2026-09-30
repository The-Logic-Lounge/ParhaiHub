import React , { useEffect, useState } from 'react'
import teachingImg from '../../Images/Teaching.svg'
import { NavLink, useParams, useNavigate } from 'react-router-dom'
import logo from '../../Images/logo.jpg'

function TeacherDashboard() {
  const { ID } = useParams();
  const navigator = useNavigate();
  const [data, setdata] = useState([]);

  const Handlelogout = async() =>{
    const response = await fetch(`/api/teacher/logout`, {
      method: 'POST',
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data = await response.json();
    console.log(data);
    if(data.statusCode == 200){
      navigator('/');
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`/api/Teacher/TeacherDocument/${ID}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const user = await response.json();
        setdata(user.data);
        // console.log(user)
        
        
      } catch (error) {
        // setError(error.message)
      }
    };
    getData();
   },[]);

  return (
    <>
    {/* navbar */}
      <nav className='bg-[#FFFCF7] px-10 py-3 flex justify-between items-center shadow-sm border-b border-[#F3E7D0]'>
        <NavLink to="/">
        <div className='flex items-center gap-3'>
          <img src={logo}
            className="w-14 object-contain" alt="ParhaiHub" />
          <h1 className='text-2xl text-[#2B2D2F] font-bold'>ParhaiHub</h1>
        </div>
        </NavLink>
        <div className='bg-[#C86D42] text-white py-2 px-5 rounded-full cursor-pointer'>
          <p onClick={Handlelogout} >logout</p>
        </div>
      </nav>

      <div className='dashboard-hero bg-[#F9D976] flex justify-between items-center'>
        <div className='dashboard-welcome text-[#2B2D2F] font-semibold text-5xl ml-72'>
          <h1 className='mb-5'>Welcome to <span className='text-[#C86D42]'>ParhaiHub</span></h1>
          <h3 className='ml-16 text-[#2B2D2F]'>{data.Firstname} {data.Lastname}</h3>
        </div>
        <div className='dashboard-image m-5 mr-20'>
          <img src={teachingImg} alt="teaching" width={300}/>
        </div>
      </div>

      {/* sidebar */}
      <div className='dashboard-sidebar bg-[#3B82F6] w-52 h-full absolute top-20'>
        <div className='flex flex-col gap-4 text-xl items-center text-white mt-8 mb-10'>
          <img 
            src="https://www.pngall.com/wp-content/uploads/5/Profile-Male-PNG.png" 
            alt="profile_img" 
            className="w-28 sm:w-32 aspect-square object-contain"
          />
          <p className="text-center px-2">{data.Firstname} {data.Lastname}</p>
        </div>

        <div className='flex flex-col gap-1'>
          <NavLink to={`/Teacher/Dashboard/${ID}/Home`} className={({isActive}) => isActive ? "bg-[#FFF5F0] p-3 px-[4.61rem] text-center font-semibold text-[#C86D42]" : "p-3 text-center font-semibold text-white" }> 
          Dashboard
          </NavLink>

          <NavLink to={`/Teacher/Dashboard/${ID}/Classes`} className={({isActive}) => isActive ? "bg-[#FFF5F0] p-3 px-[4.61rem] text-center font-semibold text-[#C86D42]" : "p-3 text-center font-semibold text-white" }> 
          Classes
          </NavLink>

          <NavLink to={`/Teacher/Dashboard/${ID}/Courses`} className={({isActive}) => isActive ? "bg-[#FFF5F0] p-3 px-[4.61rem] text-center font-semibold text-[#C86D42]" : "p-3 text-center font-semibold text-white" }> 
          Courses
          </NavLink>
        </div>

      </div>
    </>
  )
}

export default TeacherDashboard