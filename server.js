const express = require("express");
const dotenv = require("dotenv");

//Loading the env variables
//if the .env file is in root then we don't need to pass any aruguement to config method.
//to read anything from our env file we need to install dotenv package.
//like ex to read anything from .properties file, we may need to install PropertiesReader package.
dotenv.config({path: "./config/config.env"});

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} environment on port ${PORT}`)
});