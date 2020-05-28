const Sequelize = require('sequelize');
const db = require('../models')
var axios = require('axios');
const router = require('express').Router();
let Op = Sequelize.Op
    router.get('/', function (req, res) {
        res.render('home', { style: 'style.css'});
    });
    
    router.get('/verses/:keyword', async function (req, res) {
        const response = await axios.get(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/search?query=${req.params.keyword}&offset=0`, {
            headers: {
                "api-key": "31846b22b20e9f9e386e4b2a8f972659"
            }});
            // handle success
            //console.log(response);
            //search db for keyword
           const dbRes = await db.Song.findAll();
            const filtered = dbRes.map(a=>a.dataValues).filter(a=> (new RegExp(req.params.keyword, "gi")).test(a.song_lyric));
            res.render('verses', { data: response.data.data.verses, style: 'verses.css', keyword:req.params.keyword, filtered});
        });

        router.get('/inspire/:title', async function(req, res){
            const dbResponse = await db.Song.findAll();
            let filtered = null;

            console.log(); 
            for(let i = 0; i < dbResponse.length; i++){
                if(dbResponse[i].dataValues.title == req.params.title)
                filtered = dbResponse[i].dataValues
            }

            console.log(filtered)

            console.log(req.params.title)
            //const filtered = dbResponse.map(a=>a.dataValues).filter(a=> (new RegExp(req.params.keyword, "gi")).test(a.song_lyric));
            res.render('inspire', {style: 'inspire.css', title:req.params.keyword, filtered});
        });

    module.exports = router;