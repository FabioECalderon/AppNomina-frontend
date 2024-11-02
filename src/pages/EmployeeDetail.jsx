import { useParams } from 'react-router-dom';

export default function EmployeeDetail() {
  const params = useParams();
  console.log(params);
  return <div>Employee Detail</div>;
}
