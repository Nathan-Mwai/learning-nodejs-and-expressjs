"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = logger;
function logger(req, res, next) {
    console.log(`${req.timestamp}${req.method} ${req.ip} ${req.originalUrl}`);
    // Added this to ensure client gets response
    next();
}
