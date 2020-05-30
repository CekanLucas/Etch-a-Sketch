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
    sqr.classList.add('sqr');

    row.appendChild(sqr)
    container.appendChild(row)
    console.log('test', container)
    e.target.style.background = 'red !important';
  });
})

