const express = require('express')
const app = express()
const port = 3000

const postRoute = require('./routes/postRoute');
postRoute(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})