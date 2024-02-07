const mongoose = require("mongoose")

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log("Base de datos online")
  } catch (error) {
    console.log(error)
    throw new Error("Error al intentar conetarse a MongoDB")
  }
}

module.exports = {
  dbConnection,
}
