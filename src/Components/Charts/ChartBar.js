import "./Charts.css"
import React from "react"
import PropTypes from "prop-types"
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
  const CustomXAxisTick = (props) => {
    const { x, y, payload } = props

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={3} dy={15} textAnchor="end" opacity="0.4" fontWeight={600}>
          {payload.value + 1}
        </text>
      </g>
    )
  }

  const CustomYAxisTick = (props) => {
    const { x, y, payload } = props

    return (
      <g transform={`translate(${x},${y})`}>
        <text x={35} dy={5} textAnchor="end" opacity="0.4" fontWeight={600}>
          {payload.value}
        </text>
      </g>
    )
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="ChartBarToolTip">
          <span>{props.data[label].kilogram + "kg"}</span>
          <span>{props.data[label].calories + "Kcal"}</span>
        </div>
      )
    }
    return null
  }

  return (
    <ResponsiveContainer height={270} className="ResponsiveBarChart">
      <BarChart data={props.data} margin={{ top: 20, left: 30, bottom: 10 }}>
        <text x="20" y="23" dominantBaseline="hanging" fontSize="16">
          Activité quotidienne
        </text>
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis tickLine={false} tick={CustomXAxisTick} />
        <YAxis
          orientation="right"
          tick={CustomYAxisTick}
          tickLine={false}
          axisLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
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

ChartBar.propTypes = { data: PropTypes.array.isRequired }

export default ChartBar
