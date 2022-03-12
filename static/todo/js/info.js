function clockTimer() {
    var date = new Date();

    var time = [date.getHours(),date.getMinutes(),date.getSeconds()]; // |[0] = Hours| |[1] = Minutes| |[2] = Seconds|

    if(time[0] < 10){time[0] = "0"+ time[0];}
    if(time[1] < 10){time[1] = "0"+ time[1];}
    if(time[2] < 10){time[2] = "0"+ time[2];}

    let current_time = [time[0],time[1],time[2]].join(':');
    let clock = $('#time_wrapper');

    clock.text(current_time)

    setTimeout("clockTimer()", 1000);
}

function weatherer() {
    let weatherBlock = $('#weather_wrapper');
    $.getJSON('/todo/get_weather', function(data) {
        weatherBlock.text(data['w'] + '°C')
    })
}

$(document).ready(function() {
    let dateBlock = $('#date_wrapper');

    let date = new Date();

    // date
    day = date.getDate()
    month = date.getMonth() + 1
    if (day.toString.length == 1) {
        day = `0${day}`
    }
    if (month.toString.length == 1) {
        month = `0${month}`
    }
    dateBlock.text(`${day}.${month}.${date.getFullYear()}`)

    clockTimer()
    weatherer()
})


