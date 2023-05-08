const router = require("express").Router()
const path = require("path")
router.get('/', async (req, res) => {
    // console.log('this is the /api/notes route');
    try {
        const originalFile = await fs.readFile('./db/db.json');

        const data = JSON.parse(originalFile);

        console.log(data);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
    res.sendFile(path.join(__dirname, './db/db.json'))
});

router.post('/', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'))
});

router.delete('/', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'))
});

module.exports = router