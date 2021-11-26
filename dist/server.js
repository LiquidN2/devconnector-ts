"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// CONFIGURE ENV
const dotenv = process.env.NODE_ENV !== 'production' ? require('dotenv') : null;
if (dotenv)
    dotenv.config();
const app_1 = __importDefault(require("./app"));
// START LISTENING FOR UNCAUGHT EXCEPTION (should be placed at the top of the code)
process.on('uncaughtException', err => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    // close the src before shutting down the application
    process.exit(1);
});
const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 5000;
// START SERVER
app_1.default.listen(port, () => {
    console.log(`***** ${env.toUpperCase()} *****`);
    console.log(`✅ App running on port ${port}`);
});
