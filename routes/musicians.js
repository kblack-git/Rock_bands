var express = require('express');
var router = express.Router();
const fs = require ('fs')
const MUSICIANS_FILE = './data/musicians.json'

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile(MUSICIANS_FILE, 'utf8',(err,data) => {
      if (err) {
          console.error(err);
          res.status(500).send('There was a problem reading the file...')
      }  
      
      res.json(JSON.parse(data));
  })
});

router.get('/:id', (req, res, next)  => {

    fs.readFile(MUSICIANS_FILE, 'utf8', (err,data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file...')
            return;    
        }
        const musicians = JSON.parse(data);
        const musician = musicians.find(musician => musician.id === req.params.id)
            console.log(band)
            
            if(!musician) {
            res.status(404).send('Band not found')
            return;
        }   
        res.json(musician) 
    })
})

//POST a new band
router.post('/', (req,res) => {
    fs.readFile(MUSICIANS_FILE, 'utf8', (err,data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file...')
            return;    
        }
        // create new var with data from the request and convert from JSON to regular JS object
        const musicians = JSON.parse(data);
        // res.send(bands)
        const newMusician = {
            id:(musicians.length +1).toString(),
            name: req.body.name,
            active: req.body.active,
            band: req.body.band,
            photo_url: req.body.photo_url}
        bands.push(newBand)
        fs.writeFile(BANDS_FILE, JSON.stringify(bands), err => {
            if(err) {
                console.error(err);
                res.status(500).send('There was a problem writing to the file')
                return;
            }
            res.send(newMusician)
        })

    })
})

        




module.exports = router;