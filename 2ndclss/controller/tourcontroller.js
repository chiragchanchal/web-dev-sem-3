const tourModel = require("../models/tourModel");

//get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getALL();
    res.json(tours);
};
const getTourById = (req, res) => {
    const id = parseInt(req.params.id);
    const tour = tourModel.getById(id);
    if (tour) {
        res.json(tour);
    } else {
        res.status(404).json({ message: "Tour not found" });
    }   
};

const addTour = (req, res) => {
    const newTour = req.body;
    const addedTour = tourModel.addTour(newTour);
    res.status(201).json(addedTour);
}

const updateTour= (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTourData = req.body;
    const updatedTour = tourModel.updateTour(id, updatedTourData);
    if (updatedTour) {
        res.json(updatedTour);
    } else {
        res.status(404).json({ message: "Tour not found" });
    }
};

const deleteTourById = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTours = tourModel.deleteTourById(id);
    res.json({ message: "Tour deleted successfully", tours: updatedTours });
}

module.exports = {
    getAllTours,
    getTourById,
    addTour,
    updateTour,
    deleteTourById
    
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
