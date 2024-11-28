const express = require('express');
const app = express();
const port = 8000;

const password = 'secret';
const Vigenere = require('caesar-salad').Vigenere;

app.get('/encode/:textFromUser', (req, res) => {
    return res.send(Vigenere.Cipher(password).crypt(req.params.textFromUser));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});