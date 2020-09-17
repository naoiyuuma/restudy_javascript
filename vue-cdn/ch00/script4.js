
var Util = {
    methods: {
        addZero: function (value) {
            if (value < 10) {
                return '0' + value
            } else {
                return value
            }
        }
    }
}
var app = new Vue({
    el: "#app",
    data: {
        number: 9
    },
    mounted: function () {
        this.number = this.addZero(this.number)
    },
    //変数Utilをmixins宣言で指定
    //任意のコンポーネントオプションを含む
    mixins: [Util]
})

var app2 = new Vue({
    el: "#app2",
    data: {
        num1: 0,
        num2: 0,
        answer: 0
    },

    methods: {
        //calcの宣言
        calc: function () {
            this.answer = this.num1 + this.num2;
        }
    }

    /*
     computed: {
         answer: function () {
             return this.num1 + this.num2;
         }
     }
     */
})