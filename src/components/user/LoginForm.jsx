import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, NavLink, Navigate, redirect } from 'react-router-dom';
import { MailIcon } from 'lucide-react';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { PasswordInput } from '../ui/password-input';

const formSchema = z.object({
  emailAddress: z.string().email('Introduzca su correo registrado.'),
  password: z
    .string()
    .min(8, {
      message: 'La contraseña debe tener al menos 8 caracteres.',
    })
    .max(30, {
      message: 'Se excedió el número máximo de caracteres.',
    }),
});

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailAddress: '',
      password: '',
    },
  });

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
    } catch (e) {
      form.setError('root', { message: 'El correo o contraseña es inválido' });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full h-screen max-w-[450px]  mx-auto p-4 flex flex-col gap-6 text-skin-base bg-skin-fill-alt"
      >
        <FormDescription className="text-2xl text-left pt-10 text-bold">
          Ingresar a AppNomina
        </FormDescription>
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <p className="text-left text-l">Correo</p>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="email@address.com"
                  {...field}
                  type="email"
                  suffix={<MailIcon />}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                <p className="text-left text-l">Contraseña</p>
              </FormLabel>
              <FormControl>
                <PasswordInput placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className=" bg-skin-accent hover:bg-skin-accent-hover"
          disabled={form.formState.isSubmitting}
          type="submit"
        >
          {form.formState.isSubmitting ? 'Enviando...' : 'Ingresar'}
        </Button>
        <hr />
        <NavLink
          to="/register"
          className="rounded-md px-4 py-2 text-blue-950 bg-skin-fill-alt hover:bg-skin-fill"
        >
          Si eres nuevo registrate aqui.
        </NavLink>
      </form>
    </Form>
  );
}
