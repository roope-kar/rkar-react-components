import React from 'react';
import { ToastProps, ToastContext as ToastContextType } from 'src/components/Toast/Toast.d';
import ToastContext from 'src/components/Toast/Toast.context';

export default function useToast() {
  const { toasts, setToasts } = React.useContext<ToastContextType>(ToastContext);
  return {
    toasts,
    appendToast(component: React.FunctionComponent<ToastProps>) {
      setToasts((prevToasts: React.FunctionComponent<ToastProps>[]) => [...prevToasts, component]);
    },
  };
}
