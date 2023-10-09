import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import "./bigChartBox.scss"

const data = [
    {
      name: ' A',
      watch: 4000,
      garden: 2400,
      electronic: 2400,
    },
    {
      name: ' B',
      watch: 3000,
      garden: 1398,
      electronic: 2210,
    },
    {
      name: ' C',
      watch: 2000,
      garden: 9800,
      electronic: 2290,
    },
    {
      name: ' D',
      watch: 2780,
      garden: 3908,
      electronic: 2000,
    },
    {
      name: ' E',
      watch: 1890,
      garden: 4800,
      electronic: 2181,
    },
    {
      name: ' F',
      watch: 2390,
      garden: 3800,
      electronic: 2500,
    },
    {
      name: ' G',
      watch: 3490,
      garden: 4300,
      electronic: 2100,
    },
  ];
  


const BigChartBox = () => {
  return (
    <div className="big-chart-box">
        <h1>Revenue Analystics</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
            <AreaChart
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                >
                <CartesianGrid  />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip
                 
                 />
                <Area type="monotone" dataKey="watch" stackId="1" stroke="#fb5000" fill="#8284d8" />
                <Area type="monotone" dataKey="garden" stackId="1" stroke="#fd1456" fill="#82ca9d" />
                <Area type="monotone" dataKey="electronic" stackId="1" stroke="#bfc658" fill="#ffc658" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default BigChartBox