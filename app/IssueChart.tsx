'use client'

import React from 'react'
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from 'recharts'

interface Props {
    open: number,
    inProgress: number,
    closed: number
}

const IssueChart = ({open, inProgress, closed }: Props) => {
    const data = [
        {label: 'Open', value: open },
        {label: 'In Progress', value: inProgress },
        {label: 'Closed', value: closed }
    ]
  return (
    <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
            <XAxis dataKey="label"/>
            <YAxis />
            <Bar dataKey="value" barSize={60} fill='purple'/>
        </BarChart>
    </ResponsiveContainer>
  )
}

export default IssueChart
