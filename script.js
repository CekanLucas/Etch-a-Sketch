const btn = document.querySelector('#clickCreateElement');

const drawGrid = function(size = 16) {
  console.log('called')
  // const container = document.createElement('div')
  // container.setAttribute('id', 'container')

  const row = document.createElement('div');
  // row.classList.add('columns');
  row.classList.add('row');
  
  const sqr = document.createElement('div');
  // sqr.classList.add('column');
  sqr.classList.add('square');
  sqr.cloneNode();
  
  row.appendChild(sqr);
  
  let i = size;
  while (i>0){
    const newRow = row.cloneNode();
    let j = size;
    while (j>0){
      const newSqr = sqr.cloneNode();
      newSqr.addEventListener('mouseleave',e=>e.target.style.background = 'green')
      newRow.appendChild(newSqr);
      j--;
    }
    container.appendChild(newRow);
    i--;
  }
}

const rangeSize = document.getElementById('range-size');
const counterSize = document.getElementById('counter-size');
rangeSize.addEventListener( 'input', function(e) {
  counterSize.textContent = rangeSize.value
})

btn.onclick = e => {
  const currentContainer = document.getElementById('container');
  currentContainer.innerHTML = '';
  drawGrid(rangeSize.value);
};

$(document).ready( function() {
  drawGrid();
  
  btn.addEventListener('mouseleave', function(e) {

  });
})

