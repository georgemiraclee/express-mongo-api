const express = require("express");
const cors = require("cors");
const db = require("./app/models");
const app = express();

const corsOptions = {
  origin: "*",
};

// Register cors middleware
app.use(cors(corsOptions));
app.use(express.json());

// Koneksi database
const mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
db.mongoose.connect(db.url, mongooseConfig)
  .then(() => console.log("Database connected"))
  .catch(err => {
    console.error(`Failed to connect to MongoDB: ${err.message}`);
    process.exit(1); // Exit with failure
  });

// Routes
app.get("/", (req, res) => {
  res.json({ message: "AWAKOWAKOKWA" });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
