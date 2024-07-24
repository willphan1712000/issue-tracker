'use client'

// import React from 'react'
import { Button, TextField, Callout } from '@radix-ui/themes'
// import { TextArea } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IssueForm {
  title: string,
  description: string
}

const NewIssuePage = () => {
  const [error, setError] = useState('');
  const router = useRouter();
  const {register, control, handleSubmit} = useForm<IssueForm>();

  return (
    <div className='max-w-xl'>
      {error && (
        <Callout.Root className='mb-5'>
          <Callout.Text>
            {error}
          </Callout.Text>
        </Callout.Root>
      )}
      <form className='space-y-3' onSubmit={handleSubmit(async (data) => {
        try {
          const r = await axios.post('/api/issues', data);
          router.push('/issues');
        } catch (error) {
          setError('Unexpected error');
        }
      })}>
        <TextField.Root radius="full" placeholder="Title" {...register("title")}/>
        <Controller 
          name="description"
          control={control}
          render={({field}) => <SimpleMDE placeholder='description' {...field}/>}
        />
        
        <Button>Summit new issue</Button>
      </form>
    </div>
  )
}

export default NewIssuePage
