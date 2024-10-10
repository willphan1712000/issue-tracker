import { Skeleton } from '@/app/components'
import { Box, Card, Flex } from '@radix-ui/themes'

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
