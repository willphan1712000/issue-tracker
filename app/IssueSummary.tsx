import { Status } from '@prisma/client'
import { Card, Flex, Text } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

interface Props {
    count: {
        open: number,
        inProgress: number,
        closed: number
    }
}

const IssueSummary = ({ count }: Props) => {
    const containers: {
        label: string,
        value: number,
        status: Status
    }[] = [
        {label: 'Open issues', value: count.open, status: 'OPEN'},
        {label: 'In Progress issues', value: count.inProgress, status: 'IN_PROGRESS'},
        {label: 'open issues', value: count.closed, status: 'CLOSED'},
    ]
    return (
        <Flex gap="4">
            {containers.map(container => (
                <Card key={container.label}>
                    <Flex direction="column" gap="1">
                        <Link className='text-sm font-medium' href={`/issues?status=${container.status}`}>{container.label}</Link>
                        <Text size="5" className='font-bold'>{container.value}</Text>
                    </Flex>
                </Card>
            ))}
        </Flex>
    )
}

export default IssueSummary
