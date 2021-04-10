import React from "react";
import { Intent } from "src/types";

export type ToastProviderProps = React.PropsWithChildren<{}>;

export type ToastProps = React.PropsWithChildren<{
    intent?: Intent;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}>;

export type ToastContext = {
    toasts: ToastProps[];
    setToasts: React.Dispatch<React.SetStateAction<any[]>>;
};
