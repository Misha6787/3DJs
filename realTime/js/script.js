/* eslint-disable strict */
'use strict';
const text = document.querySelector('.text');
const data = new Date();

const textDayTime = () => {
    const hours = data.getHours();
    if (hours >= 18 || hours <= 5) {
        return 'Вечер';
    } else {
        return 'День';
    }
};

const textDay = data.toLocaleString('ru', { weekday: 'long' });

const nowTime = data.toLocaleTimeString('ru');


const merryChristmasDay =  Math.ceil((new Date(`31 Dec 2020`).getTime() - data.getTime()) / 1000 / 60 / 60 / 24);

const declOfNum = (number, titles) => {
    const cases = [2, 0, 1, 1, 1, 2];
    return titles[ (number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5] ];
};
const day = declOfNum(merryChristmasDay, ['день', 'дня', 'дней']);

const textDivP = document.createElement('p');
textDivP.textContent = `Добрый ${textDayTime()}`;

const textDayP = document.createElement('p');
textDayP.textContent = `Сегодня: ${textDay}`;

const textNowTimeP = document.createElement('p');
textNowTimeP.textContent = `Текущее время: ${nowTime}`;

const textmerryChristmasDayP = document.createElement('p');
textmerryChristmasDayP.textContent = `До нового года осталось ${merryChristmasDay} ${day}`;

text.append(textDivP, textDayP, textNowTimeP, textmerryChristmasDayP);



