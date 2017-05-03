var express = require("express"),
    app = express();
app.use(express.static("./static"));
app.get("/:query", function(req, res) {
    if (req.params.query.match(/^-?\d+$/g)) {
        res.send(createJSON(new Date((Number(req.params.query) * 1000)), true));
    } else {
        res.send(createJSON(new Date(req.params.query), false));
    }
});
app.listen(8080);
console.log("server up");
function createJSON(date, isItNumber) {
    if (isNaN(date.getFullYear())) {
        return ({
            "unix": null,
            "natural": null
        });
    } else {
        return ({
            "unix": isItNumber ? Date.parse(date)/1000.0 : Date.parse(date)/1000.0 + 3600,
            "natural": date.toLocaleString(
                "fullwide",
                {month: "long",
                day: "numeric"}) + ", " + date.getFullYear()
            });
    }
}
