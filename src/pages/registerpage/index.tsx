interface IProps {}
import SHeader from '../../components/SHeader'
import Form from './Form'
import useRegiser from '../../hooks/useRegister'

const RegisterPage = ({}: IProps) => {
  const { message, setRegister } = useRegiser()
  return (
    <>
      <SHeader>
        <p className="text-5xl capitalize">Register</p>
      </SHeader>
      <Form setRegister={setRegister} message={message} />
    </>
  )
}

export default RegisterPage
