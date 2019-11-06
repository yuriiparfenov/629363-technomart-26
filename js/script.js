var mapForm = document.querySelector('.pop-up-map');
var imgMap = document.querySelector('.pop-map');
var closeBtn = document.querySelector('.map-btn');

var BtnFormOpen = document.querySelector('.cont-link');
var form = document.querySelector('.visually-hidden');
var CloseFormBtn = document.querySelector('.form-btn');


var formSubmitBtn = form.querySelector('.f-btn');
var InputName = form.querySelector('[name=name]');
var InputEmail = form.querySelector('[name=email]');
var InputTextArea = form.querySelector('[name=letter]');

var storageName = '';
var isStorageSupport = true;

try {
    storageName = localStorage.getItem('name');
} catch (err) {
    isStorageSupport = false;
}

imgMap.addEventListener('click', (e) => {
    e.preventDefault();
    mapForm.classList.add('pop-up-map-block');
})

BtnFormOpen.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.add('form-class');
    if (storageName) {
        InputEmail.focus();
    } else {
        InputName.focus();
    }

})

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mapForm.classList.remove('pop-up-map-block');
    console.log('CLOSED');
})

CloseFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    form.classList.remove('form-class');
    form.classList.remove('modul-error');
})

formSubmitBtn.addEventListener('click', (e) => {


    if (!InputName.value || !InputEmail.value || !InputTextArea.value) {
        e.preventDefault();
        if (!form.classList.contains('modul-error')) {
            form.classList.add('modul-error');

        }
    } else {
        if (isStorageSupport) {
            localStorage.setItem('name', InputName.value);
        }
    }

})


window.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) {
        if (form.classList.contains('form-class')) {
            e.preventDefault();
            form.classList.remove('form-class');
        }
        if (mapForm.classList.contains('pop-up-map-block')) {
            e.preventDefault();
            mapForm.classList.remove('pop-up-map-block');
        }
    }
})