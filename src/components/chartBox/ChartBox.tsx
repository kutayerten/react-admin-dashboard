import { Link } from 'react-router-dom'
import './chartBox.scss'
import { ResponsiveContainer , Line,LineChart, Tooltip } from 'recharts'

type Props ={
    color:string;
    icon:string;
    title:string;
    dateKey:string;
    number: number | string;
    percentage: number;
    chartDate: object[];
}

export const ChartBox = (props : Props) => {
  return (
    <div className='chart-box'>
        <div className="box-info">
            <div className="title">
                <img src={props.icon} alt="" />
                <span>{props.title}</span>
            </div>
            <h1>{props.number}</h1>
            <Link to="/" style={{color:props.color}}>View All</Link>
        </div>
        <div className="chart-info">
            <div className="chart">
            <ResponsiveContainer width="99%" height="100%">
                <LineChart  data={props.chartData}>
                    <Tooltip 
                    contentStyle={{background : "transparent", border: "none"}}
                    labelStyle={{display: "none"}}
                    position={{x:10, y:60}}
                    />
                <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
            </div>
            <div className="texts">
                <span className="percentage"
                style={{color:props.percentage < 0 ? "tomato" : "limegreen" }}
                >{props.percentage}%</span>
                <span className="duration">This month</span>
            </div>
        </div>
    </div>
  )
}
