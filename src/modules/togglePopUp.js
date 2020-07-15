/* eslint-disable strict */
'use strict';
const screenWidth = () => Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
);
const togglePopUp = () => {
    const popup = document.querySelector('.popup');
    let count = 0;
    const popupAnimCall = () => {
        const popupAnimC = requestAnimationFrame(popupAnimCall);
        if (count < 1) {
            popup.style.opacity = `${count}`;
        } else {
            cancelAnimationFrame(popupAnimC);
        }
        count += 0.1;
        popup.style.display = 'block';
    };
    const popupAnimShow = () => {
        const popupAnimS = requestAnimationFrame(popupAnimShow);
        if (count > -0.1) {
            popup.style.opacity = `${count}`;
        } else {
            cancelAnimationFrame(popupAnimS);
            popup.style.display = 'none';
        }
        count -= 0.1;
    };
    const notAnimFunc = () => {
        if (popup.style.display === '' || popup.style.display === 'none') {
            popup.style.display = 'block';
            popup.style.opacity = '1';
        } else if (popup.style.display === 'block') {
            popup.style.display = '';
        }
    };
    window.addEventListener('click', event => {
        let target = event.target;
        const timeStart = () => {
            if (screenWidth() > 768) {
                popupAnimCall();
            } else {
                notAnimFunc();
            }
        };
        if (target.closest('.popup-btn')) {
            setTimeout(timeStart, 0);
        }
        if (popup.style.display === 'block') {
            if (target.classList.contains('popup-close')) {
                if (screenWidth() > 768) {
                    popupAnimShow();
                } else {
                    notAnimFunc();
                }
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    if (screenWidth() > 768) {
                        popupAnimShow();
                    } else {
                        notAnimFunc();
                    }
                }
            }
        }
    });
};

export default togglePopUp;
