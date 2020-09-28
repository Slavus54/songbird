const express = require('express') 
const app = express()
const path = require('path')
const cors = require('cors')
const favicon = require('express-favicon')
const PORT = process.env.PORT || 4000 
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const prefix = 'https://cors-anywhere.herokuapp.com/'
require('dotenv').config()

app.use(cors())
let users = []

// app.use(favicon(__dirname + '/build/favicon.png')); 
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'build')));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });
  }

  
app.get('/czech', (req, res) => {
    let data = [
        {
            name: 'Slava',
            age: 15
        }
    ]
    return res.send(data)
})

app.get('/forest-birds', (req, res) => {
    const api = [
        {
            url: `https://www.xeno-canto.org/api/2/recordings?query=kea`,
            audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC405529-180129_0139_kea.mp3',
            first: 'Попугай',
            second: 'Kea',
            third: 'Сова',
            img_url: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=78d959bd0249442712c00a6addb8513c&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=kea',
            latin: 'Nestor notabilis',
            right: 'Kea',
            img: 'https://live.staticflickr.com/65535/50339726833_93bb650815.jpg'
        },
        {
            url: `https://www.xeno-canto.org/api/2/recordings?query=tanager`,
            audio: 'https://www.xeno-canto.org/sounds/uploaded/SHMWBKDDGP/XC539351-Rhodinocichla%20rosea.mp3',
            first: 'Танагра-кео',
            second: 'Трясогуска',
            third: 'Ворон',
            img_url: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=78d959bd0249442712c00a6addb8513c&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=tanager',
            latin: 'Tangara fastuosa',
            right: 'Танагра-кео',
            img: 'https://live.staticflickr.com/65535/50354305497_74979b8906.jpg'
        }
    ]
    return res.send(api)
})

app.get('/tits-birds', (req, res)=> {
    const api = [
        {
            url: `https://www.xeno-canto.org/api/2/recordings?query=tit`,
            audio: 'https://www.xeno-canto.org/sounds/uploaded/CDTGHVBGZP/Titicaca%20Grebe2009-11-4-4t.mp3',
            first: 'Синица',
            second: 'Короткокрылая поганка',
            third: 'Ястреб',
            img_url: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=78d959bd0249442712c00a6addb8513c&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=tit',
            latin: 'Phacellodomus striaticeps',
            right: 'Короткокрылая поганка',
            img: 'https://live.staticflickr.com/65535/50354919956_7fb7a43504.jpg'
        },
        {
            url: `https://www.xeno-canto.org/api/2/recordings?query=titmouse`,
            audio: 'https://www.xeno-canto.org/sounds/uploaded/FFNYJFDJXV/XC563113-170702BridledTitmouseCornville.mp3',
            first: 'Американский гренадёр',
            second: 'Трясогуска',
            third: 'Ворон',
            img_url: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=78d959bd0249442712c00a6addb8513c&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=titmouse',
            latin: 'Psaltriparus minimus',
            right: 'Американский гренадёр',
            img: 'https://live.staticflickr.com/65535/50353792046_982b6e3c8c.jpg'
        }
    ]
    return res.send(api)
})
app.get('/ocean-birds', (req, res) => {
    const api = [
        {
            url: `https://www.xeno-canto.org/api/2/recordings?query=albatross`,
            audio: 'https://www.xeno-canto.org/sounds/uploaded/FNIOJOZADD/XC209430-LaysanAlbatross_oahu_010115_billclack2.mp3',
            first: 'Фригат',
            second: 'Oak',
            third: 'Темноспинный альбатрос',
            img_url: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=78d959bd0249442712c00a6addb8513c&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=albatross',
            latin: 'Diomedeidae',
            right: 'Oak',
            img: 'https://live.staticflickr.com/65535/50348114416_aba462aefe.jpg'
        },
        {
            url: `https://www.xeno-canto.org/api/2/recordings?query=petrel`,
            audio: 'https://www.xeno-canto.org/sounds/uploaded/YAELHUNFDF/XC401263-wilson%27s%20storm%20petrel%20%282%29.MP3',
            first: 'Качурка Вильсона',
            second: 'Кака',
            third: 'Тупик',
            img_url: 'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=78d959bd0249442712c00a6addb8513c&tag_mode=all&extras=url_m&format=json&nojsoncallback=1&tags=petrel',
            latin: 'Procellariidae',
            right: 'Качурка Вильсона',
            img: 'https://live.staticflickr.com/65535/50354453447_8bbe9de640.jpg'
        }
    ]
    return res.send(api)
})

app.post('/signup', async (req, res) => {
    try {
        let salt = await bcrypt.genSalt()
        let data = req.body.data
        data.password = await bcrypt.hash(data.password, salt)
        console.log(data)
        users.push(data)
        return res.send(data)
    } catch (e) {
        console.log(e)
    } 
})

app.post('/signin', async (req, res) => {
    const user = users.find(el => el.name = req.body.data.name)
    try {
        if (await bcrypt.compare(req.body.data.password, user.password)) {
            console.log('Equal')
            return res.send('Great')
        }
    } catch (e) {
        console.log(e)
    } 
})

app.listen(PORT, () => console.log(`Server has started at ${PORT} port`))