import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import tw from 'tailwind-styled-components'
import { Dispatch, SetStateAction } from 'react'
import IRegister from '../../interface/IRegister'

interface Props {
  setRegister: Dispatch<SetStateAction<IRegister>>
  message: string
}

const Form = ({ setRegister, message }: Props) => {
  const { register, handleSubmit } = useForm<IRegister>()
  const SInput = tw.input`
    max-w-xs
    appearance-none
    bg-gray-200
    border-2
    border-gray-200
    rounded
    py-2
    px-4
    text-gray-700
    leading-tight
    focus:outline-none
    focus:bg-white
    focus:border-purple-500
  `

  const SButton = tw.button`
    shadow
    bg-purple-500
    hover:bg-purple-400
    focus:shadow-outline
    focus:outline-none
    text-white
    font-bold
    py-2
    px-4
    rounded
  `

  return (
    <div className="flex flex-col justify-center content-center">
      <form
        className="flex flex-col gap-6 mx-auto max-w-md"
        onSubmit={handleSubmit((data) => setRegister(data))}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="font-mono font-bold text-gray-500">
            Email
          </label>
          <SInput
            autoComplete="off"
            id="email"
            type="email"
            placeholder="Enter email..."
            {...register('email')}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="username" className="font-mono font-bold text-gray-500">
            Username
          </label>
          <SInput
            autoComplete="off"
            id="username"
            type="text"
            placeholder="Enter username..."
            {...register('username')}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label
            htmlFor="password"
            className="font-mono font-bold text-gray-500"
          >
            Password
          </label>
          <SInput
            autoComplete="off"
            id="password"
            type="password"
            placeholder="******************"
            {...register('password')}
          />
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex justify-center">
            <button>
              Already a user?
              <span className="italic border-b-2 border-red-800">
                <Link to="/login"> Login User</Link>
              </span>
            </button>
          </div>
          <SButton type="submit">Register</SButton>
        </div>
        {/*  TODO: style error message */}
        {message ?? <div>{message}</div>}
      </form>
    </div>
  )
}

export default Form

