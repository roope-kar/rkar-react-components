import React from 'react';
import type { ToastContext } from 'src/components/Toast/Toast.d';

export default React.createContext<ToastContext>({
  toasts: [],
  setToasts: () => null,
});
