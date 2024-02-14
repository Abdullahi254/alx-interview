#!/usr/bin/node

const request = require('request');

request(`https://swapi-api.alx-tools.com/api/films/${process.argv[2]}`, (error, response, body) => {
    const charactersUrl = JSON.parse(body).characters;
    charactersUrl.forEach(url => {
        request(url, (error, response, body) => {
            console.log(JSON.parse(body).name);
        });
    });
});