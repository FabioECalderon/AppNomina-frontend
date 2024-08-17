import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { NavLink } from 'react-router-dom';
import { MailIcon } from 'lucide-react';
import { UserCircle } from 'lucide-react';
import { UserSquare } from 'lucide-react';

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const formSchema = z
  .object({
    firstName: z.string().min(2, {
      message: 'El nombre debe tener al menos 2 caracteres',
    }),
    lastName: z.string().min(2, {
      message: 'El apellido debe tener al menos 2 caracteres',
    }),
    idType: z.enum(['CC', 'CE', 'NIT'], {
      message: 'Seleccione el tipo de documento',
    }),
    idNumber: z.string().min(5, {
      message: 'El documento debe tener al menos 5 dígitos.',
    }),
    emailAddress: z.string().email('Introduzca su correo registrado.'),
    password: z
      .string()
      .min(8, {
        message: 'La contraseña debe tener al menos 8 caracteres.',
      })
      .max(30, {
        message: 'Se excedió el número máximo de caractéres.',
      }),
    confirmPassword: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    { message: 'Las contraseñas no son iguales.', path: ['confirmPassword'] },
  );

export default function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      idType: 'CC',
      idNumber: '',
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
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full h-screen max-w-[900px] mx-auto p-4 flex flex-col gap-6 text-skin-base bg-skin-fill-alt"
        >
          <FormDescription className="text-2xl text-left pt-10 text-bold">
            Crea una cuenta en AppNomina
          </FormDescription>
          <div className="flex gap-8 flex-col sm:flex-row sm:justify-center">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p className="text-left text-l">Nombre</p>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nombre"
                      {...field}
                      type="text"
                      className="sm:w-[260px] md:w-[336px]"
                      suffix={<UserCircle />}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p className="text-left text-l">Apellido</p>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Apellido"
                      {...field}
                      type="text"
                      className="sm:w-[260px] md:w-[336px]"
                      suffix={<UserCircle />}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-8 flex-col sm:flex-row sm:justify-center">
            <div className="flex gap-4 w-auto">
              <FormField
                control={form.control}
                name="idType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <p className="text-left text-l">Tipo de documento</p>
                    </FormLabel>
                    {/* Fix document id selection */}
                    <Select
                      onValueChange={field.onchange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="grow-0 w-[120px]">
                          <SelectValue placeholder="Seleccionar" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="CC">CC</SelectItem>
                        <SelectItem value="CE">CE</SelectItem>
                        <SelectItem value="NIT">NIT</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="idNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      <p className="text-left text-l">Número de documento</p>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="12345678"
                        {...field}
                        type="number"
                        className=" w-auto sm:w-[125px] md:w-[205px]"
                        suffix={<UserSquare />}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
                      className="sm:w-[260px] md:w-[336px]"
                      suffix={<MailIcon />}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex gap-8 flex-col sm:flex-row sm:justify-center">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p className="text-left text-l">Contraseña</p>
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      className="sm:w-[260px] md:w-[336px]"
                      placeholder="••••••••"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p className="text-left text-l">Confirmar contraseña</p>
                  </FormLabel>
                  <FormControl>
                    <PasswordInput
                      className="sm:w-[260px] md:w-[336px]"
                      placeholder="••••••••"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className=" pb-8 flex items-center gap-8 flex-col sm:flex-row sm:justify-center ">
            <Button
              className=" sm:grow bg-skin-accent hover:bg-skin-accent-hover"
              disabled={form.formState.isSubmitting}
              type="submit"
            >
              {form.formState.isSubmitting ? 'Enviando...' : 'Crear cuenta'}
            </Button>
            <NavLink
              to="/login"
              className="sm:grow rounded-md p-2 text-blue-950 bg-skin-fill-alt hover:bg-skin-fill"
            >
              Ir a inicio de sesión
            </NavLink>
          </div>
        </form>
      </Form>
    </>
  );
}
