"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTimeStamp = addTimeStamp;
function addTimeStamp(req, res, next) {
    req.timestamp = Date.now();
    next();
}
