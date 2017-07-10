const { app, Menu } = require('electron');

module.exports = {
  setMainMenu
};

function setMainMenu(mainWindow) {

  function pageSender (page) {
    mainWindow.webContents.send('page', { count: page });
  }

  let template = [
    {
      label: 'Index',
      submenu: [
        {
          label: 'basic setup',
          click() {
            pageSender(1);
          }
        },
        {
          label: 'flex direction',
          click() {
            pageSender(2);
          }
        },
        {
          label: 'justify content',
          click() {
            pageSender(3);
          }
        },
        {
          label: 'wrapping',
          click() {
            pageSender(4);
          }
        },
        {
          label: 'aligning items',
          click() {
            pageSender(5);
          }
        },
        {
          label: 'aligning content',
          click() {
            pageSender(6);
          }
        },
        {
          label: 'changing order',
          click() {
            pageSender(7);
          }
        },
        {
          label: 'grow',
          click() {
            pageSender(8);
          }
        },
        {
          label: 'aligning specified',
          click() {
            pageSender(9);
          }
        },
        {
          label: 'credit',
          click() {
            pageSender(10);
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
