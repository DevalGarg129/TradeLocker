const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/PositionsSchema.js");

const PositionsModel = model("Positions", PositionsSchema);

module.exports = { PositionsModel };