/* eslint-disable no-useless-escape */
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

    const scrooToService = () => {
        event.preventDefault();
        const buttonScrool = document.querySelector('[href="#service-block"]');
        let count = 0;
        const scroolinterval = () => {
            const scroolPoint = document.documentElement.scrollTop;
            count += scroolPoint;
            const animScrooToService = () => {
                const animScrool = requestAnimationFrame(animScrooToService);
                if (count < 918) {
                    document.documentElement.scrollTop = `${count}`;
                    count += 27;
                } else {
                    cancelAnimationFrame(animScrool);
                    count = 0;
                }
            };
            animScrooToService();
        };
        buttonScrool.addEventListener('click', scroolinterval);
    };
    scrooToService();

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
    const validCostInput = () => {
        const input = document.querySelectorAll('input.calc-item');
        const validInput = item => item.value = item.value.replace(/\D/g, '');
        input.forEach(item => item.addEventListener('input', () => validInput(item)));
    };
    validCostInput();
    const hoverImg = () => {
        const command = document.querySelector('#command');
        let srcImg;
        const mouseoverElem = event => {
            const target = event.target;
            if (target.classList.contains('command__photo')) {
                srcImg = target.src;
                target.src = target.dataset.img;
            }
        };
        const mouseoutElem = event => {
            const target = event.target;
            if (target.classList.contains('command__photo')) {
                target.src = srcImg;
            }
        };
        command.addEventListener('mouseover', mouseoverElem);
        command.addEventListener('mouseout', mouseoutElem);
    };
    hoverImg();
    const calc = (price = 100) => {
        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcCount = document.querySelector('.calc-count'),
            calcDay = document.querySelector('.calc-day');
        function scroll(val, el, timeout, step) {
            let i = 0;
            (function scrollIns() {
                if (i <= val) {
                    setTimeout(scrollIns, timeout);
                    document.getElementById(el).textContent = i;
                    i += step;
                } else {
                    document.getElementById(el).textContent = val;
                }
            })();
        }
        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value,
                squareValue = +calcSquare.value;
            if (calcCount.value > 1) {
                countValue += (+calcCount.value - 1) / 10;
            }
            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            } else {
                dayValue *= 1;
            }
            if (typeValue && squareValue) {
                total = Math.round(price * typeValue * squareValue * countValue * dayValue);
                scroll(total, 'total', 5, 60);
            }
        };
        calcBlock.addEventListener('change', event => {
            const target = event.target;
            if (target.matches('select') || target.matches('input')) {
                countSum();
            }
        });
    };
    calc();
    const sendForm = () => {
        const errorMessage = 'Что то пошло не так...',
            loadMessage = document.createElement('div'),
            successMessage = 'Спасибо мы скоро с вами свяжемся';
        loadMessage.id = 'hellopreloader_preload';
        const postData = (body, outputData, errorData) => {
            const request = new XMLHttpRequest();
            request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4) {
                    return;
                }
                if (request.status === 200) {
                    outputData();
                } else {
                    errorData(request.status);
                }
            });
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));
        };

        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem; color: white; margin-top: 10px; margin-bottom: 10px';

        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            [...form.elements].forEach(item => {
                item.addEventListener('keyup', () => {
                    if (item.getAttribute('name') === 'user_phone') {
                        item.value = item.value.replace(/\D/g, '');
                    } else if (item.getAttribute('name') === 'user_name') {
                        item.value = item.value.replace(/(^[a-zA-z0-9]{1,}$)/, '');
                    } else if (item.getAttribute('name') === 'user_message') {
                        item.value = item.value.replace(/(^[a-zA-z]{1,}$)/, '');
                    }
                });
            });
            form.addEventListener('submit', event => {
                event.preventDefault();
                statusMessage.textContent = '';
                [...form.elements].forEach(item => {
                    if (item.tagName.toLowerCase() === 'input') {
                        item.value = '';
                    }
                });
                form.appendChild(statusMessage);
                statusMessage.appendChild(loadMessage);
                const body = {};
                const formData = new FormData(form);
                formData.forEach((val, key) => {
                    body[key] = val;
                });
                postData(
                    body,
                    () => {
                        loadMessage.remove();
                        statusMessage.textContent = successMessage;
                    },
                    error => {
                        statusMessage.textContent = errorMessage;
                        console.error(error);
                    }
                );
            });
        });
    };
    sendForm();
});
