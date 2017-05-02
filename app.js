var express = require("express"),
    app = express();
app.use(express.static("./static"));
app.get("/:query", function(req, res) {
    // add one hour for unix cus lul thats why
    console.log(req.params.query);
    var date = new Date("2015December15");
    res.send({"unix": Date.parse(date)/1000.0, "natural": date.toDateString() });
});
app.listen(8080);
console.log("server up");
