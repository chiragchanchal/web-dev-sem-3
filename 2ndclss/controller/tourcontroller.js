const tourModel = require("./models/tourmodel");

//get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getALL();
    res.json(tours);
};
module.exports = {
    getAllTours
};
// app.get("/", (req, res) => {
//     res.send("Hello World");
// });

// app.get("/packages", (req, res) => {
//     const destination = req.query.destination;
//     if(!destination) {
//         res.json(packages);
//     }
//     const filteredPackages = packages.filter((pkg) => pkg.destination.toLowerCase() === destination.toLowerCase());
//     res.json(filteredPackages);
    
// });

// app.get("/packages/:id", (req, res) => {
//     const packageId = parseInt(req.params.id);
//     const tourPackage = packages.find((pkg) => pkg.id === packageId);
//     res.send(tourPackage);
//     res.status(200).send(tourPackage);
// });    

// app.post("/packages", (req, res) => {
//     const newPackage = req.body;
//     // res.json(newPackage);
//     packages.push(newPackage);
//     res.status(201).json(newPackage);
// });
