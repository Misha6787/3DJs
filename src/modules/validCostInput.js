/* eslint-disable strict */
'use strict';
const validCostInput = () => {
    const calc = document.getElementById('calc');
    const validInput = event => {
        const target = event.target;
        if (target.matches('.calc-square') ||
        target.matches('.calc-count') ||
        target.matches('.calc-day')) {
            target.value = target.value.replace(/\D/g, '');
        }
    };
    calc.addEventListener('input', validInput);
};

export default validCostInput;
