express = require("express");
cors = require("cors");
auth = require("./middleware/auth");
app = express();

app.use(cors());
app.use(express.json());

// app.use("/influencer", require("./routes/influencer"));
// app.use("/business", require("./routes/business"));
// app.use("/auth", require("./routes/auth"));
app.use("/user", require("./routes/user"));

//dont think i need
// app.use((req, res, next) => {
//   res.locals.headers["x-auth-token"] = req.headers["x-auth-token"];
//   next();
// });

// app.use((req, res, next) => {
//   res.locals.headers["Authorization"] = req.headers["Authorization"];
//   next();
// });

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
