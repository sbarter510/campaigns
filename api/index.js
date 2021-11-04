express = require("express");
cors = require("cors");

app = express();

app.use(cors());
app.use(express.json());

app.use("/influencer", require("./routes/influencer"));
app.use("/business", require("./routes/business"));
app.use("/auth", require("./routes/auth"));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
