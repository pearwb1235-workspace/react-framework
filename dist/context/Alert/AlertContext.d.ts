import React from "react";
import { AlertModalData } from "../../components";
export declare const AlertContext: React.Context<{
    alertDispatch: (newAlertData: AlertModalData) => () => void;
    defualtAlertData: Omit<AlertModalData, "content">;
}>;
