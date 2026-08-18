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
    res.status(200).send(tourPackage);
});    

app.post("/packages", (req, res) => {
    const newPackage = req.body;
    res.json(newPackage);
    // packages.push(newPackage);
    // res.status(201).send(newPackage);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});