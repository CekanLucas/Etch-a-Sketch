const btn = document.querySelector('#clickCreateElement');

const drawGrid = function() {
  console.log('called')
  // const container = document.createElement('div')
  // container.setAttribute('id', 'container')

  const row = document.createElement('div');
  row.classList.add('columns');
  row.classList.add('row');
  
  const sqr = document.createElement('div');
  sqr.classList.add('column');
  sqr.classList.add('square');
  sqr.cloneNode();
  
  row.appendChild(sqr);
  
  const size = 16;
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

btn.onclick = e => {
  const currentContainer = document.getElementById('container');
  currentContainer.innerHTML = '';
  drawGrid();
};

$(document).ready( function() {
  drawGrid();
  
  btn.addEventListener('mouseleave', function(e) {

  });
})

