const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

let messages = [];

app.use(bodyParser.json());
app.use(express.static('public')); // Для статики (HTML, CSS, JS)

app.post('/send', (req, res) => {
    const { number, text } = req.body;
    messages.push({ number, text });
    res.sendStatus(200);
});

app.get('/messages', (req, res) => {
    res.json(messages);
});

// Сброс сообщений раз в день
setInterval(() => {
    messages = [];
}, 24 * 60 * 60 * 1000); // 24 часа

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
