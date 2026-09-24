const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js Deployment</title>
            <style>
                body {
                    margin: 0;
                    min-height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: Arial, sans-serif;
                    background: #f4f7fb;
                }

                .container {
                    text-align: center;
                    background: white;
                    padding: 50px;
                    border-radius: 20px;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.12);
                }

                h1 {
                    color: #2563eb;
                    margin-bottom: 15px;
                }

                p {
                    color: #555;
                    font-size: 18px;
                }

                .status {
                    margin-top: 20px;
                    color: #16a34a;
                    font-weight: bold;
                    font-size: 20px;
                }
            </style>
        </head>

        <body>
            <div class="container">
                <h1> Node.js Application</h1>
                <p>Jenkins Automatic Deployment</p>
                <div class="status"> Deployment Successful</div>
                <p>Version 2.0.0 LIVE</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
