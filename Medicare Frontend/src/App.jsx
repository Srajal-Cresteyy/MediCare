import './App.css'
import Navbar from './components/Navbar'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import LandingPage from './pages/LandingPage'
import LoginSignUpPage from './pages/LoginSignUpPage'
import TestComponent from './components/TestComponent'
import { Dashboard } from '@mui/icons-material'
import ProtectedRoute from './components/security/ProtectedRoute' // Import ProtectedRoute
import LoggedInLayouts from './layouts/LoggedInLayouts'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/LoginSignUp" element={<LoginSignUpPage />} />
      </Route>
      <Route path="/content" element={<TestComponent />} />
      <Route
        path="/auth"
        element={
          <ProtectedRoute>
            <LoggedInLayouts />
          </ProtectedRoute>
        }
      >
        <Route index path="dashboard" element={<Dashboard />} />
      </Route>
    </>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
