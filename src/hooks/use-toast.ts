//eslint-disable-next-line
import React from 'react';
import { toast, ToastOptions } from 'react-toastify';

export default function useToast() {
  const style: ToastOptions<{}> = {
    position: 'top-right',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'light',
  };
  const fireToast = (type: string, message: string) => {
    if (type === 'success') return toast.success(message, { ...style });
    else if (type === 'error') return toast.error(message, { ...style });
    else if (type === 'info') return toast.info(message, style);
  };
  return { fireToast };
}
