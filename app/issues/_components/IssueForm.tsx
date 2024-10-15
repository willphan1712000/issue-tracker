'use client'

import ErrorMsg from '@/app/components/ErrorMsg';
import Spinner from '@/app/components/Spinner';
import { createIssueSchema } from '@/app/validationSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { Issue } from '@prisma/client';
import { Button, Callout, TextField } from '@radix-ui/themes';
import axios from 'axios';
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from "react-hook-form";
import { z } from 'zod';

const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false
})


type IssueFormData = z.infer<typeof createIssueSchema>;

const IssueForm = ({issue}: {issue? :Issue}) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const {register, control, handleSubmit, formState: {errors}} = useForm<IssueFormData>({
    resolver: zodResolver(createIssueSchema)
  });
  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      const r = await axios.post('/api/issues', data);
      router.push('/issues');
    } catch (error) {
      setError('Unexpected error');
    }
  })

  return (
    <div className='max-w-xl'>
      {error && (
        <Callout.Root className='mb-5'>
          <Callout.Text>
            {error}
          </Callout.Text>
        </Callout.Root>
      )}
      <form className='space-y-3' onSubmit={onSubmit}>
        <TextField.Root radius="full" placeholder="Title" {...register("title")} defaultValue={issue?.title}/>
        <ErrorMsg>{errors.title?.message}</ErrorMsg>
        <Controller
          defaultValue={issue?.description}
          name="description"
          control={control}
          render={({field}) => <SimpleMDE placeholder='description' {...field}/>}
        />
        <ErrorMsg>{errors.description?.message}</ErrorMsg>
        <Button disabled={isSubmitting}>Summit new issue {isSubmitting && <Spinner />}</Button>
      </form>
    </div>
  )
}

export default IssueForm
