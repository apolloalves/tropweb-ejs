const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

const bodyParser = require('body-parser')

app.use( bodyParser.urlencoded({ extended: false }))
app.use( bodyParser.json() )

app.get('/', (req, res) => { res.render('index') })
















app.listen( 3000, () => console.log('Server is running in: http://localhost:3000'))