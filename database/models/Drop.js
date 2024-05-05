"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Schema = mongoose_1.default.Schema;
var dropSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    website: String,
    image: String,
    badge: { type: Number, required: true },
    metadata: { type: String, required: true }
});
exports.default = dropSchema;
