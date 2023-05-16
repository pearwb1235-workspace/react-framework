import { AlertModalData } from "~/components";

export type AlertProviderProps = React.PropsWithChildren<{
  defualtAlertData?: Omit<AlertModalData, "content">;
}>;
