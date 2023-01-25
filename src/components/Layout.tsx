import { Outlet } from 'react-router-dom'
import tw from 'tailwind-styled-components'
import NavBar from './NavBar'

const SSiteLayout = tw.div`
  font-serif
`

const SPageLayout = tw.main`
  max-w-2xl
  mx-4
  my-10
  md:mx-auto
`

const Layout = () => {
  return (
    <SSiteLayout>
      <SPageLayout>
        <NavBar />
        <Outlet />
      </SPageLayout>
    </SSiteLayout>
  )
}

export default Layout
