const getCookie = (key) => {
    //
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let k = cookies[i].split('=');
        if (k[0] === key) {
            //decode
            return decodeURIComponent(k[1]);
        }
    }

    return '';
}

const btn = document.getElementById('save_button');
document.getElementById('save_button').addEventListener('click', function () {
    //encode
    let email = encodeURIComponent(document.getElementById('email').value);
    document.cookie = 'email=' + email + '; max-age=3600';
    //document.cookie = 'mynum=123; max-age=3600';
    //btn.disabled = true;

})

document.getElementById('email').value = getCookie('email');
let timerID = setInterval(getCookie, 500);