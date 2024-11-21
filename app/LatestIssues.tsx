import prisma from '@/prisma/client'
import { Avatar, Card, Flex, Heading, Table } from '@radix-ui/themes'
import Link from 'next/link'
import { IssueStatusBadge } from './components'

const LatestIssues = async () => {
    const issues = await prisma.issue.findMany({
        orderBy: { createdAt: 'desc' },
        take: 4,
        include: {
            assignment: true
        }
    })
  return (
    <Card>
        <Heading size="4" mb="5">Latest Issues</Heading>
        <Table.Root>
            <Table.Body>
                {issues.map(issue => (
                    <Table.Root key={issue.id}>
                        <Table.Cell>
                            <Flex justify="between">
                                <Flex direction="column" align="start" gap="2">
                                    <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                                    <IssueStatusBadge status={issue.status} />
                                </Flex>
                                { issue.assignment && (
                                    <Avatar 
                                        src={issue.assignment.image!}
                                        fallback="?"
                                        size="2"
                                        radius='full'
                                    />
                                )}
                            </Flex>
                        </Table.Cell>
                    </Table.Root>
                ))}
            </Table.Body>
        </Table.Root>
    </Card>
  )
}

export default LatestIssues
