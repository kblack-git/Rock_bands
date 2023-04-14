var express = require('express');
var router = express.Router();
const fs = require ('fs')
const BANDS_FILE = './data/bands.json'

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile(BANDS_FILE, 'utf8',(err,data) => {
      if (err) {
          console.error(err);
          res.status(500).send('There was a problem reading the file...')
      }  
      
      res.json(JSON.parse(data));
  })
});

router.get('/:id', (req, res, next)  => {

    fs.readFile(BANDS_FILE, 'utf8', (err,data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file...')
            return;    
        }
        const bands = JSON.parse(data);
        const band = bands.find(band => band.id === req.params.id)
            console.log(band)
            
            if(!band) {
            res.status(404).send('Band not found')
            return;
        }   
        res.json(band) 
    })
})

//POST a new band
router.post('/', (req,res) => {
    fs.readFile(BANDS_FILE, 'utf8', (err,data) => {
        if (err) {
            console.error(err);
            res.status(500).send('There was a problem reading the file...')
            return;    
        }
        // create new var with data from the request and convert from JSON to regular JS object
        const bands = JSON.parse(data);
        // res.send(bands)
        const newBand = {
            id:(bands.length +1).toString(),
            name: req.body.name,
            active: req.body.active,
            yearFormed: req.body.yearFormed}
        bands.push(newBand)
        fs.writeFile(BANDS_FILE, JSON.stringify(bands), err => {
            if(err) {
                console.error(err);
                res.status(500).send('There was a problem writing to the file')
                return;
            }
            res.send(newBand)
        })

    })
})

        




module.exports = router;