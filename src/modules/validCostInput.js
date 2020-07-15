/* eslint-disable strict */
'use strict';
const validCostInput = () => {
    const input = document.querySelectorAll('input.calc-item');
    const validInput = item => item.value = item.value.replace(/\D/g, '');
    input.forEach(item => item.addEventListener('input', () => validInput(item)));
};

export default validCostInput;
