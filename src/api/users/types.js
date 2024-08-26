import { z } from 'zod';

export const UserOutput = z
  .object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
  })
  .strict();
