import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../app/store';
import Input from '../components/input';
import { selectUser, useLogin } from '../features/user/user-slice';
import useTextInput from '../hooks/use-text-input';

export default function LoginPage() {
  const [username, setUsername] = useTextInput('');
  const [password, setPassword] = useTextInput('');
  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector(selectUser);
  console.log(data);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      const values = { username, password };
      await dispatch(useLogin(values));
    } catch {}
  };

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
                onChange={setUsername}
                placeholder="Enter your email"
              />
              <Input
                label="Password"
                name="password"
                type="password"
                value={password}
                onChange={setPassword}
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
