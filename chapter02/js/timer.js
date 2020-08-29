let timer = () => {
    let now = new Date();
    var nowGetSeconds = now.getSeconds();

    if (nowGetSeconds >= 0 && nowGetSeconds < 10) {
        document.getElementById('timer').innerHTML = `${now.getHours()}:${now.getMinutes()}:0${now.getSeconds()}`;
    } else {
        document.getElementById('timer').innerHTML = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
    }
}

let timerID = setInterval(timer, 500);
