import electron from "electron";
import { getMessage } from "./message";
try {
  require("electron-reloader")(module);
} catch {}

const createWindow = () => {
  const win = new electron.BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.webContents.on("new-window", (event, url) => {
    event.preventDefault();
    electron.shell.openExternal(url);
  });

  console.log(`${getMessage()} from main process`);

  win.loadFile("index.html");
};

electron.app.on("ready", createWindow);
