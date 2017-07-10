const { ipcRenderer } = require('electron');

let page = 0;

document.getElementById('instruct').innerHTML = "<h1>cesar</h1>";

ipcRenderer.on('page', (event, props) => {
  img = `<img class="instruction" src="./images/flexbox_${props.count}.png" />`;
  document.getElementById('instruct').innerHTML = img;
});
