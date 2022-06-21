var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
const erroMiddleware = require('./middleware/erroMiddleware')
const database = require('./database')
const dotenv = require('dotenv')
const cors = require('cors')

const users = require('./routes/users')
let produtos = require('./routes/produtos')

var app = express()
dotenv.config({ path: 'config/config.env' })

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
)
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/produtos', produtos)
app.use('/users', users)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(erroMiddleware)

module.exports = app
