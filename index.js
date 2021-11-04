const express = require('express');
const { connectionDatabase } = require('./database/config');
const cors = require("cors")

require("dotenv").config()

const app = express();

app.use( cors() )
connectionDatabase();

// app.use( express.static("public") ) Directorio public for website
app.use( express.json() );

app.use( "/api/v1/auth", require("./router/authRouter") )

app.listen( process.env.PORT_DEVELOPING, () => {
    console.log(`Listening in port: ${ process.env.PORT_DEVELOPING }`)
} )