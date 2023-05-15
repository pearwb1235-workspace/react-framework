import { ButtonTypeMap } from "@mui/material";
import { DefaultComponentProps } from "@mui/material/OverridableComponent";
import React from "react";
export type ActionProps = DefaultComponentProps<ButtonTypeMap> & {
    text?: string;
    component?: React.JSX.Element;
};
