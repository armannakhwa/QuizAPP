const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(
      `MongoDB Connected to Host: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

// const connectDb = async () => {
//   const con = await mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//     autoIndex: true,
//   });
//   console.log(
//     console.log(`MongoDB Connected: ${con.connection.host}.`)
//   );
// };


module.exports = connectDb;
