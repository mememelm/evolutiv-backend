require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const app = express()
app.use(cors({
  origin: '*',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

const routes = require('./routes')
app.use('/', routes)

const { errorParser } = require('./middlewares/error-parser')
app.use(errorParser)

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error')
})

const { db } = require('./bin/config')
db.sq.sync({ alter: true }).then(() => {
  console.log('sq done')
})

const cron = require('./middlewares/cron')
app.listen(process.env.SERVER_PORT, () => {
  console.log('Server listening on port ' + process.env.SERVER_PORT)
  app.use(cron.start)
})

module.exports = app
