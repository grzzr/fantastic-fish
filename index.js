const express = require('express')
const app = express()
app.get('/', (req, res) =>{
    const dados = 'dinâmico'
    let html = `
    <html>
    <body>
    <h3>exemplo de página dinâmica</h3>
    <ul>
    `
    for(i=0;i<10;i++) {
        html+=`<li>${dados}</li>\n`
    }
    html+=
    `</u>
    </body>
    </html>
    `
    res.send(html)
    })
app.listen(80, () => {
    console.log("servidor rodando...")
})
