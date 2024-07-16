'use client'

// import React from 'react'
import { Button, TextField } from '@radix-ui/themes'
// import { TextArea } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root radius="full" placeholder="Search the docs…" />
      <SimpleMDE />
      <Button>Summit new issue</Button>
    </div>
  )
}

export default NewIssuePage
