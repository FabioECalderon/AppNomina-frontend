import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className=" flex flex-col gap-2 place-self-center m-5">
      <h1>404 Página no encontrada</h1>
      <Link to="/">Regresar al inicio</Link>
    </div>
  );
}
