
// const mongoose = require("mongoose");
// const morgan = require("morgan");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const { readdirSync } = require("fs");
// require('dotenv').config();
// const express = require("express");
// const path = require('path');
// // app
// const app = express();

// // db
// mongoose
//   .connect(process.env.DATABASE, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: true,
//   })
//   .then(() => console.log("DB CONNECTED"))
//   .catch((err) => console.log("DB CONNECTION ERR", err));

// // middlewares
// app.use(morgan("dev"));
// app.use(bodyParser.json({ limit: "2mb" }));
// app.use(cors());


// const __dirname = path.resolve();
// // const routesPath = path.join(__dirname, 'routes');
// app.use('/api', require(routesPath));
// app.use(express.static(path.join(__dirname, 'client/dist')));
// app.get('*', (_, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });
// // routes middleware
// readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// // port
// const port = process.env.PORT || 3000;

// // app.listen(port, () => console.log(`Server is running on port ${port}`));
// app.listen(port, '192.168.0.106', () => {
//   console.log('Server running on port 8000');
// });

const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { readdirSync } = require("fs");
require('dotenv').config();
const express = require("express");
// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// routes middleware
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
