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

const data = [
  {
    name: 'John',
    solvedCases: 4000,
    onGoingCases: 2400,
  },
  {
    name: 'Ricky',
    solvedCases: 3000,
    onGoingCases: 1398,
  },
  {
    name: 'Anu',
    solvedCases: 2400,
    onGoingCases: 1498,
  },
  {
    name: 'Alex',
    solvedCases: 3320,
    onGoingCases: 1198,
  },
  {
    name: 'Aren',
    solvedCases: 1200,
    onGoingCases: 298,
  },
  {
    name: 'Ani',
    solvedCases: 4500,
    onGoingCases: 1313,
  },
  {
    name: 'Sid',
    solvedCases: 3420,
    onGoingCases: 1198,
  },
  {
    name: 'Ari',
    solvedCases: 3130,
    onGoingCases: 198,
  },
  {
    name: 'Avi',
    solvedCases: 3130,
    onGoingCases: 398,
  },
]

const TransactionChart = () => {
  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <strong className="text-gray-700 font-medium">Doctors Perfomance</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
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
            <Bar dataKey="solvedCases" fill="#0ea5e9" />
            <Bar dataKey="onGoingCases" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
export default TransactionChart
