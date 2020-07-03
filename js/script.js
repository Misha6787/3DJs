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
        const menu = document.querySelector('menu');
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
        window.addEventListener('click', event => {
            let target = event.target;
            const timeStart = () => {
                if (screen.width > 768) {
                    handlerMenuCall();
                } else {
                    notAnimFunc();
                }
            };
            if (target.closest('.menu')) {
                setTimeout(timeStart, 0);
            }
            if (menu.style.transform === `translate(100%)`) {
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
                if (screen.width > 768) {
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
    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            slider = document.querySelector('.portfolio-content'),
            portfolioDots = document.querySelector('.portfolio-dots');

        slide.forEach(() => {
            const dotItem = document.createElement('li');
            dotItem.classList.add('dot');
            portfolioDots.append(dotItem);
        });

        const dot = document.querySelectorAll('.dot');

        let currentSlide = 0,
            interval;
        const prevSlide = (elem, index, strClass) => elem[index].classList.remove(strClass);
        const nextSlide = (elem, index, strClass) => elem[index].classList.add(strClass);

        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };
        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };
        const stopSlide = () => {
            clearInterval(interval);
        };
        slider.addEventListener('click', event => {
            event.preventDefault();
            const target = event.target;
            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                stopSlide();
            }
        });
        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
                startSlide();
            }
        });
        startSlide(1500);
    };
    slider();
});
