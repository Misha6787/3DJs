/* eslint-disable strict */
'use strict';
const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'),
        calcSquare = document.querySelector('.calc-square'),
        calcCount = document.querySelector('.calc-count'),
        calcDay = document.querySelector('.calc-day');

    let scrollIns;
    const scroll = (val, el, step) => {
        let i = 0;
        scrollIns = () => {
            const animCount = requestAnimationFrame(scrollIns);
            if (i <= val) {
                document.getElementById(el).textContent = i;
                i += step;
            } else {
                cancelAnimationFrame(animCount);
                document.getElementById(el).textContent = val;
            }
        };
        scrollIns();
    };
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
            scrollIns = 0;
            scroll(total, 'total', 60);
        }
    };
    calcBlock.addEventListener('change', event => {
        const target = event.target;
        if (target.matches('select') || target.matches('input')) {
            countSum();
        }
    });
};

export default calc;
