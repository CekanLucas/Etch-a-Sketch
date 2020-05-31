const btn = document.querySelector('#clickCreateElement');

const drawGrid = function(size = 64) {
  console.log('called')

  const row = document.createElement('div');
  row.classList.add('row');
  
  const sqr = document.createElement('div');
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

const inputSize = document.getElementById('number-input');

btn.onclick = e => {
  const currentContainer = document.getElementById('container');
  currentContainer.innerHTML = '';
  drawGrid(inputSize.value);
};

$(document).ready( function() {
  drawGrid();
  
  btn.addEventListener('mouseleave', function(e) {

  });
})

