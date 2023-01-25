import { Link } from 'react-router-dom'
import {
  HomeIcon,
  UserIcon,
  LogoutIcon,
  RegisterUserIcon,
  OwnerIcon
} from './NavBarIcons'
import useStore from '../store'

function NavBar() {
  const store = useStore((state) => state)
  const username = store.user?.user.username
  const owner = store.user?.user.owner

  return (
    <nav className="mb-7">
      <ul className="flex justify-between">
        <li>
          <Link to="/">
            <HomeIcon />
          </Link>
        </li>
        {store.user ? (
          <div className="flex gap-5 justify-center content-center">
            <p className="font-serif text-lg">{username}</p>
            {owner && (
              <Link to="/owner">
                <OwnerIcon />
              </Link>
            )}
            <button onClick={store.logoutUser}>
              <LogoutIcon />
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <li>
              <Link to="/login">
                <UserIcon />
              </Link>
            </li>
            <li>
              <Link to="/register">
                <RegisterUserIcon />
              </Link>
            </li>
          </div>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
