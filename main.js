const { app, BrowserWindow } = require('electron');
const path = require('path');
let mainWindow;
const { setMainMenu } = require('./menu.js');

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false
  });
  mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
  mainWindow.on('ready-to-show', () => {
    setMainMenu(mainWindow);
    mainWindow.show();
  });
});
