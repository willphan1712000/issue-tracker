import { Status } from '@prisma/client'
import { Card, Flex, Text } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

interface Props {
    open: number,
    inProgress: number,
    closed: number
}

const IssueSummary = ({open, inProgress, closed}: Props) => {
    const containers: {
        label: string,
        value: number,
        status: Status
    }[] = [
        {label: 'Open issues', value: open, status: 'OPEN'},
        {label: 'In Progress issues', value: open, status: 'IN_PROGRESS'},
        {label: 'open issues', value: open, status: 'CLOSED'},
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
