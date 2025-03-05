import './App.css'
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
import Dashboard from './components/Dashboard'
import ProtectedRoute from './components/security/ProtectedRoute' // Import ProtectedRoute
import LoggedInLayouts from './layouts/LoggedInLayouts'
import DoctorDashboard from './components/DoctorDashboard'
import TestComponentDashboard from './components/TestComponentDashboard'
import PatientDashboard from './components/PatientDashboard'
import BookAppointments from './components/LoggedInLayoutComps/patientComps/BookAppointments'
import PatientAppointments from './components/LoggedInLayoutComps/patientDashboard/PatientAppointments'
import DoctorsAvailable from './components/LoggedInLayoutComps/patientDashboard/DoctorsAvailable'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Unprotected Route of Landing Page and Login-SignUp Page  */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LandingPage />} />
        <Route path="/LoginSignUp" element={<LoginSignUpPage />} />
      </Route>
      <Route path="/content" element={<TestComponent />} />

      {/* Protected Route for Various login dashboard etc */}
      <Route path="/auth" element={<LoggedInLayouts />}>
        <Route
          index
          path="dashboard"
          element={
            <ProtectedRoute roleRequired={'ADMIN'}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="doctorDashboard"
          element={
            <ProtectedRoute roleRequired={'DOCTOR'}>
              <DoctorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="patientDashboard"
          element={
            <ProtectedRoute roleRequired={'USER'}>
              <PatientDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="book-appointment/:doctorId"
          element={
            <ProtectedRoute roleRequired={'USER'}>
              <BookAppointments />
            </ProtectedRoute>
          }
        />
        <Route
          path="yourAppointments"
          element={
            <ProtectedRoute roleRequired={'USER'}>
              <PatientAppointments />
            </ProtectedRoute>
          }
        />
        <Route
          path="allDoctors"
          element={
            <ProtectedRoute>
              <DoctorsAvailable />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path="doctorDashboardTest"
        element={
          <ProtectedRoute roleRequired={'DOCTOR'}>
            <TestComponentDashboard />
          </ProtectedRoute>
        }
      />
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
