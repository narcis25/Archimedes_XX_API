"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageRouter = void 0;
const express_1 = __importDefault(require("express"));
const get_1 = require("./get");
const post_1 = require("./post");
const put_1 = require("./put");
const delete_1 = require("./delete");
exports.MessageRouter = express_1.default.Router();
exports.MessageRouter.route('/message')
    .get(get_1.getMessage)
    .post(post_1.postMessage)
    .put(put_1.updateMessage)
    .delete(delete_1.deleteMessage);
//# sourceMappingURL=index.js.map