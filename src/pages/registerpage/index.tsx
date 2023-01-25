import Form from './Form'
import useRegiser from '../../hooks/useRegister'
import classNames from '../../components/ui'

const RegisterPage = () => {
  const { message, setRegister } = useRegiser()
  return (
    <>
      <header className={classNames.header}>
        <p className="text-5xl capitalize">Register</p>
      </header>
      <Form setRegister={setRegister} message={message} />
    </>
  )
}

export default RegisterPage
