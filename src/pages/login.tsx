import * as React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/user/user-slice';
import useTextInput from '../hooks/use-text-input';

export default function LoginPage() {
  const [email, setEmail] = useTextInput('');
  const [password, setPassword] = useTextInput('');
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = { email, password };
    dispatch(login(values));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="email"
        value={email}
        onChange={setEmail}
        placeholder="email"
      />
      <input
        type="password"
        value={password}
        onChange={setPassword}
        placeholder="password"
      />
      <input type="submit" />
    </form>
  );
}
