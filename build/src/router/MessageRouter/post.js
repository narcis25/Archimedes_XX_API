"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMessage = void 0;
const firebase_admin_1 = require("firebase-admin");
const postMessage = async (req, res) => {
    const { message } = req.query;
    const ref = (0, firebase_admin_1.firestore)().collection('message');
    ref.add({ message });
    res.status(200).send('message added');
};
exports.postMessage = postMessage;
//# sourceMappingURL=post.js.map