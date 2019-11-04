var mapForm = document.querySelector('.pop-up-map');
var imgMap = document.querySelector('.pop-map');
var closeBtn = document.querySelector('.map-btn');

imgMap.addEventListener('click', (e) => {
    e.preventDefault();
    mapForm.classList.add('pop-up-map-block');
})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mapForm.classList.remove('pop-up-map-block');
})