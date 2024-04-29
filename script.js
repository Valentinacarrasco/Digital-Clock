window.addEventListener('load', calculateTime)

function calculateTime(){
    let date = new Date();

    let day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY']


    if(hour < 10){
        hour = '0' + hour
    }

    if(minute < 10){
        minute = '0' + minute
    }

    if(second < 10){
        second = '0' + second
    }

    document.getElementById('day').innerHTML = days[day - 1];
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = minute;
    document.getElementById('second').innerHTML = second;

    setTimeout(calculateTime, 200);
}

