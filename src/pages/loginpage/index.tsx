import Form from './Form'
import useLogin from '../../hooks/useLogin'
import classNames from '../../components/ui'

const LoginPage = () => {
  const { message, setLogin } = useLogin()

  return (
    <>
      <header className={classNames.header}>
        <p className="text-5xl capitalize">Login</p>
      </header>

      <Form setLogin={setLogin} message={message} />
    </>
  )
}

export default LoginPage
