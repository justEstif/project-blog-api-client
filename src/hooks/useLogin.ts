import { useState, useEffect } from 'react'
import useStore from '../store'
import ILogin from '../interface/ILogin'
import { loginUser } from '../services/api.auth'

const useLogin = () => {
  const store = useStore((state) => state)
  const [message, setMessage] = useState('')
  const [login, setLogin] = useState<ILogin>({
    email: '',
    password: ''
  })

  useEffect(() => {
    const handleLogin = async () => {
      const response = await loginUser(login)
      if (typeof response === 'string') {
        setMessage(response)
      } else {
        store.loginUser(response)
      }
    }
    login.email !== '' && login.password !== '' && handleLogin()
  }, [login])

  return {
    setLogin,
    message
  }
}

export default useLogin
