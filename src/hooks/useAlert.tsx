import React from "react";
import { AlertModalData } from "~/components";
import { AlertContext } from "~/context";

export type AlertModelCloseHandler = () => void;

/**
 * 回傳一個產生 AlertModal 的方法
 */
export function useAlert() {
  const consumer = React.useContext(AlertContext);
  if (!consumer)
    throw new Error("[useAlert] Must be used within a AlertProvider.");
  const { alertDispatch, defualtAlertData } = consumer;
  /**
   * 產生 AlertModal 並回傳一個關閉它的方法
   */
  function alert(data: AlertModalData): AlertModelCloseHandler;
  /**
   * 產生 AlertModal 並回傳一個關閉它的方法
   */
  function alert(
    content: Required<AlertModalData>["content"]
  ): AlertModelCloseHandler;
  /**
   * 產生 AlertModal 並回傳一個關閉它的方法
   */
  function alert(
    title: Required<AlertModalData>["title"],
    content: Required<AlertModalData>["content"]
  ): AlertModelCloseHandler;
  /**
   * 產生 AlertModal 並回傳一個關閉它的方法
   */
  function alert(
    content: Required<AlertModalData>["content"],
    actions: Required<AlertModalData>["actions"]
  ): AlertModelCloseHandler;
  /**
   * 產生 AlertModal 並回傳一個關閉它的方法
   */
  function alert(
    title: Required<AlertModalData>["title"],
    content: Required<AlertModalData>["content"],
    actions: Required<AlertModalData>["actions"]
  ): AlertModelCloseHandler;
  function alert(
    ...parms:
      | [AlertModalData]
      | [Required<AlertModalData>["content"]]
      | [Required<AlertModalData>["title"], Required<AlertModalData>["content"]]
      | [
          Required<AlertModalData>["content"],
          Required<AlertModalData>["actions"]
        ]
      | [
          Required<AlertModalData>["title"],
          Required<AlertModalData>["content"],
          Required<AlertModalData>["actions"]
        ]
  ) {
    try {
      if (parms.length === 1 && typeof parms[0] === "object") {
        return alertDispatch(parms[0]);
      } else if (parms.length === 1 && typeof parms[0] === "string") {
        return alertDispatch({
          ...defualtAlertData,
          content: parms[0],
        });
      } else if (parms.length === 2 && typeof parms[1] === "object") {
        return alertDispatch({
          ...defualtAlertData,
          content: parms[0],
          actions: parms[1],
        });
      } else if (parms.length === 2 && typeof parms[1] === "string") {
        return alertDispatch({
          ...defualtAlertData,
          title: parms[0],
          content: parms[1],
        });
      } else if (parms.length === 3) {
        return alertDispatch({
          ...defualtAlertData,
          title: parms[0],
          content: parms[1],
          actions: parms[2],
        });
      } else {
        throw new Error(
          "[useAlert] Invalid call with mismatched number or types of arguments."
        );
      }
    } catch (err) {
      console.error(err);
    }
    throw new Error(
      "[useAlert] An internal error occurred while handling the exception."
    );
  }
  return React.useCallback(alert, [alertDispatch]);
}
