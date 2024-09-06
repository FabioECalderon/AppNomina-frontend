import { z } from 'zod';

export const UserOutput = z
  .object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.string(),
    document: z.string(),
    document_type: z.string(),
    password: z.string(),
    photo: z.string(),
  })
  .strict();
