const router = require('express').Router();
const axios = require('axios');
const queryData = require('../utils/songs.json');
const db = require('../models')

router.get("/dummy", async (req,res)=>{
    console.log('creating dummy data...');
    for(let i = 0; i<queryData.length;i++){
        const {title, artist} = queryData[i];
        const {data} = await axios.get(`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?apikey=60591698cdad1c1fd8a6e0b4a6c4cfa2&q_track=${title}&q_artist=${artist}`);
        const song_lyric = data.message.body.lyrics.lyrics_body;
        db.Song.create({
            title,artist,song_lyric
        })
    }
    res.json('done!')
})

module.exports = router;