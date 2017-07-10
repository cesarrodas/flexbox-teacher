const { ipcRenderer } = require('electron');

let page = 1;


function render(page) {
  img = `<img class="instruction" src="./images/flexbox_${page}.png" />`;
  document.getElementById('instruct').innerHTML = img;
}

document.getElementById('back').onclick = function lastPage () {
  if(page > 1){
    page = page - 1;
    render(page);
  }
};

document.getElementById('next').onclick = function nextPage () {
  if(page < 10){
    page = page + 1;
    render(page);
  }
}

ipcRenderer.on('page', (event, props) => {
  //img = `<img class="instruction" src="./images/flexbox_${props.count}.png" />`;
  //document.getElementById('instruct').innerHTML = img;
  render(props.count);
});

render(1);
