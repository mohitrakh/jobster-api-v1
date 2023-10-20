const app = require("./app");
require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => console.log("DB connection succesfull"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("connected");
});
