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
    try {
      const { data } = await axios.post('/api/login', { ...login })
      return data
    } catch (error) {
      // TODO: The error needs to be handled here
      // TODO: the way user is added to store needs to be fixed
      throw error
    }
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
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
      // TODO: send the post with token
      const { data } = await axios.get('/api/logout', config)
      return data
    } catch (error) {
      throw error
    }
  }

  const handleUrlResponse = async () => {
    try {
      return await getUrlResponse()
    } catch (error) {
      // TODO: Better error handling
      console.log(error)
      return error
    }
  }
  await handleUrlResponse()
}

export const registerUser = async (register: IRegister) => {
  const getUrlResponse = async (register: IRegister) => {
    try {
      const { data } = await axios.post('/api/register', { ...register })
      return data
    } catch (error) {
      // TODO: The error needs to be handled here
      // TODO: the way user is added to store needs to be fixed
      throw error
    }
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
