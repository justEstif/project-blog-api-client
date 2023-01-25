import SHeader from '../../components/SHeader'
import Form from './Form'
import useLogin from '../../hooks/useLogin'

interface IProps { }

const LoginPage = ({ }: IProps) => {
  const { message, setLogin } = useLogin()

  return (
    <>
      <SHeader>
        <p className="text-5xl capitalize">Login</p>
      </SHeader>

      <Form setLogin={setLogin} message={message} />
    </>
  )
}

export default LoginPage
