import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Register from './pages/Register'
import { useRoutes } from 'react-router'
import ProtectedRoutes from './routes/ProtectedRoutes'

const routes = [
  {path: '/login', element:<Login/>},
  {path: '/register', element:<Register/>},
  
  {path: '/', element:
  // <ProtectedRoutes>  </ProtectedRoutes>
    <Homepage/>
  },

]

function App() {
  const element = useRoutes(routes)
  return element;
}

export default App
