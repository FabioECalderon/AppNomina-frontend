import http from '../http';
import { setSession } from '../session';
import { decodeUserOutput } from './decoders';

export async function signIn({ email, password }) {
  try {
    const { data: response } = await http.post('/users/signin', {
      email,
      password,
    });

    const data = await decodeUserOutput(response.data);
    const { token = '' } = response.meta;

    setSession(token);
    return { data };
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    return Promise.reject(error);
  }
}
