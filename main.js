
const countDate = new Date('march 20, 2021 00:00:00').getTime();

function newCountDown(){
    const now = new Date().getTime();
    gap = countDate - now

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day =  hour * 24;

    
    const d = Math.floor(gap / (day));
    const h = Math.floor((gap % (day))/(hour));
    const m = Math.floor((gap % (hour))/(minute));
    const s = Math.floor((gap % (minute))/(second));
   
    
    document.getElementById('days').innerHTML = `${d < 10 ? '0':''}${d}`;
    document.getElementById('hours').innerHTML = `${h < 10 ? '0':''}${h}`;
    document.getElementById('minutes').innerHTML = `${m < 10 ? '0':''}${m}`;
    document.getElementById('seconds').innerHTML = `${s < 10 ? '0':''}${s}`;
}
setInterval(function(){
    newCountDown();
})