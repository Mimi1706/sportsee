import "./Charts.css"
import React from "react"
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from "recharts"

const ChartBar = (props) => {
  return (
    <ResponsiveContainer height={270} className="ResponsiveBarChart">
      <BarChart data={props.data} margin={{ top: 20, left: 30, bottom: 10 }}>
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis tickLine={false} interval="10" tickCount={10} />
        <YAxis
          orientation="right"
          tickLine={false}
          axisLine={false}
          ticks={[0, 80]}
        />
        <Tooltip />
        <Legend
          iconType="circle"
          verticalAlign="top"
          align="right"
          iconSize={10}
          height={50}
        />
        <Bar
          dataKey="kilogram"
          name="Poids (kg)"
          fill="#282D30"
          barSize={10}
          radius={[10, 10, 0, 0]}
        />
        <Bar
          dataKey="calories"
          name="Calories brûlées (kCal)"
          fill="#E60000"
          barSize={10}
          radius={[10, 10, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

ChartBar.propTypes = {}

export default ChartBar
