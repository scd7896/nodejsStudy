const http = require('http')

const hosname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res)=>{
    
    if(req.url === '/'){
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('hihi world')
    }else if (req.url === '/users'){
        const users = [
            {
                name : 'alice',
            },
            {
                name : 'back'
            }
        ]
        
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json') //api의 헤더를 정의 한다
        res.end(JSON.stringify(users))
    }else{
        res.statusCode = 404
        res.end('글로오지마라')
    }
})

server.listen(port, hosname, function(){
    console.log(`server running at http://${hosname}:${port}`)
    console.log(this) //윾시 서버 객체를 보여주는 군 ㅋㅋㅋㅋ
})