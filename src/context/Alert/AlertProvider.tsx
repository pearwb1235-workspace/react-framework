import React from "react";
import { AlertModal, AlertModalData, AlertModalProps } from "~/components";
import { AlertContext } from "~/context/Alert/AlertContext";
import { AlertProviderProps } from "~/context/Alert/AlertProviderProps";

export function AlertProvider({
  defualtAlertData,
  children,
}: AlertProviderProps) {
  const [alertDatas, setAlertDatas] = React.useState<
    Required<AlertModalProps>[]
  >([]);
  const alertDispatch = React.useCallback((newAlertData: AlertModalData) => {
    let isDelete = false;
    const close = () => {
      if (isDelete) return;
      isDelete = true;
      setAlertDatas((originAlertDatas) =>
        originAlertDatas.filter(
          (originAlertData) => originAlertData.data !== newAlertData
        )
      );
    };
    setAlertDatas((originAlertDatas) => [
      ...originAlertDatas,
      { onClose: close, data: newAlertData },
    ]);
    return close;
  }, []);
  const currentAlertData =
    alertDatas.length === 0 ? undefined : alertDatas[alertDatas.length - 1];
  return (
    <AlertContext.Provider
      value={React.useMemo(
        () => ({
          defualtAlertData: defualtAlertData
            ? {
                title: defualtAlertData.title
                  ? defualtAlertData.title
                  : "Notification",
                actions: defualtAlertData.actions
                  ? defualtAlertData.actions
                  : {
                      Confirm: { variant: "contained" },
                    },
                buttonProps: defualtAlertData.buttonProps,
              }
            : {
                title: "Notification",
                actions: {
                  Confirm: { variant: "contained" },
                },
              },
          alertDispatch,
        }),
        [defualtAlertData, alertDispatch]
      )}
    >
      {children}
      <AlertModal
        data={currentAlertData?.data}
        onClose={currentAlertData?.onClose}
      />
    </AlertContext.Provider>
  );
}
