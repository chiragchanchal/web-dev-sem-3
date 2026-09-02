const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/tour.json');

// get all
const getALL = () => {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}

// get by id
const getById = (id) => {
    const tours = getALL();
    return tours.find(tour => tour.id === id);
}

// add new tour
const addTour = (newTour) => {
    const tours = getALL();
    tours.push(newTour);
    fs.writeFileSync(filePath, JSON.stringify(tours));
    return newTour;
}

const updateTour = (id, updatedTour) => {
    const tours = getALL();
    const index = tours.findIndex((tour) => tour.id === id);
    if (index !== -1) {
        tours[index] = { ...tours[index], ...updatedTour };
        fs.writeFileSync(filePath, JSON.stringify(tours));
        return tours[index];                
    }
    return null;
}
const searchTour = (destination, minPrice, maxPrice) => {
    const tours = getALL();
    return tours.filter((tour) => {
        const destinationMatch = destination ? tour.destination.toLowerCase() === destination.toLowerCase() : true;
        const priceMatch = (minPrice === undefined || tour.price >= minPrice) && 
                          (maxPrice === undefined || tour.price <= maxPrice);
        return destinationMatch && priceMatch;
    });
}

// delete tour by id 

const deleteTourById = (id) => {
    const tours = getALL();
    const index = tours.findIndex(tour => tour.id === id);
    const updatedTours = tours.filter(tour => tour.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(updatedTours));
    return updatedTours;
}

module.exports = {
    getALL,
    getById,
    addTour,
    updateTour,
    searchTour,
    deleteTourById
};