import { AlertModalData } from "../components";
export type AlertModelCloseHandler = () => void;
/**
 * 回傳一個產生 AlertModal 的方法
 */
export declare function useAlert(): {
    (data: AlertModalData): AlertModelCloseHandler;
    (content: Required<AlertModalData>["content"]): AlertModelCloseHandler;
    (title: Required<AlertModalData>["title"], content: Required<AlertModalData>["content"]): AlertModelCloseHandler;
    (content: Required<AlertModalData>["content"], actions: Required<AlertModalData>["actions"]): AlertModelCloseHandler;
    (title: Required<AlertModalData>["title"], content: Required<AlertModalData>["content"], actions: Required<AlertModalData>["actions"]): AlertModelCloseHandler;
};
