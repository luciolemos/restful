const expresss = require("express");
const app = expresss();

app.get("/clients", function(req, res){

});


app.get("/clients/:id", function(req, res){});
app.post("/clients", function(req, res){});
app.put("/clients/:id", function(req, res){});
app.delete("/clients/:id", function(req, res){});

app.listen (3000, function(){
    console.log("Server is runnning");
});
