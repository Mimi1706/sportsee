import "./Charts.css"
import React from "react"
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts"

const CustomAngles = (props) => {
  const { x, y, cy, cx, payload } = props

  let allKinds = [
    "Cardio",
    "Énergie",
    "Endurance",
    "Force",
    "Vitesse",
    "Intensité",
  ]

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        y={2 + (y - cy) / 5}
        x={18 + (x - cx) / 3}
        fill="white"
        textAnchor="end"
        fontSize="9"
        fontWeight={600}
      >
        {allKinds[payload.value]}
      </text>
    </g>
  )
}

const ChartRadar = (props) => {
  return (
    <ResponsiveContainer
      height={230}
      width="30%"
      className="ResponsiveRadarChart"
    >
      <RadarChart
        outerRadius="55%"
        innerRadius="10%"
        data={props.data.data}
        margin={{ left: 20 }}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis tick={CustomAngles} />
        <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.9} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

export default ChartRadar
