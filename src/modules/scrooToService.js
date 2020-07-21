/* eslint-disable strict */
'use strict';
const scrooToService = () => {
    const screenWidth = () => Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );
    const buttonScrool = document.querySelector('[href="#service-block"]');
    const menu = document.querySelector('menu');
    let count = 0;
    const scroolinterval = event => {
        const target = event.target;
        event.preventDefault();
        const scroolPoint = document.documentElement.scrollTop;
        count += scroolPoint;
        let distanceToBlock;
        if (screenWidth() <= 320) {
            if (target.closest('[href="#service-block"]')) {
                distanceToBlock = 840;
            } else if (target.closest('[href="#portfolio"]')) {
                distanceToBlock = 1490;
            } else if (target.closest('[href="#calc"]')) {
                distanceToBlock = 1920;
            } else if (target.closest('[href="#command"]')) {
                distanceToBlock = 3836;
            } else if (target.closest('[href="#connect"]')) {
                distanceToBlock = 6035;
            }
        } else if (screenWidth() <= 360) {
            if (target.closest('[href="#service-block"]')) {
                distanceToBlock = 840;
            } else if (target.closest('[href="#portfolio"]')) {
                distanceToBlock = 1390;
            } else if (target.closest('[href="#calc"]')) {
                distanceToBlock = 1820;
            } else if (target.closest('[href="#command"]')) {
                distanceToBlock = 3680;
            } else if (target.closest('[href="#connect"]')) {
                distanceToBlock = 6080;
            }
        } else if (screenWidth() <= 375) {
            if (target.closest('[href="#service-block"]')) {
                distanceToBlock = 800;
            } else if (target.closest('[href="#portfolio"]')) {
                distanceToBlock = 1340;
            } else if (target.closest('[href="#calc"]')) {
                distanceToBlock = 1740;
            } else if (target.closest('[href="#command"]')) {
                distanceToBlock = 3630;
            } else if (target.closest('[href="#connect"]')) {
                distanceToBlock = 6120;
            }
        } else if (screenWidth() <= 430) {
            if (target.closest('[href="#service-block"]')) {
                distanceToBlock = 800;
            } else if (target.closest('[href="#portfolio"]')) {
                distanceToBlock = 1300;
            } else if (target.closest('[href="#calc"]')) {
                distanceToBlock = 1740;
            } else if (target.closest('[href="#command"]')) {
                distanceToBlock = 3480;
            } else if (target.closest('[href="#connect"]')) {
                distanceToBlock = 6168;
            }
        } else if (screenWidth() <= 768) {
            if (target.closest('[href="#service-block"]')) {
                distanceToBlock = 900;
            } else if (target.closest('[href="#portfolio"]')) {
                distanceToBlock = 1460;
            } else if (target.closest('[href="#calc"]')) {
                distanceToBlock = 2230;
            } else if (target.closest('[href="#command"]')) {
                distanceToBlock = 3388;
            } else if (target.closest('[href="#connect"]')) {
                distanceToBlock = 4258;
            }
        } else if (screenWidth() <= 1024) {
            if (target.closest('[href="#service-block"]')) {
                distanceToBlock = 890;
            } else if (target.closest('[href="#portfolio"]')) {
                distanceToBlock = 1368;
            } else if (target.closest('[href="#calc"]')) {
                distanceToBlock = 2220;
            } else if (target.closest('[href="#command"]')) {
                distanceToBlock = 3270;
            } else if (target.closest('[href="#connect"]')) {
                distanceToBlock = 4580;
            }
        } else if (screenWidth() > 1028) {
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
