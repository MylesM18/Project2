const router = require("express").Router();
const axios = require("axios");
const queryData = require("../utils/songs.json");
const db = require("../models");


router.get("/dummy", async (req, res) => {
  console.log("from database..")

  for (let i = 0; i < queryData.length; i++) {
      try{
    var {title, artist,song} = queryData[i];
    const {data} = await axios.get(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${song}`,
        {
          headers: {
            origin: "localhost:3000",
          },
        }
      )
    
    const songData = await axios.get(`https://api.musixmatch.com/ws/1.1/matcher.lyrics.get?apikey=60591698cdad1c1fd8a6e0b4a6c4cfa2&q_track=${title}&q_artist=${artist}`)
        // console.log(data.data.message.body.lyrics.lyrics_body);

        var song_lyric = songData.data.message.body.lyrics.lyrics_body;

        db.Song.create({
            title,artist,song_lyric, preview:data.preview
          })
    
        }catch(err){console.log(err)}
   // DZ();
    }
});

module.exports = router;
