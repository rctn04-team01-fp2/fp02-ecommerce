import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/nav-bar';
import { userData } from '../utils/account-data';

export default function HomePage() {
  const token = localStorage.getItem('login-token');
  const isAuth = userData.filter((user) => user.token === token);
  const navigate = useNavigate();
  React.useEffect(() => {
    isAuth.length && navigate('/products');
  }, []);
  return (
    <>
      <Navbar auth={false} />
    </>
  );
}
