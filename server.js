var express = require("express");
var app = express();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => 
{
res.send(req.connection.remoteAddress)

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
