const express = require('express')
const logger = require('morgan');
const app = express(); //어플리케이션 이제 익스프레스 연거임
const user = require('./api/user/index')
const bodyParser = require('body-parser')
// const mw = (req, res, next) => {
//     console.log('mw!!!!')
//     next() //rest ful을 만들때도 다음 상태를 알아야한다라는 점에서 꼭 시켜주어야한다. 
// }
// const mw2 = (req, res, next) => {
//     console.log('mw2!!!!')
//     next() //rest ful을 만들때도 다음 상태를 알아야한다라는 점에서 꼭 시켜주어야한다. 순서 중요
// }
// app.use(mw)
const mw = (req, res, next)=>{
    //throw Error('error!')
    next(); // 정상작동으로 next를 실행해버리면 error미들웨어는 실행하지않는다.
}

const errorMw = (err, req, res, next)=>{ //에러 미들웨어 
    console.log(err.message)
} 
app.use(mw)
app.use(errorMw)
//미들웨어 추가부분
/* req.body를 사용할 수 있게 해주는 두 줄 */
app.use(bodyParser.json()); //body를 json으로 받는다
app.use(bodyParser.urlencoded({extended: true}));
//두번째 줄은 유사 UTF-8이라고 보면된다. 
app.use(logger('dev'))
app.use('/users', user) //모듈로 뺄경우 어느 동일 부분url을 묶어버린다


app.get('/', (req, res)=> res.send('hellow world'))//상태코드 컨텐츠타입 바디도설정했었음

module.exports = app
