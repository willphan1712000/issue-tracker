import prisma from '@/prisma/client';
import { Status } from '@prisma/client';
import Pagination from './_components/Pagination';
import Action from './Action';
import IssueTable, { columnNames, IssueQuery } from './IssueTable';
import { Flex } from '@radix-ui/themes';
import { Metadata } from 'next';

const IssuesPage = async ({searchParams}: { searchParams: IssueQuery}) => {
  const statuses = Object.values(Status)
  const status = statuses.includes(searchParams.status) ? searchParams.status : undefined
  const where = { status }

  const orderBy = columnNames.includes(searchParams.orderBy) ? {[searchParams.orderBy]: 'asc'} : undefined

  const page = parseInt(searchParams.page) || 1
  const pageSize = 10

  const issues = await prisma.issue.findMany({
    where,
    orderBy: orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize
  });

  const issueCount = await prisma.issue.count({ where })
  
  return (
    <Flex direction="column" gap="3">
      <Action/>
      <Pagination itemCount={issueCount} pageSize={pageSize} currentPage={page}/>
      <IssueTable issues={issues} searchParams={searchParams}/>
    </Flex>
  )
}

export const dynamic = 'force-dynamic'

export default IssuesPage

export const metadata: Metadata = {
  title: "Issue Tracker - Issues pages",
  description: "List all of issues"
}