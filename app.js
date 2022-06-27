const express = require('express')
const router = express.Router();
const PORT = process.argv[3] || 3000;
const app = express()

console.log(process.argv)

app.get('/', (req,res ,next) => {
    res.send('Ben Çalışıyorum=' + PORT)
})

app.use('/',router)

app.listen(PORT, () => {
    console.log('Servera istek gonderılıyor çalışıyor' + " " + PORT)
})
