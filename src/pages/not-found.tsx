import React from 'react';
import { useNavigate } from 'react-router-dom';
import NotFoundAnimation from '../components/not-found-animated';

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center flex-col flex-wrap text-center gap-4">
      <NotFoundAnimation />
      <p>
        The page you are looking for doesn&apos;t exist or another error
        occured. <br /> Go back,or head over to
      </p>
      <button
        className="font-sans font-bold text-base text-baseWhite bg-purple bg-opacity-80 hover:opacity-80 px-32 py-8 border-none w-fit rounded-small"
        onClick={() => navigate('/')}
      >
        Homepage
      </button>
    </div>
  );
}
