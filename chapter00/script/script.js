'use strict';

/*
yahooクライアントID : dj00aiZpPXJFZFZPTFZQNVhpciZzPWNvbnN1bWVyc2VjcmV0Jng9MGI-
yahoo リクエストURL JSONP : https://map.yahooapis.jp/search/zip/V1/zipCodeSearch
*/

/*
jquery-3.3.1.min.js をCDNを利用して読み込んでいる
従ってid属性の取得や他の操作の記法がjsと微妙に異なる
*/

{

    $('.tab').on('click', function (event) {
        // 関連するコンテンツを表示する
        $('.tabbox').addClass('hide');
        const pair = $(event.currentTarget).data('pair');
        $('#' + pair).removeClass('hide');

        // クリックしたタブをハイライトする
        $('.tab').removeClass('active');
        $(event.currentTarget).addClass('active');
    });


    $('#zip-search').on('click', function (event) {
        event.preventDefault();
        //読み出し
        $('#address1').val('');
        $('#address2').val('');

        const zip = $('#zipcode').val();

        //$.ajaxメソッド
        $.ajax({
            //リクエストに必要なデータ
            url: 'https://map.yahooapis.jp/search/zip/V1/zipCodeSearch',
            dataType: 'jsonp',
            data: {
                //appid:yahooクライアントID
                appid: 'dj00aiZpPXJFZFZPTFZQNVhpciZzPWNvbnN1bWVyc2VjcmV0Jng9MGI-',
                query: encodeURIComponent(zip),
                output: 'json'
            }
        })
            .done(function (data) {
                //データを取得できた場合の処理
                //取得したデータはパラメータdata　に保存されている
                console.log(data);
                /*
                consoleから情報を解析
                Featureプロパティからアドレスを取得する
                Feature.Property.Address
                今回はデータの構造上、Featureプロパティのデータの個数が1個の場合のみ
                ->dataに含まれるResultInfoプロパティのCountプロパティを利用
                */
                if (data.ResultInfo.Count === 1) {
                    const address = data.Feature[0].Property.Address;
                    $('#address1').val(address);
                } else {
                    alert('住所が特定できませんでした。正しい7桁の郵便番号を入力してください。');
                }

            })
            .fail(function (error) {
                //データが取得できなかった場合の処理
                //エラー情報はパラメータerrorに保存されている
                console.log('エラーが発生しました。' + error.statusText);

            });
    });


}