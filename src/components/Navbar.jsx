import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to="/" className="w-16 h-10 rounded-lg bg-green items-center justify-center flex font-bold shadow-md">
        <p className='blue-gradient_text'>Home</p>
      </NavLink>
    </header>
  )
}

export default Navbar
