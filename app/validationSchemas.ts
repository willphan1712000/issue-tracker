import {z} from 'zod';

export const issueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1, "This is required").max(65535),
})
export const patchIssueSchema = z.object({
    title: z.string().min(1).max(255).optional(),
    description: z.string().min(1, "This is required").max(65535).optional(),
    assignment: z.string().min(1, 'Assignment is required').max(255).optional().nullable()
})