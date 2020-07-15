/* eslint-disable strict */
'use strict';
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

export default hoverImg;
