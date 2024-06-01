const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { connectDB } = require("./config");
const authRoutes = require("./routes/authRoutes");
const parkingRoutes = require("./routes/parkingRoutes");
const dailyParkingRecordRoutes = require("./routes/dailyParkingRecordRoutes");
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();

// Conexion a la base de datos
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use("/api/dailyParkingRecord", dailyParkingRecordRoutes);
app.use("/api/parking", parkingRoutes);
app.use("/api/auth", authRoutes);

const PORT = port;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
