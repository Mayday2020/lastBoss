'use strict';

// Модальное окно

const popup = () => {
    const popupItem = document.querySelector('.popup-call'),
        callMe = document.querySelectorAll('a.call-btn'),
        popupDiv = document.querySelector('.popup');
        
    const popupDisplay = () => {
        popupItem.style.display = 'block';
    };
    callMe.forEach((elem) => {
        elem.addEventListener('click', popupDisplay);
    });
        
    popupDiv.addEventListener('click', (event) => {
        let target = event.target;
        if (target.classList.contains('popup-close')){
            popupDiv.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if(!target) {
            popupDiv.style.display = 'none';
            }
        }
    });
};
popup();