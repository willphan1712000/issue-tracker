import IssueStatusBadge from '@/app/components/IssueStatusBadge'
import { Heading, Flex, Card, Text, Box } from '@radix-ui/themes'
import ReactMarkdown from 'react-markdown'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const loadingIssueDetailPage = () => {
  return (
    <Box className='max-w-xl'>
      <Skeleton/>
      <Flex className='space-x-3' my="2">
        <Skeleton width="5rem"/>
        <Skeleton width="5rem"/>
      </Flex>
      <Card className='prose'>
        <Skeleton count={3}/>
      </Card>
    </Box>
  )
}

export default loadingIssueDetailPage
