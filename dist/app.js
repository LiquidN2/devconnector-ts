"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// GLOBAL MIDDLEWARES
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/api', (req, res) => {
    res.send('Hello, this is your api entry point');
});
// SERVE STATIC FILES IN PRODUCTION
if (process.env.NODE_ENV === 'production') {
    app.use(express_1.default.static(path_1.default.resolve(__dirname, '..', 'client', 'build')));
    app.get('*', (req, res) => {
        res.sendFile(path_1.default.resolve(__dirname, '..', 'client', 'build', 'index.html'));
    });
}
exports.default = app;
