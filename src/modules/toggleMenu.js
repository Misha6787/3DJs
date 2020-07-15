/* eslint-disable strict */
'use strict';
const screenWidth = () => Math.max(
    document.body.scrollWidth, document.documentElement.scrollWidth,
    document.body.offsetWidth, document.documentElement.offsetWidth,
    document.body.clientWidth, document.documentElement.clientWidth
);

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
            if (screenWidth() > 768) {
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
                if (screenWidth() > 768) {
                    handlerMenuShow();
                } else {
                    notAnimFunc();
                }
            }
            if (target.classList.contains('close-btn')) {
                if (screenWidth() > 768) {
                    handlerMenuShow();
                } else {
                    notAnimFunc();
                }
            } else {
                target = target.closest('menu');
                if (!target) {
                    if (screenWidth() > 768) {
                        handlerMenuShow();
                    } else {
                        notAnimFunc();
                    }
                }
            }
        }
    });
};

export default toggleMenu;
