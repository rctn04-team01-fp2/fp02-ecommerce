import React from 'react';
import Lottie from 'lottie-react';
import NotFound from '../utils/lotties/not-found.json';
export default function NotFoundAnimation() {
  return (
    <Lottie animationData={NotFound} loop={true} style={{ width: '35%' }} />
  );
}
