document.addEventListener("DOMContentLoaded", function(event) { 
const drawGrid = function(size = 64) {
  const randNum = Math.random() * 360;


  const row = document.createElement('div');
  row.classList.add('row');
  
  const sqr = document.createElement('div');
  sqr.classList.add('square');
  sqr.cloneNode();
  
  row.appendChild(sqr);
  
  let hue = randNum;
  let i = size;
  while (i>0){
    const newRow = row.cloneNode();
    let j = size;
    while (j>0){
      const newSqr = sqr.cloneNode();
      newSqr.addEventListener('mouseleave', e => mouseLeaveChangeBackGround(e));
      newRow.appendChild(newSqr);
      j--;
    }
    container.appendChild(newRow);
    i--;
  }
  const mouseLeaveChangeBackGround = event => {
    hue += 2;
    event.target.style.background = `hsl(${hue}deg, 100%, 50%)`;
  }
}

const inputSize = document.getElementById('number-input');
const btn = document.querySelector('#clickCreateElement');

btn.onclick = e => {
  const currentContainer = document.getElementById('container');
  currentContainer.innerHTML = '';
  drawGrid(inputSize.value);
};

drawGrid();
  
btn.addEventListener('mouseleave', function(e) {

});
})

