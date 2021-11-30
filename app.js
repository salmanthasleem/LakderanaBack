const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config();


const app = express()

app.use(bodyParser.json())
app.use(express.json())

app.get("/", (req, res) => {
    return res.status(200).send("Welcome")
})


const start = async () => {
    try {
        //await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT, console.log(`Server is listening on port ${process.env.PORT}...`));
    } catch (error) {
        console.log(error);
    }
};

start()

