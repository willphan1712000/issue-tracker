'use client'

import React from 'react'
import { Button, TextField } from '@radix-ui/themes'
import { TextArea } from '@radix-ui/themes'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root radius="full" placeholder="Search the docs…" />
      <TextArea resize="vertical" placeholder="Description" />
      <Button>Summit new issue</Button>
    </div>
  )
}

export default NewIssuePage
