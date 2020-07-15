/* eslint-disable strict */
'use strict';
const scrooToService = () => {
    const buttonScrool = document.querySelector('[href="#service-block"]');
    let count = 0;
    const scroolinterval = () => {
        event.preventDefault();
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

export default scrooToService;
