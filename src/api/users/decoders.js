import { UserOutput } from './types';

export async function decodeUserOutput(payload) {
  try {
    const data = await UserOutput.parseAsync(payload);
    return data;
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
    return Promise.reject(error);
  }
}
