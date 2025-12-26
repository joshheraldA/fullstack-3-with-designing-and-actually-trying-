const express = require('express')
const { join } = require("path")
// set a server
const app = express()
const PORT = 8080

const shoeRoute = require('./routes/shoes')
const brandRouter = require('./routes/brand')

const path = join(__dirname, "..", "public")

app.use(express.static(path));
app.use('/shoes', shoeRoute)
app.use('/brand', brandRouter)


app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`)
})