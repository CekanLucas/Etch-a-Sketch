const btn = document.querySelector('#clickCreateElement');
btn.onclick = e => console.log(e);

btn.addEventListener('mouseleave', function (e) {
  e.target.style.background = 'red !important';
});