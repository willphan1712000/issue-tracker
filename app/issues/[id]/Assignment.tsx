'use client'

import { Skeleton } from '@/app/components'
import { Issue, User } from '@prisma/client'
import { Select } from '@radix-ui/themes'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const Assignment = ({ issue }: { issue: Issue }) => {
  // Fetch data using React Query to cache data
  const {data: users, error, isLoading} = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: () => axios.get('/api/users').then(res => res.data),
    staleTime: 60 * 1000, //60s, depending on the application and requirements
    retry: 3
  })

  if(isLoading) return <Skeleton />

  if(error) return null

  // Fetch data in normal React method, use React use State method
  // const [users, setUsers] = useState<User[]>([])

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const {data} = await axios.get<User[]>('/api/users')
  //     setUsers(data)
  //   }

  //   fetchUsers()
  // }, [])

  const assignIssue = (userId: string) => {
    const ruserId = userId !== "null" ? userId : null;
    axios.patch('/api/issues/' + issue.id, {
      assignment: ruserId
    }).catch(() => {
      console.log("Cancelled")
      toast.error('Changes could not be saved')
    })
  }

  return (
    <>
      <Select.Root defaultValue={issue.assignmentId || "null"} onValueChange={assignIssue}>
          <Select.Trigger placeholder='assign to ...'/>
          <Select.Content>
              <Select.Group>
                  <Select.Label>Suggestions</Select.Label>
                  <Select.Item value="null">Unassigned</Select.Item>
                  {
                    users?.map(user => <Select.Item key={user.id} value={user.id}>{user.name}</Select.Item>)
                  }
              </Select.Group>
          </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  )
}

export default Assignment
