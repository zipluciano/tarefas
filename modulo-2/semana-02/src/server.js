const express = require("express");
const app = express();
const routes = require("./routes/routes");
const { portPicker } = require("./utils/port");
const PORT = portPicker() || 3333;

app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Server ruinning on port: ${PORT}`));
