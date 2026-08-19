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

module.exports = {
    getALL,
    getById,
    addTour
};