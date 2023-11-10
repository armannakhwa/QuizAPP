const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const quizRoutes = require("./routes/quizRoutes");
const performanceRoutes = require("./routes/performanceRoutes");
const cors = require("cors");
const path = require("path");
dotenv.config();

connectDb();

const app = express();

app.use(express.json());

app.use(cors());

// app.get("/", (req, res) => {
//   res.status(200).send("App is running successfully!");
// });


app.use("/api/user", userRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/testpage/api/quiz", quizRoutes);
app.use("/api/performance", performanceRoutes);

const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client//build/index.html'));
});


app.listen(port, () => {
  console.log(
    `Server is running on http://localhost:${port}`.cyan.bgWhite.bold
  );
});
