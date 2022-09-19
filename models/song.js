const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    name:{
        type:String,
        // validation and error message
        required:[true, 'name is mandatory'],
        /// trim extra spaces in between name
        // maxlength:[30, 'name connot be more than 30 characters']
    },
    artist:{
       type: String,
       //validation and default
       default:'No  Artist Name'
    },
    genre:{
        type:String,
        required:true 
    }

})

// converting schemas to model
const song = mongoose.model('Song', songSchema)

module.exports = song
