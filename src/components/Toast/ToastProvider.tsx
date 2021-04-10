import React from 'react';
import ToastContext from 'src/components/Toast/Toast.context';
import type { ToastProviderProps, ToastProps } from 'src/components/Toast/Toast.d';

const ToastProvider: React.FunctionComponent<ToastProviderProps> = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = React.useState<ToastProps[]>([]);
  // Inject toast container to page
  return <ToastContext.Provider value={{ toasts, setToasts }}>{children}</ToastContext.Provider>;
};

export default ToastProvider;
