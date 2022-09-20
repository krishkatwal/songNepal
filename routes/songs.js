const express = require('express')
const router = express.Router()
const {getAllSongs, addSong, getSong,editSong, deleteSong} = require('../controller/songs')
// get method and posted
router.route('/').get(getAllSongs).post(addSong)

// get method with querying using name
router.route('/:name').get(getSong).put(editSong).delete(deleteSong)

// update song and delete
// router.route('/:id')





module.exports = router