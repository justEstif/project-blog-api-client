import classNames from '../../components/ui'

const Header = () => {
  return (
    <header className={classNames.header}>
      <p className="text-5xl capitalize">Interesting Blog</p>
      <p className="uppercase text-md">Estifanos Beyene</p>
      <p className="capitalize text-md">Abstract</p>
      <p className="text-md">I am a fullstack developer.</p>
    </header>
  )
}

export default Header
