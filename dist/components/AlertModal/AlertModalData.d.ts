import { ButtonTypeMap } from "@mui/material";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";
import { ActionsProps } from "../Actions";
export type AlertModalData = {
    title?: string;
    content: string;
    actions?: ActionsProps["actions"];
    buttonProps?: DefaultComponentProps<ButtonTypeMap>;
};
