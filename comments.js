// Create web server that listens on port 3000
// Respond with a JSON object with comments
// Respond with 200 status code
// Respond with the following JSON object:
// {
//     "comments": [
//         {
//             "username": "Todd",
//             "comment": "This is a comment"
//         },
//         {
//             "username": "Skyler",
//             "comment": "This is another comment"
//         },
//         {
//             "username": "Sk8erBoi",
//             "comment": "This is the best comment"
//         }
//     ]
// }
// Respond with 404 status code and the following JSON object:
// {
//     "error": "Resource not found"
// }
// Respond with 500 status code and the following JSON object:
// {
//     "error": "An unexpected error occurred"
// }

const express = require('express');
const app = express();
const port = 3000;

app.get('/comments', (req, res) => {
    res.status(200).json({
        "comments": [
            {
                "username": "Todd",
                "comment": "This is a comment"
            },
            {
                "username": "Skyler",
                "comment": "This is another comment"
            },
            {
                "username": "Sk8erBoi",
                "comment": "This is the best comment"
            }
        ]
    });
});

app.get('*', (req, res) => {
    res.status(404).json({
        "error": "Resource not found"
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        "error": "An unexpected error occurred"
    });
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});