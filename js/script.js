/* eslint-disable strict */
window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const countTimer = deadline => {
        const   timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        const getTimeRemaining = () => {
            const   dataStop = new Date(deadline).getTime(),
                dataNow = new Date().getTime(),
                timeRemaining = (dataStop - dataNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return { seconds, minutes, hours, timeRemaining };
        };
        const addNull = (elem, elemText) => {
            if (elem.toString().length === 1) {
                elem = '0' + elem.toString().slice(0);
                elemText.textContent = elem;
            } else {
                elemText.textContent = elem;
            }
        };
        const updateClock = () => {
            const timer = getTimeRemaining();
            addNull(timer.hours, timerHours);
            addNull(timer.minutes, timerMinutes);
            addNull(timer.seconds, timerSeconds);

            if (timer.timeRemaining < 0) {
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                // eslint-disable-next-line no-use-before-define
                clearInterval(interval);
            }
        };
        const interval = setInterval(updateClock, 1000);
    };
    countTimer('04 July 2020');

    const toggleMenu =  () => {
        const   btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        let count = 0;
        const handlerMenuCall = () => {
            const menuAnimCall = requestAnimationFrame(handlerMenuCall);
            if (count < 120) {
                menu.style.transform = `translate(${count}%)`;
            } else {
                cancelAnimationFrame(menuAnimCall);
            }
            count += 20;
        };
        const handlerMenuShow = () => {
            const menuAnimShow = requestAnimationFrame(handlerMenuShow);
            if (count > -120) {
                menu.style.transform = `translate(${count}%)`;
            } else {
                cancelAnimationFrame(menuAnimShow);
            }
            count -= 20;
        };
        const notAnimFunc = () => {
            if (!menu.style.transform || menu.style.transform === 'translate(-100%)') {
                menu.style.transform = `translate(100%)`;
            } else {
                menu.style.transform = 'translate(-100%)';
            }
        };
        const disabledAnim = () => {
            if (screen.width < 768) {
                btnMenu.removeEventListener('click', handlerMenuCall);
                closeBtn.removeEventListener('click', handlerMenuShow);
                menuItems.forEach(item => item.removeEventListener('click', handlerMenuShow));
                btnMenu.addEventListener('click', notAnimFunc);
                closeBtn.addEventListener('click', notAnimFunc);
                menuItems.forEach(item => item.addEventListener('click', notAnimFunc));
            } else {
                btnMenu.removeEventListener('click', notAnimFunc);
                closeBtn.removeEventListener('click', notAnimFunc);
                menuItems.forEach(item => item.removeEventListener('click', notAnimFunc));
                btnMenu.addEventListener('click', handlerMenuCall);
                closeBtn.addEventListener('click', handlerMenuShow);
                menuItems.forEach(item => item.addEventListener('click', handlerMenuShow));
            }
        };
        if (screen.width > 768) {
            btnMenu.addEventListener('click', handlerMenuCall);
            closeBtn.addEventListener('click', handlerMenuShow);
            menuItems.forEach(item => item.addEventListener('click', handlerMenuShow));
        } else {
            btnMenu.addEventListener('click', notAnimFunc);
            closeBtn.addEventListener('click', notAnimFunc);
            menuItems.forEach(item => item.addEventListener('click', notAnimFunc));
        }
        window.addEventListener('resize', disabledAnim);
    };
    toggleMenu();

    const togglePopUp = () => {
        const   popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close');

        let     count = 0;

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
        const disabledAnim = () => {
            if (screen.width < 768) {
                popupBtn.forEach(item => item.removeEventListener('click', popupAnimCall));
                popupClose.removeEventListener('click', popupAnimShow);
                popupBtn.forEach(item => item.addEventListener('click', notAnimFunc));
                popupClose.addEventListener('click', notAnimFunc);
            } else {
                popupBtn.forEach(item => item.removeEventListener('click', notAnimFunc));
                popupClose.removeEventListener('click', notAnimFunc);
                popupBtn.forEach(item => item.addEventListener('click', popupAnimCall));
                popupClose.addEventListener('click', popupAnimShow);
            }
        };
        if (screen.width > 768) {
            popupBtn.forEach(item => item.addEventListener('click', popupAnimCall));
            popupClose.addEventListener('click', popupAnimShow);
        } else {
            popupBtn.forEach(item => item.addEventListener('click', notAnimFunc));
            popupClose.addEventListener('click', notAnimFunc);
        }
        window.addEventListener('resize', disabledAnim);
    };
    togglePopUp();
});
