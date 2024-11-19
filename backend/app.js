const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const registrationRoutes = require("./routes/registrationRoutes");
app.use("/api", registrationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
