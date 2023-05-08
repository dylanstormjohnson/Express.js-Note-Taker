const router = require("express").Router()
const path = require("path")
const fs = require("fs/promises")
const { v4: uuidv4 } = require('uuid');
const readNotes = async () => {
    var originalFile = await fs.readFile(path.join(__dirname, "../../db/db.json"));
    originalFile = JSON.parse(originalFile)
    return originalFile
}

router.get('/', async (req, res) => {
    // console.log('this is the /api/notes route');
    try {
        res.json(await readNotes())
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        console.log("Posting to my notes")
        console.log(req.body)
        var newNote = {...req.body,
        id: uuidv4()}
        var notes = await readNotes()
        notes.push(newNote)
        await fs.writeFile(path.join(__dirname, "../../db/db.json"), JSON.stringify(notes));
        res.json({message: "You're doing great!"})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

});

router.delete('/:id', async (req, res) => {
    try {
        var notes = await readNotes()
        //find the particular note with the id, and take it out
        var newNotes = notes.filter(note => note.id != req.params.id)
        await fs.writeFile(path.join(__dirname, "../../db/db.json"), JSON.stringify(newNotes));
        res.json({message: "You're doing great!"})
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router