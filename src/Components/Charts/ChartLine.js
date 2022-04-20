import "./Charts.css"
import React from "react"
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts"

const ChartLine = (props) => {
  return (
    <ResponsiveContainer
      height={230}
      width="30%"
      className="ResponsiveLineChart"
    >
      <LineChart
        data={props.data}
        padding={{
          top: 0,
          bottom: 0,
        }}
      >
        <XAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Line type="monotone" dataKey="sessionLength" stroke="white" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default ChartLine
