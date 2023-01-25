import IAuthUser from './IAuthUser'

interface IGlobal {
  user: IAuthUser | null
  loginUser: (user: IAuthUser) => void
  logoutUser: () => void
}

export default IGlobal
