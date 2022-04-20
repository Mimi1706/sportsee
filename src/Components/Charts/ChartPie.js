import "./Charts.css"
import React from "react"
import { PieChart, Pie, ResponsiveContainer } from "recharts"

const data = [{ todayScore: 0.12 }]

const Score = () => {
  return (
    <ResponsiveContainer
      height={230}
      width="30%"
      className="ResponsiveScoreChart"
    >
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="todayScore"
          fill="#FF0000"
          innerRadius={70}
          outerRadius={80}
          startAngle={90}
          endAngle={450}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

export default Score
