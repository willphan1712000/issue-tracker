'use client'

import { Card } from '@radix-ui/themes'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

interface Props {
    count: {
        open: number,
        inProgress: number,
        closed: number
    }
}

const IssueChart = ({ count }: Props) => {
    const data = [
        {label: 'Open', value: count.open },
        {label: 'In Progress', value: count.inProgress },
        {label: 'Closed', value: count.closed }
    ]
  return (
    <Card>
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="label"/>
                <YAxis />
                <Bar dataKey="value" barSize={60} fill='blue'/>
            </BarChart>
        </ResponsiveContainer>    
    </Card>
  )
}

export default IssueChart
