"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cors_1 = require("cors");
const userRouter_1 = require("./routes/userRouter");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)({ origin: 'https://sahal-ecommercetask.vercel.app/' }));
app.use(express_1.default.json());
app.use('/', userRouter_1.userRouter);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map