const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes)

app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`App listening on Port: ${PORT} :)`)
});

console.log('Server started!');