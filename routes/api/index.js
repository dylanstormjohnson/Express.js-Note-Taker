const router = require("express").Router()
const notesRouter = require("./noteRouter")

router.use("/notes", notesRouter)

module.exports = router