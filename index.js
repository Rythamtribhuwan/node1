const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js Deployment</title>
        </head>

        <body>
            <div class="container">
                <h1> Node.js Application</h1>
                <p>Jenkins Automatic Deployment</p>
                <div class="status"> Deployment Successful</div>
                <p>Version 3.0.0 LIVE</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
