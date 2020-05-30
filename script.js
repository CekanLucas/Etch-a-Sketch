const btn = document.querySelector('#clickCreateElement');

$(document).ready( function() {
  const container = document.getElementById('container')
  
  btn.onclick = e => console.log('row');
  
  btn.addEventListener('mouseleave', function (e) {
    const row = document.createElement('div');
    // row.setAttribute('id','continer');
    row.classList.add('columns');
    row.classList.add('row');
    
    const sqr = document.createElement('div');
    sqr.classList.add('column');
    sqr.classList.add('square');
    sqr.cloneNode()

    row.appendChild(sqr);
    
    const size = 16;
    let i = size;
    while (i>0){
      const newRow = row.cloneNode();
      let j = size;
      while (j>0){
        const newSqr = sqr.cloneNode();
        newRow.appendChild(newSqr);
        j--;
      }
      container.appendChild(newRow);
      i--;
    }
    console.log('test', container)
    e.target.style.background = 'red !important';
  });
})

