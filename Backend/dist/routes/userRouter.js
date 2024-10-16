"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userController_1 = require("../controller/userController");
exports.userRouter = express_1.default.Router();
exports.userRouter.get('/products', userController_1.getProducts);
//# sourceMappingURL=userRouter.js.map