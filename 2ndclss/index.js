const express = require("express");
const app = express();
app.use(express.json());
const tourRoutes = require("./route/tourroutes");

app.use("/api", tourRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});