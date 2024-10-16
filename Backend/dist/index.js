"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const userRouter_1 = require("./routes/userRouter");
const app = express();
const port = 3000;
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use('/', userRouter_1.userRouter);
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map