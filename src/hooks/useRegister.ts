import { useState, useEffect } from 'react'
import useStore from '../store'
import IRegister from '../interface/IRegister'
import { registerUser } from '../services/api.auth'

const useRegiser = () => {
  const store = useStore((state) => state)
  const [message, setMessage] = useState('')
  const [register, setRegister] = useState<IRegister>({
    email: '',
    username: '',
    password: ''
  })

  useEffect(() => {
    const handleRegister = async () => {
      try {
        const response = await registerUser(register)
        if (typeof response === 'string') {
          setMessage(message)
        } else {
          store.loginUser(response)
        }
      } catch (error) {
        console.log(error)
      }
    }
    register.email !== '' &&
      register.password !== '' &&
      register.username !== '' &&
      handleRegister()
  }, [register])

  return {
    setRegister,
    message
  }
}

export default useRegiser
