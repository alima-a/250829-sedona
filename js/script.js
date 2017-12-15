document.querySelector('body').classList.remove('nojs');

var modalTrigger = document.querySelector('.search-hotel');
var modal = document.querySelector('.search-form');
var date = modal.querySelector('[name=arrival-date]');

modalTrigger.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.toggle('nojs')
  });

