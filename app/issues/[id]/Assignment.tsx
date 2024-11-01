import { Select } from '@radix-ui/themes'

const Assignment = () => {
  return (
    <Select.Root>
        <Select.Trigger placeholder='assign to ...'/>
        <Select.Content>
            <Select.Group>
                <Select.Label>Suggestions</Select.Label>
                <Select.Item value="1">Will</Select.Item>
                <Select.Item value="2">Mosh</Select.Item>
            </Select.Group>
        </Select.Content>
    </Select.Root>
  )
}

export default Assignment
