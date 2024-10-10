import RegisterForm from './components/Auth/RegisterForm.jsx'
import Routers from './router/router.jsx'
import AuthContextProvider from "./context/AuthContext";


function App() {
  return (
    <AuthContextProvider>
      <Routers/>
    </AuthContextProvider>
  )
}

export default App
