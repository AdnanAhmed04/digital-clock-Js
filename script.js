function updateTimeAndDate() {
    var a = new Date();
    var arr = a.toString().split(" ");

    var day = document.getElementById('day').innerHTML = arr[0];

    let date = arr[2] + '-' + arr[1] + '-' + arr[3];
    document.getElementById('date').innerHTML = date;

    let time = arr[4];
    document.getElementById('time').innerHTML = time;
}

setInterval(updateTimeAndDate, 1000);


