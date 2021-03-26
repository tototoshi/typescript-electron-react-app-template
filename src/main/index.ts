import path from "path";
import electron from "electron";
import { getMessage } from "./message";

const createWindow = () => {
  const win = new electron.BrowserWindow({
    webPreferences: {
      preload: path.resolve(__dirname, "../preload/bundle.js"),
    },
  });

  win.webContents.on("new-window", (event, url) => {
    event.preventDefault();
    electron.shell.openExternal(url);
  });

  electron.ipcMain.handle("get-message", async () => {
    return `${getMessage()} from the main process`;
  });

  win.loadFile("index.html");
};

electron.app.on("ready", createWindow);
