const { app, BrowserWindow, nativeImage } = require('electron');
const path = require('path');
let mainWindow;
const { setMainMenu } = require('./menu.js');
const icon = nativeImage.createFromPath(path.join(__dirname, 'build', 'icon.png'));

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false,
    icon: icon
  });
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
  mainWindow.on('ready-to-show', () => {
    setMainMenu(mainWindow);
    mainWindow.show();
    //mainWindow.webContents.openDevTools();
  });
});
