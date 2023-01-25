import IUser from './IUser'

interface IAuthUser {
  token: {
    token: string
    expiresIn: number
  }
  user: IUser
}

export default IAuthUser
