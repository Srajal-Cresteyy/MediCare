import {
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Bar,
  Legend,
  Tooltip,
} from 'recharts'

const TransactionChart = ({ transactionData, roleAccess }) => {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Doctors Performance</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={transactionData}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey={
                roleAccess === 'ADMIN' ? 'solvedCases' : 'No Of Appointments'
              }
              fill="#0ea5e9"
            />
            {/* Conditionally render the ongoingCases Bar only if roleAccess is ADMIN */}
            {roleAccess === 'ADMIN' && (
              <Bar dataKey="onGoingCases" fill="#ea580c" />
            )}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default TransactionChart
