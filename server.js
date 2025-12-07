const express = require('express')
const app = express()
const morgan = require('morgan')
const { readdirSync } = require('fs')
const cors = require('cors')


app.use(morgan('dev'))
app.use(express.json({ limit: '20mb' }))
app.use(cors())


app.get("/", (req, res) => {
    res.send("Backend is running ")
})


readdirSync('./routes').map((c) =>
    app.use('/', require('./routes/' + c))
)


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server is running on port ' + port)
})
