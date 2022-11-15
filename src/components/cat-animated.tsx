import React from 'react';
import Lottie from 'lottie-react';
import Cat from '../utils/lotties/cat.json';
export default function CatAnimation() {
  return (
    <Lottie
      animationData={Cat}
      loop
      autoplay
      style={{ width: '300px', height: '300px' }}
    />
  );
}
