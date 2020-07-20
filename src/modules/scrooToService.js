/* eslint-disable strict */
'use strict';
const scrooToService = () => {
    const buttonScrool = document.querySelector('[href="#service-block"]');
    const menu = document.querySelector('menu');
    let count = 0;
    const scroolinterval = event => {
        const target = event.target;
        event.preventDefault();
        const scroolPoint = document.documentElement.scrollTop;
        count += scroolPoint;
        let distanceToBlock;
        if (target.closest('[href="#service-block"]')) {
            distanceToBlock = 890;
        } else if (target.closest('[href="#portfolio"]')) {
            distanceToBlock = 1460;
        } else if (target.closest('[href="#calc"]')) {
            distanceToBlock = 2440;
        } else if (target.closest('[href="#command"]')) {
            distanceToBlock = 3520;
        } else if (target.closest('[href="#connect"]')) {
            distanceToBlock = 4580;
        }
        const animScrooToService = () => {
            const animScrool = requestAnimationFrame(animScrooToService);
            if (count < distanceToBlock) {
                document.documentElement.scrollTop = `${count}`;
                count += 27;
            } else {
                cancelAnimationFrame(animScrool);
                count = 0;
            }
        };
        animScrooToService();
    };
    menu.addEventListener('click', event => {
        scroolinterval(event);
    });
    buttonScrool.addEventListener('click', event => {
        scroolinterval(event);
    });
};

export default scrooToService;
