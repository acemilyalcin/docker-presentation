const express = require('express')
const app = express()
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.json([
      {id:1, productName: 'Computer'},
      {id:2, productName: 'Keyboard'},
      {id:3,productName: 'Mouse'},
      {id:4,productName: 'Monitor'}
    ])
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})