/// <reference types="react" />
import { AlertModalData } from "./AlertModalData";
export type AlertModalProps = {
    data?: AlertModalData;
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
};
