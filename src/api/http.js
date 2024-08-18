import axios from 'axios';
import { clearSession, getSession } from './session';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
