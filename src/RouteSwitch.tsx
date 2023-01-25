import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import useStore from './store'
import LoginPage from './pages/loginpage'
import HomePage from './pages/homepage'
import Layout from './components/Layout'
import RegisterPage from './pages/registerpage'
import PostPage from './pages/postpage'
import OwnerPage from './pages/ownerpage'
import CreatePage from './pages/createpage'
import EditPage from './pages/editpage'
import DeletePage from './pages/deletepage'

// TODO: Move routes to a constant/Page.Routes.ts
const RouteSwitch = () => {
  const store = useStore((state) => state)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          {/* NOTE: If there is a user redirect to home */}
          <Route
            path="login"
            element={store.user ? <Navigate replace to="/" /> : <LoginPage />}
          />

          <Route
            path="register"
            element={
              store.user ? <Navigate replace to="/" /> : <RegisterPage />
            }
          />
          <Route path="posts/*" element={<PostPage />} />

          <Route
            path="owner"
            element={
              store.user?.user.owner ? (
                <OwnerPage />
              ) : (
                <Navigate replace to="/" />
              )
            }
          />

          <Route
            path="owner/edit/*"
            element={
              store.user?.user.owner ? (
                <EditPage />
              ) : (
                <Navigate replace to="/" />
              )
            }
          />

          <Route
            path="owner/delete/*"
            element={
              store.user?.user.owner ? (
                <DeletePage />
              ) : (
                <Navigate replace to="/" />
              )
            }
          />

          <Route
            path="owner/create"
            element={
              store.user?.user.owner ? (
                <CreatePage />
              ) : (
                <Navigate replace to="/" />
              )
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch
