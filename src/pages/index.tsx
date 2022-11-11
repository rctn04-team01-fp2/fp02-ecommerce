import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/nav-bar';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar auth={false} />
      <main>
        <div className="flex justify-between w-full px-32 py-32 content-center">
          <div className="flex justify-center flex-col gap-16">
            <h1 className="text-brand font-bold flex-wrap flex max-w-sm ">
              Everyone’s collection and style
            </h1>
            <div className="max-w-2/5 flex-wrap flex">
              A collection of clothes with cotemporary styles and trends that
              make you look even cooler
            </div>
            <button
              className="font-sans font-bold text-base text-baseWhite bg-purple bg-opacity-80 hover:opacity-80 px-8 py-8 rounded-md border-none w-fit"
              onClick={() => navigate('/login')}
            >
              Explore More
            </button>
          </div>
          <img
            src="/background-landing.svg"
            alt="background-image"
            className="w-3/5"
          />
        </div>
      </main>
    </>
  );
}
