import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { z } from 'zod';

const formSchema = z.object({
  username: z.string().min(6).max(50),
  password: z.string().min(8),
});

export default function Login() {
  return <></>;
}
