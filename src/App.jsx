import Login from './pages/Login'
import Homepage from './pages/Homepage'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import { useRoutes } from 'react-router'
import ProtectedRoutes from './routes/ProtectedRoutes'
import Profile from './pages/Profile'
import Promo from './pages/Promo'
import Activity from './pages/Activity'

const routes = [
  {path: '/login', element:<Login/>},
  {path: '/register', element:<Register/>},
  {path: '/dashboard', element:<Dashboard/>},
  {path: '/', element:
  <ProtectedRoutes> 
    <Homepage/>
  </ProtectedRoutes>
  },
  {path: '/profile', element:
  <ProtectedRoutes> 
    <Profile/>
  </ProtectedRoutes>
  },
  {path: '/dashboard/promo', element:
  <ProtectedRoutes> 
    <Promo/>
  </ProtectedRoutes>
  },
  {path: '/activity', element:
  <ProtectedRoutes> 
    <Activity/>
  </ProtectedRoutes>
  },

  
]

function App() {
  const element = useRoutes(routes)
  return element;
}

export default App
