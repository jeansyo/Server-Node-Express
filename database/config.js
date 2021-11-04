const mongoose = require("mongoose");


const connectionDatabase = async() => {

    try {

        await mongoose.connect( process.env.PATH_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Database online!!!")
        
    } catch (err) {
        console.log(err);
        throw new Error("Error al inicializar la DB")
    }

}

module.exports= {
    connectionDatabase
}