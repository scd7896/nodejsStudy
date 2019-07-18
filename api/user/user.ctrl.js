const users = [{ id : 1, name : '앨리스'}, 
                {id : 2,name : '김서버'},
                {id : 3,name : '크리스'}]
                
const index =  (req, res) => {
    req.query.limit = req.query.limit || 10
    const limit = parseInt(req.query.limit)
    if(Number.isNaN(limit)){
        res.status(400).end() 
    }else{
        res.json(users.slice(0, limit))
    }
}

const  show = (req,res)=>{
    // id값을 얻어낸다
    const id = parseInt(req.params.id)
    if(Number.isNaN(id)) return res.status(400).end()
    //users 배열을 조회
    const user = users.filter((e)=>{
        return e.id === id
    })[0]
    
    // 응답: res객체를 이용
    if(!user) return res.status(404).end()
    res.json(user)
}

const destroy = (req, res)=>{
    const id = parseInt(req.params.id, 10)
    if(Number.isNaN(id)) return res.status(400).end()
    const array = users.filter((e)=> e.id !== id)
    if(users.length === array.length) return res.status(404).end()
    res.status(204).end()
}

const create =(req,res)=>{
    const name = req.body.name
    if(!name) return res.status(400).end()
    const target = users.filter(e=>{
        return e.name === name
    })
    if(target.length >= 1) return res.status(409).end()
    const id = Date.now()
    const user = {id, name}
    users.push(user)
    
    res.status(201).json(user)
    //body로 값이 들어오는데 express는 body를 지원하지않는다
    //따라서 body-parser를 다운받아서 사용해야한다 그래서 그랬군 흠
}
module.exports={
    index,
    show,
    destroy,
    create
}