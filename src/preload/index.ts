import { contextBridge, ipcRenderer } from "electron";

function getMessage(): Promise<string> {
  return ipcRenderer.invoke("get-message");
}

contextBridge.exposeInMainWorld("electron", {
  getMessage,
});
