import * as React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import Input from '../components/input';
import { useLogin } from '../features/user/user-slice';
import useUser from '../hooks/use-user';

export default function LoginPage() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChangeUsername = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(e.target.value);
    },
    [],
  );
  const onChangePassword = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
    },
    [],
  );

  const dispatch = useDispatch<AppDispatch>();
  const data = useUser();
  console.log(data);

  const onSubmit = React.useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await dispatch(useLogin({ username, password }));
      } catch {}
    },
    [username, password],
  );

  return (
    <main className="w-100 h-screen  px-25 py-25">
      <div className="h-full flex">
        <div className="basis-6/12 bg-purple rounded-normal flex justify-center items-center flex-col">
          <img
            src="/brand-logo.svg"
            alt="brand-logo"
            className="h-32 absolute py-4 left-36 top-32"
          />

          <img
            src="/login-picture.svg"
            alt="login-picture"
            className="max-w-7/12"
          />
          <div className="min-w-7/12 relative text-baseWhite">
            <p className="text-md font-bold">STYLE.</p>
            <hr className="border-baseWhite border-t-2" />
            <p className="absolute right-4 max-w-1/2 text-right italic ">
              a simple way of saying complicated things.
            </p>
          </div>
        </div>
        <div className="basis-6/12 h-full flex pl-64 items-center">
          <div className="w-1/2">
            <p className="font-bold text-xmd m-none mb-2 p-none">
              Welcome Back
            </p>
            <form
              onSubmit={(e) => {
                void onSubmit(e);
              }}
              className="flex flex-col gap-16"
            >
              <Input
                label="Email / Username"
                name="username"
                type="text"
                value={username}
                onChange={onChangeUsername}
                placeholder="Enter your email"
              />
              <Input
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={onChangePassword}
                placeholder="Enter your password"
              />
              <button
                type="submit"
                className="font-sans font-bold text-base text-baseWhite bg-purple bg-opacity-80 hover:opacity-80 px-64 py-8 border-none w-full   rounded-small"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
