const express = require('express');
const dotenv = require('dotenv');
const cookieparser = require('cookie-parser');
const cors = require('cors');
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const ebookRoute = require("./routes/ebookRoute");
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");
const corsOptions = require("./config/corsOption");

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser());

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

app.get("/", (req, res) => {
    res.json("hello welcome to code book");
})


app.get("/health", (req, res) => {
    res.json({status: "ok",message: "server is running"});
})

app.use('/api/users', userRoutes);
app.use('/api/ebook', ebookRoute);
app.use('/api/cart', cartRoute);
app.use('/api/order', orderRoute);

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode).json({ message: err.message || "Server error" });
};

app.use(errorHandler);

const startServer = async () => {
    try {
        const isDbConnected = await connectDB();

        if (!isDbConnected) {
            console.log("Server will continue running without a database connection. Authentication routes will fail until MongoDB is reachable.");
        }

        const server = app.listen(PORT, () => {
            const address = server.address();
            console.log(`you, we are live on port ${PORT}`);
            console.log('Server address:', address);
            console.log(`Server is listening on http://localhost:${PORT}`);
        });

        server.on('error', (error) => {
            if (error.code === 'EADDRINUSE') {
                console.error(`Port ${PORT} is already in use. Please stop the other process and try again.`);
            } else {
                console.error('Server error:', error);
            }
        });

        server.on('listening', () => {
            const address = server.address();
            console.log(`✅ Server is now listening and ready to accept connections on port ${address.port}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
};

startServer();