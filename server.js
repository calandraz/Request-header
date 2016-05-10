var express = require("express");
var app = express();
var port = process.env.PORT || 8080;


app.get("/", function(request, response){
    var ip = request.header('x-forwarded-for') || request.connection.remoteAddress;
    var language = request.headers["accept-language"].split(",")[0];
    var os = request.header("user-agent");
    response.json({"IP Address": ip, "Language": language, "Operating System": os});
});
app.listen(port);