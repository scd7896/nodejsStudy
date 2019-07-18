const express = require('express')
const router = express.Router()
const ctrl = require('./user.ctrl')


router.get('/',ctrl.index)

router.get('/:id',ctrl.show)

router.delete('/:id',ctrl.destroy)

router.post('/',ctrl.create)

//가장 최상단 부르는 곳에서 정의를 했기 때문에 동일 url은 없앨수 있다.
//req.params()패쓰안에잇는 데이터 :뒤에 id 경로를 읽기, req.query() 쿼리 문자열 가져오기, req.body() 바디값을 가져오기 post요청에서 사용이 많이됨
//res.send() 문자열을 돌려주고, res.status()상태를 돌려주고, res.json() json객체를 돌려주고 
module.exports = router