import React from "react";
import { AlertModalData } from "~/components";

export const AlertContext = React.createContext<{
  alertDispatch: (newAlertData: AlertModalData) => () => void;
  defualtAlertData: Omit<AlertModalData, "content">;
}>(undefined);
