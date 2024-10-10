import { Skeleton } from '@/app/components'
import { Box } from '@radix-ui/themes'

const loadingNewIssuePage = () => {
  return (
    <div>
      <Box className='max-w-xl'>
        <Skeleton/>
        <Skeleton height="20rem"/>
      </Box>
    </div>
  )
}

export default loadingNewIssuePage
