import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  username: z
    .string()
    .min(6, {
      message: 'El correo debe tener al menos 6 caracteres.',
    })
    .max(30, {
      message: 'Se excedió el número máximo de caracteres',
    }),
  password: z.string().min(8),
});

export default function LoginForm() {
  // // 1. Define your form.
  // const form =
  //   useForm <
  //   z.infer <
  //   typeof formSchema >>
  //     {
  //       resolver: zodResolver(formSchema),
  //       defaultValues: {
  //         username: '',
  //       },
  //     };
  //     function onSubmit(values: z.infer<typeof formSchema>) {
  //       // Do something with the form values.
  //       // ✅ This will be type-safe and validated.
  //       console.log(values)
  //     }
}
