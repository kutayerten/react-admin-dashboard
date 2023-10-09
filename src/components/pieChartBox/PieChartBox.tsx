import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./pieChartBox.scss";

const data = [
    { name: "Chrome", value: 400, color:"#0088FE"},
    { name: "Opera", value: 100, color:"#00C49F"},
    { name: "Mozzila", value: 200, color:"#FFBB28"},
    { name: "Safari", value: 300, color:"#FF8042"},
]

const PieChartBox = () => {
  return (
    <div className="pie-chart-box">
        <h1>Browser</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height={300}>
                <PieChart>
                    <Tooltip 
                    contentStyle={{background: "white", borderRadius: "5px"}}
                    />
                    <Pie
                    data={data}
                    innerRadius={"70%"}
                    outerRadius={"90%"}
                    paddingAngle={5}
                    dataKey="value"
                    >
                    {data.map((item) => (
                        <Cell 
                        key={item.name} 
                        fill={item.color} />
                    ))}
                    </Pie>
                    <Pie
                    data={data}
                    cx={420}
                    cy={200}
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    >
                    {data.map((item) => (
                        <Cell 
                        key={item.name} 
                        fill={item.color} />
                    ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
        <div className="options">
            {data.map(item => (
                <div className="option" key={item.name}>
                    <div className="title">
                        <div className="dot" style={{ backgroundColor: item.color }}/>
                        <span>{item.name}</span>
                    </div>
                    <span>{item.value}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PieChartBox;