import { Button } from "@mui/material";
import React from "react";
import { ActionsProps } from "~/components/Actions/ActionsProps";

export function Actions({ actions, ...defaultProps }: ActionsProps) {
  return (
    <>
      {Object.keys(actions).map(
        (key, _index, _array, { text, component, ...props } = actions[key]) => (
          <Button key={key} {...defaultProps} {...props}>
            {component || text || key}
          </Button>
        )
      )}
    </>
  );
}
