function updateTimeAndDate() {
    var a = new Date();
    var arr = a.toString().split(" ");
// console.log(arr)
    var day = document.getElementById('day').innerHTML = arr[0];
// console.log(day)

    let date = arr[2] + '-' + arr[1] + '-' + arr[3];
    document.getElementById('date').innerHTML = date;
console.log(date)

    let time = arr[4];
    document.getElementById('time').innerHTML = time;
    console.log(time)

}

setInterval(updateTimeAndDate, 1000);


