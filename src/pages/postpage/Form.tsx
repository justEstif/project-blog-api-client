import { useForm } from 'react-hook-form'
import IComment from '../../interface/IComment'
import tw from 'tailwind-styled-components'
import useStore from '../../store'

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

interface IProps {
  setBody: React.Dispatch<React.SetStateAction<string>>
}
const Form = ({ setBody }: IProps) => {
  const { register, handleSubmit } = useForm<IComment>()
  const onSubmit = handleSubmit((data) => setBody(data.body))
  const user = useStore((state) => state).user?.user._id
  const placeholder = user ? 'Enter comment ...' : 'Login to comment'
  const readOnly = !user

  return (
    <form onSubmit={onSubmit}>
      <SInput
        autoComplete="off"
        id="text"
        type="text"
        readOnly={readOnly}
        placeholder={placeholder}
        {...register('body')}
      />
    </form>
  )
}

export default Form
