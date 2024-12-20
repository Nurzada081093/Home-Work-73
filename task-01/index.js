const express = require('express');
const app = express();
const port = 8000;

app.get('/:textFromUser', (req, res) => {
    return res.send(`<h1>${req.params.textFromUser}!</h1>`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});