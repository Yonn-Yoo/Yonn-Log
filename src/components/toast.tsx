'use client';

import { useEffect, useState } from 'react';
import CheckIcon from './svg/check-icon';
import ErrorIcon from './svg/error-icon';
import LoadingIcon from './svg/loading-icon';

type ToastType = {
  show: boolean;
  status: 'pending' | 'success' | 'error';
};

export default function Toast() {
  const [toast, setToast] = useState<ToastType>({
    show: true,
    status: 'error',
  });
  const { show, status } = toast;

  useEffect(() => {
    setTimeout(() => {
      setToast((prev) => ({
        ...prev,
        show: false,
      }));
    }, 3000);
  }, []);

  return (
    <section
      className={`fixed right-1/2 translate-x-1/2 duration-700 ease-out ${
        show ? 'bottom-20' : '-bottom-20'
      }`}
    >
      <div
        className={`rounded-md min-w-[300px] p-3 z-50 flex items-start space-x-2 ${
          show ? 'opacity-100' : 'opacity-0'
        } ${
          status === 'success'
            ? 'bg-green-500'
            : status === 'error'
            ? 'bg-rose-400'
            : 'bg-teal-500'
        }`}
      >
        {status === 'success' ? (
          <CheckIcon />
        ) : status === 'error' ? (
          <ErrorIcon />
        ) : (
          <LoadingIcon />
        )}

        <div>
          <h4 className="text-white font-semibold">
            {status === 'success'
              ? 'Success!'
              : status === 'error'
              ? 'Error!'
              : 'Pending...'}
          </h4>
          <span className="text-white text-sm">Sending Message...</span>
        </div>
      </div>
    </section>
  );
}
