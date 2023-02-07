import axios from 'axios'
import ILogin from '../interface/ILogin'
import IRegister from '../interface/IRegister'
import IAuthUser from '../interface/IAuthUser'

// TODO: Extract the getUrlResponse func make it com
// TODO: Log in, Log out, Register
// [X] Login
// [X] Logout
// [X] Register

interface ICustomError {
  response: { data: { message: string } }
}

export const loginUser = async (login: ILogin) => {
  const getUrlResponse = async (login: ILogin) => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/auth/login`,
      { ...login }
    )
    return data
  }

  const handleUrlResponse = async (): Promise<IAuthUser | string> => {
    try {
      return await getUrlResponse(login)
    } catch (error) {
      const {
        response: {
          data: { message } // extract error message
        }
      } = error as ICustomError
      return message || 'Error not instanceof Axios'
    }
  }
  return await handleUrlResponse()
}

export const logoutUser = async (token: string) => {
  // @route POST /api/logout
  const getUrlResponse = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
    // TODO: send the post with token
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/auth/logout`,
      config
    )
    return data
  }

  const handleUrlResponse = async () => {
    return await getUrlResponse()
  }
  await handleUrlResponse()
}

export const registerUser = async (register: IRegister) => {
  const getUrlResponse = async (register: IRegister) => {
    const { data } = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/auth/register`,
      { ...register }
    )
    return data
  }

  const handleUrlResponse = async (): Promise<IAuthUser | string> => {
    try {
      return await getUrlResponse(register)
    } catch (error) {
      const {
        response: {
          data: { message } // extract error message
        }
      } = error as ICustomError
      return message || 'Error not instanceof Axios'
    }
  }
  return await handleUrlResponse()
}
