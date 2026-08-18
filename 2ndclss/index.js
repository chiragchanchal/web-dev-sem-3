const express = require("express");
const app = express();

const packages = require("./data/tour");
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/packages", (req, res) => {
    const destination = req.query.destination;
    if(!destination) {
        res.json(packages);
    }
    const filteredPackages = packages.filter((pkg) => pkg.destination.toLowerCase() === destination.toLowerCase());
    res.json(filteredPackages);
    
});

app.get("/packages/:id", (req, res) => {
    const packageId = parseInt(req.params.id);
    const tourPackage = packages.find((pkg) => pkg.id === packageId);
    res.send(tourPackage);
});    

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});