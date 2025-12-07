const express = require('express')
const app = express()
const morgan = require('morgan')
const { readdirSync } = require('fs')
const cors = require('cors')


// middleware
app.use(morgan('dev'))
app.use(express.json({ limit: '20mb' }))
app.use(cors())


readdirSync('./routes').map((c) => app.use('/', require('./routes/' + c)))


// start sever
app.listen(5000,
    () => console.log('Server is runing on port 5000')
)