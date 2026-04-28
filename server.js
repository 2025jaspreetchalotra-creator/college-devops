const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>DevOps App</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    color: white;
                    text-align: center;
                    margin-top: 100px;
                }
                .container {
                    background: rgba(0,0,0,0.3);
                    padding: 30px;
                    border-radius: 10px;
                    display: inline-block;
                }
                a {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 10px 20px;
                    background: white;
                    color: #333;
                    text-decoration: none;
                    border-radius: 5px;
                    font-weight: bold;
                }
                a:hover {
                    background: #ddd;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>DevOps Practical Running</h1>
                <p>Your server is up and running successfully.</p>
                <a href="/home">Go to Home</a>
            </div>
        </body>
        </html>
    `);
});

app.get('/home', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Home</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #aaa;
                    color: #000;
                    text-align: center;
                    margin-top: 100px;
                }
                
                a {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 10px 20px;
                    color: black;
                    text-decoration: none;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <h1>DevOps Home Page</h1>
            <p>Home page.</p>
            <a href="/">Back</a>
        </body>
        </html>
    `);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});