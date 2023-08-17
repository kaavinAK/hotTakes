let express= require('express')
let app = express()
let path=require('path')

app.use(express.static(path.join(__dirname, 'views/js')));
app.set('view engine','ejs')


app.get('/login',(req,res)=>
{
    return res.render('login',{path:"login.page.js"})
})
app.get('/register',(req,res)=>
{
    return res.render('signup',{path:"signup.page.js"})
})
app.listen(5000,()=>
{
    console.log("server started")
})