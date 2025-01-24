const express = require('express')
const app = express()
const PORT = 8000

const characters = {
    'goku': {
    'Anime': 'DragonBall',
    'Main Attack': 'KAMEHAMEHAAAAA!!!!',
    'Race': 'Saiyan'
    },
    'vegeta': {
        'Anime': 'DragonBall',
        'Main Attack': 'GALICK GUUUUUUNNNN!!!!!!',
        'Race': 'Saiyan'
    },
    'unknown':{
        'Anime': 'unknown',
        'Main Attack': 'unknown',
        'Race': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const characterName = request.params.name.toLocaleLowerCase()
    if( characters[characterName] ){
        response.json(characters[characterName])
    }else{
        response.json(characters['unknown'])
    }
    response.json(characters)
})

app.listen(PORT , ()=>{
    console.log(`The server is now running on port ${PORT}! Betta go Catch It!`)
})