const express = require('express');
const helmet = require('helmet');
const app = express();
app.use(helmet());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.listen(8000, () => {
    console.log('server is listening on port 2020');
});
