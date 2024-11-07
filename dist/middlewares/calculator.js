"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCalculatorRequest = validateCalculatorRequest;
function validateCalculatorRequest(req, res, next) {
    const { operator, operand1, operand2 } = req.body;
    // Validate operands
    if (typeof operand1 !== "number" || typeof operand2 !== "number") {
        res.status(400).json({ error: "Invalid operands, must be numbers." });
        return; // Ensure no further execution after response is sent
    }
    // Validate operator
    const validOperators = ["+", "-", "*", "/"];
    if (!validOperators.includes(operator)) {
        res.status(400).json({ error: "Operator must be one of +, -, *, or /." });
        return; // Ensure no further execution after response is sent
    }
    // If validation passes, move to the next middleware
    next();
}
