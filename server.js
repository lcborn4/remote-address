var express = require("express");
var app = express();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => 
{
  console.log('Finding the remoteAddress');
    console.log('req.connection.remoteAddress',req.connection.remoteAddress);
res.send(req.headers[`x-forwarded-for`])

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
