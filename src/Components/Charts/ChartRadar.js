import "./Charts.css"
import React from "react"
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts"

const ChartRadar = (props) => {
  return (
    <ResponsiveContainer
      height={230}
      width="30%"
      className="ResponsiveRadarChart"
    >
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={props.data}>
        <PolarGrid />
        <PolarAngleAxis radialLines={false} />
        <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default ChartRadar
