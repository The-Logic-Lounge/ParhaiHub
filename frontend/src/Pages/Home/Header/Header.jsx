import './Header.css'
import { NavLink } from 'react-router-dom'
import Logo from '../../Images/logo.jpg'

function Header() {
  return (
    <>
    <header className="flex items-center justify-evenly bg-[#FFFCF7] w-full fixed z-10 gap-[20rem] shadow-sm border-b border-[#F3E7D0]">
      <NavLink to='/'>
      <div className="logo">
        <img src={Logo} alt="ParhaiHub" />
        <h1 className='text-2xl text-[#2B2D2F] font-bold'>ParhaiHub</h1>
      </div>
      </NavLink>
      <div className="link-nav">
        <ul>
          <li><NavLink to='/' className={({isActive}) => isActive ? "active" : "deactive" }> Home </NavLink></li>
          <li><NavLink to='/courses' className={({isActive}) => isActive ? "active" : "deactive"}> Courses </NavLink></li>
          <li><NavLink to='/about' className={({isActive}) => isActive ? "active" : "deactive"}> About </NavLink></li>
          <li><NavLink to='/contact' className={({isActive}) => isActive ? "active" : "deactive"}> Contact us </NavLink></li>
        </ul>
      </div>
      <div className='flex gap-6'>
        <NavLink to='/login' className={({isActive}) => isActive ? "deactive" : "deactive"}><button>Login</button></NavLink>
        <NavLink to='/signup' className={({isActive}) => isActive ? "deactive" : "deactive"}><button>Signup</button></NavLink>
      </div>
    </header>
    <div className="gapError"></div>
    </>
  )
}

export default Header
