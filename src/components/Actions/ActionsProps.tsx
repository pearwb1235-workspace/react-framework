import { ButtonTypeMap } from "@mui/material";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";
import { ActionProps } from "~/components/Actions/ActionProps";

export type ActionsProps = DefaultComponentProps<ButtonTypeMap> & {
  actions: {
    [key: string]: ActionProps;
  };
};
