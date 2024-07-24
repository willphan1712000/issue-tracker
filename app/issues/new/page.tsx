'use client'

// import React from 'react'
import { Button, TextField } from '@radix-ui/themes'
// import { TextArea } from '@radix-ui/themes'
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import {useForm, Controller} from "react-hook-form";
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string,
  description: string
}

const NewIssuePage = () => {
  const router = useRouter();
  const {register, control, handleSubmit} = useForm<IssueForm>();

  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(async (data) => {
      await axios.post('/api/issues', data);
      router.push('/issues');
    })}>
      <TextField.Root radius="full" placeholder="Title" {...register("title")}/>
      <Controller 
        name="description"
        control={control}
        render={({field}) => <SimpleMDE placeholder='description' {...field}/>}
      />
      
      <Button>Summit new issue</Button>
    </form>
  )
}

export default NewIssuePage
