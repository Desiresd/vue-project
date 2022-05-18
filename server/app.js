const express = require('express') // 引入 express
const app = express() // 实例一个 express 对象
app.use(require('cors')()) // 解决跨域
app.use(express.json()) // express处理json数据

const mysql = require('mysql') // 调用 MySQL模块

// 创建连接
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // 用户名
  password: 'root', // 密码
  database: 'mo', // 数据库名
  port: 3306 // 端口号
})
db.connect((err) => {
  if (err) throw err
  console.log('连接成功')
})

app.get('/', (req, res) => {
  res.send('index')
})

// 新增用户
app.post('/user', (req, res) => {
  let data = req.body
  let sql = 'INSERT INTO user SET ?'
  db.query(sql, data, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      res.send(result)
    }
  })
})

// 获取用户
app.get('/getUserList', (req, res) => {
  let sql = 'SELECT * FROM user'
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      res.json(result)
    }
  })
})

// 删除用户
app.delete('/user/:id', (req, res) => {
  let sql = `DELETE FROM user WHERE id= ${req.params.id}`
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      res.json(result)
    }
  })
})

// 获取用户
app.get('/user/:id', (req, res) => {
  let sql = `SELECT * FROM user WHERE id= ${req.params.id}`
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.json(result)
    }
  })
})

// 修改用户
app.put('/user/:id', (req, res) => {
  let newTitle = req.body.title
  let newBody = req.body.body
  let sql = `UPDATE user SET title = '${newTitle}',body = '${newBody}' WHERE ID = ${req.params.id}`
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.json(result)
    }
  })
})

// 获取字典数据
app.get('/sys/dict/getDictItems/:code', (req, res) => {
  let sql = `select value.* from dict_text text,dict_value value where text.id = value.dict_id and text.name = '${req.params.code}'`
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.json(result)
    }
  })
})

// 监听端口3000
app.listen(3000, () => {
  console.log('http://localhost:3000/')
})
