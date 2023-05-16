import { AlertModalData } from "~/components/AlertModal/AlertModalData";

export type AlertModalProps = {
  data?: AlertModalData;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
};
