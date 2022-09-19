const { findOneAndDelete } = require('../models/song')
const Song = require('../models/song')

// Put only handler or controller in controller folder
const getAllSongs = async (req,res) => {
    try {
        
        const songs = await Song.find({})
        
        res.status(201).json({ songs })
    } catch (error) {
        res.status(500).json({msg: error})
    }
    
}

// Post controller
const addSong = async (req,res) => {
    try {
        const song = await Song.create(req.body)
        res.status(201).json({ song })
    } catch (error) {
        res.status(500).json({msg: error})
    }
    // post request using create
  
}

// method to get a song
const getSong = async (req,res) => {
    try {
        // input song name in json
        const {id: songID } = req.params
        
        const song = await Song.findOne({ _id: songID})
       
        // if name doesnot match then ...to catch that type of error
        if(!song){
            return res.status(404).json({ msg: `No song with name ${id}`})
        }
        res.status(200).json({ song})
    } catch (error) {
        res.status(500).json({ error })
    }
}

// Update song in controller
const editSong = async (req,res) => {
   try {
    const {id: songID} = req.params
    const song = await Song.findOneAndUpdate({_id: songID},req.body,  {
        new:true,
        runValidators:true,
    })
    if(!song){
        return res.status(404).json({ msg: `No song with id : ${songID}`})
    }

    res.status(200).json( song )  // json pathako tai req.body ho
   } catch (error) {
    res.status(500).json(error)
   }
}

// Delete song in controller
const deleteSong = async (req,res) => {
    try {
       // delete by id
       const {id: songID} = req.params
       const song = await Song.findOneAndDelete({_id:songID})
       if(!song){
        return res.status(404).json({ msg: `No song with id: ${songID}`})
       }
    res.status(200).json(song)
    } catch (error) {
        res.status(500).json({ msg : error})
    }
    
}



module.exports = {getAllSongs, addSong, getSong, editSong, deleteSong }