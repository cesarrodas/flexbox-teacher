const { app, Menu } = require('electron');

module.exports = {
  setMainMenu
};

function setMainMenu(mainWindow) {

  let template = [
    {
      label: 'Index',
      submenu: [
        {
          label: 'basic setup',
          click() {

          }
        },
        {
          label: 'flex direction',
          click() {

          }
        },
        {
          label: 'justify content',
          click() {

          }
        },
        {
          label: 'wrapping',
          click() {

          }
        },
        {
          label: 'aligning items',
          click() {

          }
        },
        {
          label: 'aligning content',
          click() {

          }
        },
        {
          label: 'changing order',
          click() {

          }
        },
        {
          label: 'grow',
          click() {

          }
        },
        {
          label: 'aligning specified',
          click() {

          }
        },
        {
          label: 'credit',
          click() {
            
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}
