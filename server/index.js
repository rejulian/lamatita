const express = require('express')
const mysql = require('mysql2')
const cors = require('cors')

const PORT = 4000;

const db = mysql.createConnection({
     host: '138.36.236.45',
     user: 'root',
     password: 'kagupuVU87',
     database: 'lamatita',
})

const app = express()
app.use(express.json())
app.use(cors())


app.get('/', (req,res)=>{
    db.query('SELECT * FROM articulos where web = 1 LIMIT 3', (err,response)=>{
        if(err){
            console.log(err);
        }else{
            res.send(response)
        }
    })
})

app.get('/nav', (req,res)=>{
    db.query('SELECT DISTINCT rubro FROM articulos WHERE web = 1', (err,response)=>{
        if(err){
            console.log(err);
        }else{
            res.send(response)
        }
    })
})

app.get('/productos', (req,res)=>{
    const offset = req.query.offset;

    db.query(`SELECT * FROM articulos WHERE web = 1 AND length(foto) > 0 ORDER BY rubro LIMIT 4 OFFSET ${offset}`, (err,response)=>{
        if(err){
            console.log(err);
        }else{
            res.send(response)
        }
    })
})

app.get('/productos/:rubro', (req,res)=>{
    const rubro = req.params.rubro;

    db.query('SELECT * FROM articulos WHERE rubro = ? AND web = 1',rubro, (err,result)=>{
        if (err) {
            console.error(err)
        }else{
            res.send(result)
        }
    })
})

app.get('/productos/busqueda/:articulo', (req,res)=>{
    const articulo = req.params.articulo;

    db.query(`SELECT * FROM articulos WHERE articulo LIKE "%${articulo}%" AND web = 1`, (err,result)=>{
        if (err) {
            console.error(err)
        }else{
            res.send(result)
        }
    })
})

app.get('/producto/codigo/:codigo', (req,res)=>{
    const codigo = req.params.codigo;

    db.query('SELECT * FROM articulos WHERE codigo = ?',codigo, (err,result)=>{
        if (err) {
            console.error(err)
        }else{
            res.send(result)
        }
    })
})

app.post('/editar', (req,res)=>{
    const codigo = req.body.codigo;
    const newImg = req.body.newImg;
    const newWeb = req.body.newWeb;

    db.query(`UPDATE articulos SET foto = "${newImg}", web = ${newWeb} WHERE codigo = ${codigo}`, (err,result)=>{
        if (err) {
            console.error(err);
        }else{
            res.send('Articulo Actualizado!')
            console.log('Articulo Actualizado!')
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Server litening on port: ${PORT}...`);
})
