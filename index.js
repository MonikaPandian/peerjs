const path = require('path');
const express = require('express');

const app = express();

__dirname = path.resolve();
const buildPath = path.join(__dirname, "/frontend/build");

app.use(express.static(buildPath))
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"))
})

app.listen(3000, () => console.log('server is listening on port 3000'));