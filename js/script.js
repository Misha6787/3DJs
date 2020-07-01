window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    function countTimer(deadline){
        const   timerHours = document.querySelector('#timer-hours'),
                timerMinutes = document.querySelector('#timer-minutes'),
                timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining(){
            const   dataStop = new Date(deadline).getTime(),
                    dataNow = new Date().getTime(),
                    timeRemaining = (dataStop - dataNow) / 1000,
                    seconds = Math.floor(timeRemaining % 60),
                    minutes = Math.floor((timeRemaining / 60) % 60),
                    hours = Math.floor(timeRemaining / 60 / 60);
                    return { seconds, minutes, hours, timeRemaining };
        }
        function updateClock(){
            const timer = getTimeRemaining();
            function validNull(elem, elemText){
                if(elem.toString().length === 1){
                    elem = '0' + elem.toString().slice(0);
                    elemText.textContent = elem;
                } else {
                    elemText.textContent = elem;
                }
            }
            validNull(timer.hours, timerHours);
            validNull(timer.minutes, timerMinutes);
            validNull(timer.seconds, timerSeconds);

            if(timer.timeRemaining < 0){
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';   
                clearInterval(interval);
            }
        }
        const interval = setInterval(updateClock, 1000);
    }
    
    countTimer('02 July 2020');
});