const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const app = express();

/*
|--------------------------------------------------------------------------
| ENV VARIABLES
|--------------------------------------------------------------------------
*/

const PORT = process.env.PORT || 3000;

const MONGO_URL =
  process.env.MONGO_URL ||
  "mongodb://mongo-service:27017/tradelocker";

/*
|--------------------------------------------------------------------------
| MIDDLEWARE
|--------------------------------------------------------------------------
*/

app.use(cors());
app.use(bodyParser.json());

/*
|--------------------------------------------------------------------------
| ROUTES
|--------------------------------------------------------------------------
*/

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Backend healthy",
  });
});

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/stocks", async (req, res) => {
  try {
    const stocks = [
      {
        symbol: "RELIANCE",
        name: "Reliance Industries Ltd.",
        price: 2311.55,
        change: "+14.60",
        changePercent: "+0.64%",
        volume: "3.8M",
      },
      {
        symbol: "TCS",
        name: "Tata Consultancy Services Ltd.",
        price: 3261.75,
        change: "-8.20",
        changePercent: "-0.25%",
        volume: "1.2M",
      },
      {
        symbol: "HDFCBANK",
        name: "HDFC Bank Ltd.",
        price: 1606.8,
        change: "+19.30",
        changePercent: "+1.22%",
        volume: "5.5M",
      },
    ];

    res.json(stocks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.status(201).json({
      message: "Order saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign(
      { email: newUser.email },
      process.env.JWT_SECRET || "SECRET_KEY",
      { expiresIn: "7d" }
    );

    res.status(201).json({
      message: "Signup successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid password",
      });
    }

    const token = jwt.sign(
      { email: user.email },
      process.env.JWT_SECRET || "SECRET_KEY",
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

app.get("/profile", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    const token = authHeader.split(" ")[1];

    const payload = jwt.verify(
      token,
      process.env.JWT_SECRET || "SECRET_KEY"
    );

    const user = await UserModel.findOne({
      email: payload.email,
    }).select("name email");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json({
      name: user.name,
      email: user.email,
      welcome: `Welcome back, ${user.name}`,
    });
  } catch (error) {
    res.status(401).json({
      message: "Invalid or expired token",
    });
  }
});

/*
|--------------------------------------------------------------------------
| DATABASE CONNECTION
|--------------------------------------------------------------------------
*/

console.log("Mongo URL:", MONGO_URL);
console.log("PORT:", PORT);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("DB connected successfully");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed");
    console.error(error);

    process.exit(1);
  });