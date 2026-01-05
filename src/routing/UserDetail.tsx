import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const UserDetail = () => {
  const param = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  console.log(location);

  return <p>User {param.id}</p>;
};

export default UserDetail;
