import { Intent } from "src/types";

export type ToastProps = React.PropsWithChildren<{
    intent?: Intent;
    onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}>;
