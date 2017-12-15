document.querySelector('body').classList.remove('nojs');

var modalTrigger = document.querySelector('.search-hotel');
var modal = document.querySelector('.search-form');

modalTrigger.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.toggle('opened')
  });

