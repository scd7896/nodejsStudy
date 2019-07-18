const util = require('util') // 기본 모듈인데 겁나 많음 ㅎㅎ 책 보면 다잇뜸 언젠간 꼭 보셈 
    //제발 미래의 나야 봐라 부탁한다 ㅠㅠ

const name = 'world'
const msg = util.format('hello %s', name)

console.log(msg);

const math = require('./math')//써드파티 모듈 사용자 정의 모듈은 경로를 꼭 써주어야함 ㅎㅎ
console.log(math.add(2,3))

//readFile() vs readFileSync() 인데 딱봐도 닥후 너가 async await을 사랑한다면

const fs = require('fs')

const file = fs.readFileSync('test.txt',{
    encoding : 'utf8'
})
console.log(file)

const file2 = fs.readFile('test.txt',{
    encoding:'utf8'
},(err,data)=> console.log(data))