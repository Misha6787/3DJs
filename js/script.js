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
            menu = document.querySelector('menu');

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
                btnMenu.addEventListener('click', notAnimFunc);
            } else {
                btnMenu.removeEventListener('click', notAnimFunc);
                btnMenu.addEventListener('click', handlerMenuCall);
            }
        };
        if (screen.width > 768) {
            btnMenu.addEventListener('click', handlerMenuCall);
        } else {
            btnMenu.addEventListener('click', notAnimFunc);
        }
        window.addEventListener('resize', disabledAnim);
        window.addEventListener('click', event => {
            if (menu.style.transform === `translate(100%)`) {
                let target = event.target;
                if (target.closest('ul>li>a')) {
                    if (screen.width > 768) {
                        handlerMenuShow();
                    } else {
                        notAnimFunc();
                    }
                }
                if (target.classList.contains('close-btn')) {
                    if (screen.width > 768) {
                        handlerMenuShow();
                    } else {
                        notAnimFunc();
                    }
                } else {
                    target = target.closest('menu');
                    if (!target) {
                        if (screen.width > 768) {
                            handlerMenuShow();
                        } else {
                            notAnimFunc();
                        }
                    }
                }
            }
        });
    };
    toggleMenu();

    const togglePopUp = () => {
        const   popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn');

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
                popupBtn.forEach(item => item.addEventListener('click', notAnimFunc));
            } else {
                popupBtn.forEach(item => item.removeEventListener('click', notAnimFunc));
                popupBtn.forEach(item => item.addEventListener('click', popupAnimCall));
            }
        };
        if (screen.width > 768) {
            popupBtn.forEach(item => item.addEventListener('click', popupAnimCall));
        } else {
            popupBtn.forEach(item => item.addEventListener('click', notAnimFunc));
        }
        window.addEventListener('resize', disabledAnim);
        popup.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('popup-close')) {
                if (screen.width > 768) {
                    popupAnimShow();
                } else {
                    notAnimFunc();
                }
            } else {
                target = target.closest('.popup-content');
                if (!target) {
                    if (screen.width > 768) {
                        popupAnimShow();
                    } else {
                        notAnimFunc();
                    }
                }
            }
        });
    };
    togglePopUp();

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }
        };
        tabHeader.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            if (target.classList.contains('service-header-tab')) {
                tab.forEach((item, i) => {
                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    };
    tabs();
});
