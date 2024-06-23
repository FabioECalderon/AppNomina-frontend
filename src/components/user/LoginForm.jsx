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

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { NavLink } from 'react-router-dom';

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
        className="w-full h-screen max-w-[450px]  mx-auto p-4 flex flex-col gap-6 bg-white"
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
                <Input placeholder="●●●●●●●●" {...field} type="password" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className=" bg-orange-400 hover:bg-orange-500"
          disabled={form.isSubmitting}
          type="submit"
        >
          {form.isSubmitting ? 'Enviando...' : 'Ingresar'}
        </Button>
        <NavLink>
          <Button className="w-full text-blue-950 bg-white hover:bg-orange-200 border-blue-950">
            Crear cuenta
          </Button>
        </NavLink>
      </form>
    </Form>
  );
}
