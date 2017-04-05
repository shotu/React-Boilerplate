var express= require('express');
//create out app
var app = express();
app.use(express.static('public'));

app.listen(3000, function () {
    console.log("app is running on port 3000");
})
