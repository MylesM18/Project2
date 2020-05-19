var path = require("path");
var axios = require('axios');
const router = require('express').Router();

    router.get('/', function (req, res) {
        res.render('home', { style: 'style.css'});
    });

    router.get('/inspire', function(req, res){
        res.render('inspire', {style: 'inspire.css'});
    });

    
    router.get('/verses/:keyword', function (req, res) {
        axios.get(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-02/search?query=${req.params.keyword}&offset=0`, {
            headers: {
                "api-key": "31846b22b20e9f9e386e4b2a8f972659"
            }
        }).then(function (response) {
            // handle success
            console.log(response);
            res.render('verses', { data: response.data.data.verses, style: 'verses.css', keyword:req.params.keyword});
        })

    })

    module.exports = router;