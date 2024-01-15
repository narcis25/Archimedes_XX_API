"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const app_1 = require("firebase-admin/app");
const MessageRouter_1 = require("./router/MessageRouter");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, morgan_1.default)('combined'));
(0, app_1.initializeApp)();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use(MessageRouter_1.MessageRouter);
const port = parseInt(`${process.env.PORT}`) || 8080;
app.listen(port, () => {
    console.log(`helloworld: listening on port ${port}`);
});
//# sourceMappingURL=index.js.map