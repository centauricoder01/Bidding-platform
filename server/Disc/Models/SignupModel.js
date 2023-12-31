"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const reqString = {
    type: String,
    required: true,
};
const UserSchema = new mongoose_1.default.Schema({
    name: reqString,
    email: reqString,
    password: reqString,
}, {
    timestamps: true,
    versionKey: false,
});
const UserModel = mongoose_1.default.model("User", UserSchema);
exports.UserModel = UserModel;
