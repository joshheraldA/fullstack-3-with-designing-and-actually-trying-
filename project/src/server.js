const express = require('express')
const { join } = require("path")
// set a server
const app = express()
const PORT = 8080

const path = join(__dirname, "..", "public", "html")

app.use(express.static(path));



app.listen(PORT, () => {
    console.log(`Listening to PORT ${PORT}`)
})