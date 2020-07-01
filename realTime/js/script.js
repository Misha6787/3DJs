'use strict';
const text = document.querySelector('.text');
const data = new Date();

const monthA = 'Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота'.split(',');

const textDay = monthA[data.getDay()];

let textDayTime; 

let nowTime;
if(data.getHours() >= 12){
    nowTime = data.toString().slice(16, 24) + ' PM';
} else {
    nowTime = data.toString().slice(16, 24) + ' AM';
}

if(data.getHours() === 18, 19, 20, 21, 22, 23, 24, 0, 1, 2, 3, 4, 5){
    textDayTime = 'Вечер';
} else {
    textDayTime = 'День';
}

const merryChristmasDay =  Math.ceil((new Date(`31 Dec 2020`).getTime() - data.getTime()) / 1000 / 60 / 60 / 24);

function declOfNum(number, titles) {  
    const cases = [2, 0, 1, 1, 1, 2];  
    return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
}
    text.innerHTML = `
        <p>Добрый ${textDayTime}</p>
        <p>Сегодня: ${textDay}</p>
        <p>Текущее время: ${nowTime}</p>
        <p>До нового года осталось ${merryChristmasDay} ${declOfNum(merryChristmasDay, ['день', 'дня', 'дней'])}</p>
    `;



