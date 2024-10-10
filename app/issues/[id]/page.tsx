import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import prisma from '@/prisma/client'
import { Card, Flex, Heading, Text } from '@radix-ui/themes'
import { notFound } from 'next/navigation'
import React from 'react'
import ReactMarkdown from 'react-markdown';

interface Props {
    params: {id : string}
}

const IssueDetailPage = async ({params}: Props) => {
    // if(typeof(params.id) !== 'number') notFound()
    const issue = await prisma.issue.findUnique({
        where: {id : parseInt(params.id)}
    })

    if(!issue)
        notFound()

  return (
    <div>
      <Heading as="h2">{issue.title}</Heading>
      <Flex className='space-x-3' my="2">
        <IssueStatusBadge status = {issue.status}/>
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className='prose'>
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  )
}

export default IssueDetailPage
