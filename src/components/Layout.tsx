import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

const Layout = () => {
  return (
    <div className="font-serif">
      <div className="my-10 mx-4 max-w-2xl md:mx-auto">
        <NavBar />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
