import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const Action = () => {
  return (
    <div>
      <div className='mb-5'>
        <Button className='rounded-md'><Link href="/issues/new">New Issue</Link></Button>
      </div>
    </div>
  )
}

export default Action
