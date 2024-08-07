import { Route, Routes } from "react-router"
import Home from "./screens/Home"
import Profile from "./screens/Profile"
import AuthenticationGuard from "./components/auth0/AuthenticationGuard"
import ClientPage from "./screens/ClientPage"
import AdminPage from "./screens/AdminPage"
import CallbackPage from "./components/auth0/CallbackPage"
import ErrorPage from "./screens/ErrorPage"
import PreLayout from "./components/layout/PreLayout"

function App() {

  return (
    <>
      <Routes>
        <Route element={<PreLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AuthenticationGuard component={AdminPage} />} />
          <Route path="/client" element={<AuthenticationGuard component={ClientPage} />} />
          <Route path="/profile" element={<AuthenticationGuard component={Profile} />} />
          <Route path="/callback" element={<CallbackPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
