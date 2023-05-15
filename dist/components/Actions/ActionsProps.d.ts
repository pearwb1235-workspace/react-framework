import { ButtonTypeMap } from "@mui/material";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";
import { ActionProps } from "./ActionProps";
export type ActionsProps = DefaultComponentProps<ButtonTypeMap> & {
    actions: {
        [key: string]: ActionProps;
    };
};
