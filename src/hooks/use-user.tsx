import { useSelector } from 'react-redux';
import { selectUser } from '../features/user/user-slice';

export default function useUser() {
  const user = useSelector(selectUser);
  return user;
}
