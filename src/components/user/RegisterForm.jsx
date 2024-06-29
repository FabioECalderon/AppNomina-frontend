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
  firstName: z.string(),
  lastName: z.string(),
  idType: z.string(),
  idNumber: z.number(
    'Introduzca el número de documento sin puntos ni espacios.',
  ),
  emailAddress: z.string().email('Introduzca su correo registrado.'),
  password: z
    .string()
    .min(8, {
      message: 'La contraseña debe tener al menos 8 caracteres.',
    })
    .max(30, {
      message: 'Se excedió el número máximo de caracteres.',
    }),
  confirmPassword: z.string(),
});

export default function RegisterForm() {
  return (
    <div>
      <Form></Form>
    </div>
  );
}
