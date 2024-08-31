const express = require('express')

const app = express()
const port = 5000

app.get('/', (request, response) => {
    response.send("Hello From Server")
})

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})