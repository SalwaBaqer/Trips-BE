const express = require("express");
const cors = require("cors");
const connectDB = require("./db/database");
const userRoutes = require("./api/user/user.routes");

const app = express();

//DATABASE-CONNECTION
connectDB();

//MIDDLEWARES
app.use(express.json());
app.use(cors());

//ROUTES
app.use(userRoutes);

//ERROR-HANDLE
app.use((err, req, res, next) => {
  res
    .status(err.status || 500)
    .json({ message: err.message || "Internal Server Error" });
});

//PATH-NOT-FOUND
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

//PORT
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`The application is running on localhost:${PORT}`);
});
