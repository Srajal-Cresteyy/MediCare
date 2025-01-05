import DoctorsAvailable from './LoggedInLayoutComps/patientDashboard/DoctorsAvailable'

const PatientDashboard = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 w-full">
        <DoctorsAvailable />
      </div>
    </div>
  )
}
export default PatientDashboard
