let buttonEventForClick = () => {
    //buy_button
    const event_buy_button = document.getElementById('buy_button');
    //addEventListenerメソッドでイベントリスナーを定義
    //addEventListener(リスナー、関数的処理);
    event_buy_button.addEventListener('click', () => {
        event_buy_button.disabled = true;
    });

    //email_form

    //<input>要素
    //取得したい要素にid属性を付加するか、name属性を使って要素を取得
    const email = document.querySelector('input[name="email_form"]')

    // フォーカスが外れたときに、空の場合はエラーを表示する
    email.addEventListener('blur', () => {
        if (email.value === '') {
            email.style.backgroundColor = '#fcc';
            //カラー指定
            email.nextElementSibling.innerHTML = '※ メールアドレスをご記入ください';
            //nextElementSibling->emailの次の要素:<span>
        } else {
            //正しく入力された場合
            email.style.backgroundColor = '#fff';
            email.nextElementSibling.innerHTML = '';

        }
    });
    //checkbox
    //idで取得
    const agree = document.getElementById('agree');
    agree.addEventListener('change', () => {
        document.getElementById('buy_button').disabled = !agree.checked;
        //buy_buttonの状態はagree.checkedの状態と反転
    });
}

let timerID = setInterval(buttonEventForClick, 500);