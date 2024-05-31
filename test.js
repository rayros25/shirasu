const axios = require('axios');

const baseUrl = 'https://api.mangadex.org';

var id = prompt("Enter a manga ID:")
const languages = ['en'];

const resp = await axios({
    method: 'GET',
    url: `${baseUrl}/manga/${id}/feed?translatedLanguage[]=en&order[createdAt]=desc`,
    params: {
        translatedLanguage: languages
    }
});

console.log(resp.data.data.map(chapter => chapter.id));