//express
const express = require('express');
const app = express();

//ejs
const ejs = require('ejs');
app.set('views', 'views');
app.set('view engine', 'ejs');

//bodyParser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//ホーム画面表示
app.get('/', (req, res) => {
    res.render('index.ejs',
        {
            title: 'フォーム送信された値の取り出し方',
            content: ''
        });
});

//フォーム送信時
app.post('/result', (req, res) => {
    res.render('index.ejs',
        {
            title: 'フォーム送信された値の取り出し方',
            content: 'あなたの好きな食べ物は' + req.body.food + '、好きな飲み物は' + req.body.drink + 'ですね。 '
                + 'これはreq.bodyに{ food: ' + req.body.food + ', drink: ' + req.body.drink + '}というオブジェクトで保管されています。 '
                + '詳しくはコンソールを見てみてください！！'
        });
    //req.bodyの中身を確認すると、name属性がキー、value属性がその値として保管されていることが分かる
    console.log(req.body);
});

//3000番ポートを使用してサーバ起動
const server = app.listen(3000, () => {
    console.log('Node.js is listening to PORT:' + server.address().port);
})