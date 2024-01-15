"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMessage = void 0;
const firebase_admin_1 = require("firebase-admin");
const deleteMessage = async (req, res) => {
    const { messageId } = req.query;
    if (!messageId) {
        res.status(400).send('Message ID is Required');
        return;
    }
    const ref = (0, firebase_admin_1.firestore)().collection('message');
    await ref.doc(`${messageId}`).delete();
    res.status(200).send('message 삭제');
};
exports.deleteMessage = deleteMessage;
//# sourceMappingURL=delete.js.map