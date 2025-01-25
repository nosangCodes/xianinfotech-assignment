import express from "express";
import { config } from "dotenv";
import routes from "./routes/index.js";
import bodyParser from "body-parser";
import cors from "cors";
config();

const app = express();
app.use(bodyParser.json());

const allowedDomains = ["http://localhost:5173", "https://example.com"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedDomains.indexOf(origin) !== -1) {
      // If the origin is in the allowed list or no origin (same-origin requests), allow the request
      callback(null, true);
    } else {
      // Otherwise, block the request
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Use CORS middleware with the configured options
app.use(cors(corsOptions));

app.use("/api", routes);

app.listen(process.env.PORT || 4000, () => {
  console.log("server listening on ", process.env.PORT || 4000);
});
