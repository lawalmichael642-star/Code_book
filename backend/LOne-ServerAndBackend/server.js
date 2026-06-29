const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieparser = require('cookie-parser');

dotenv.config();

const PORT = process.env.PORT || 3000
const app = express();

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




try {
    const server = app.listen(PORT, () => {
        const address = server.address();
        console.log(`You are live on port ${PORT}`);
        console.log('Server address:', address);
        console.log(`Server is listening on http://localhost:${PORT}`);

        mongoose.connect(process.env.MONGO_URI)
            .then(() => console.log("connected to database"))
            .catch((error)=>{
                console.log("message connection error", error.message);
                console.log("server will continue to run without database connection");
            })
    })

    server.on('error', (error) => {
        if (error.code === 'EADDRINUSE') {
            console.error(`Port ${PORT} is already in use. Please stop the other process and try again.`);
        } else {
            console.error('Server error:', error);
        }
    });

    server.on('listening', () => {
        const address = server.address();
        console.log(`✅Server is now listening and ready to accept connections on port ${address.port}`);
    })
}catch (error) {
    console.error("failed to start server:", error);
    process.exit(1);
}