var express = require("express"),
    app = express();
const path = require('path');

app.use(express.static("public"));
app.use(express.static("imgs"));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname + '/register.html'));
});
app.get("/main", function (req, res) {
    res.sendFile(path.join(__dirname + '/userpage.html'));
});

app.listen(process.env.PORT || 3000, function () {
    console.log("server started");
})