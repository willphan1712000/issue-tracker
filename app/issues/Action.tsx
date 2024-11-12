import { Button, Flex } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'
import IssueStatusFilter from './IssueStatusFilter'

const Action = () => {
  return (
    <Flex mb="5" justify="between">
      <IssueStatusFilter />
      <Button className='rounded-md'><Link href="/issues/new">New Issue</Link></Button>
    </Flex>
  )
}

export default Action
