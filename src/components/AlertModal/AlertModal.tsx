import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import { Actions } from "~/components/Actions";
import { AlertModalData } from "~/components/AlertModal/AlertModalData";

export function AlertModal({
  data,
  onClose,
}: {
  data?: AlertModalData;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Dialog open={Boolean(data)} fullWidth maxWidth={"xs"}>
      <DialogTitle>{data?.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{data?.content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {data?.actions ? (
          <Actions
            actions={data.actions}
            onClick={onClose}
            {...data.buttonProps}
          />
        ) : null}
      </DialogActions>
    </Dialog>
  );
}
