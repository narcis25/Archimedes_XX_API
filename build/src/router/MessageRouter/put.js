"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMessage = void 0;
const firebase_admin_1 = require("firebase-admin");
const updateMessage = async (req, res) => {
    const { messageId, message } = req.query;
    if (!messageId) {
        res.status(400).send('Message ID is Required');
        return;
    }
    const ref = (0, firebase_admin_1.firestore)().collection('message');
    await ref.doc(`${messageId}`).set({ message });
    res.status(200).send('message 수정');
};
exports.updateMessage = updateMessage;
//# sourceMappingURL=put.js.map