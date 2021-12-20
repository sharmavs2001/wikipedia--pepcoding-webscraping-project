const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');

const url = 'https://en.wikipedia.org/wiki/V';

request(url, callbackfunction);

function callbackfunction(err, res, html) {
    let $ = cheerio.load(html);

    const oneObj = $('.tocsection-1 > a');

    const oneUrl = url + oneObj.attr('href');
    request(oneUrl, fechOneData);

}

function fechOneData(res, err, html) {

    let $ = cheerio.load(html);

    console.log($('#History').text() + "\n");

    for (i = 16; i < 20; i++) {
        console.log($('p:nth-child(' + i + ')').text());
    }


    const twoObj = $('.tocsection-2 > a');

    const twoUrl = url + twoObj.attr('href');
    request(twoUrl, fechTwoData);


}

function fechTwoData(res, err, html) {

    let $ = cheerio.load(html);


    console.log($('#Letter').text() + "\n");

    for (i = 21; i < 26; i++) {
        console.log($('p:nth-child(' + i + ')').text());
    }

    const threeObj = $('.tocsection-3 > a');

    const threeUrl = url + threeObj.attr('href');
    request(threeUrl, fechThreeData);


}

function fechThreeData(res, err, html) {

    let $ = cheerio.load(html);

    console.log($('#Name_in_other_languages').text() + "\n");

    for (i = 1; i < 10; i++) {
        console.log($('ul:nth-child(27)>li:nth-child(' + i + ')').text());
    }

    console.log($('p:nth-child(28)').text());

}



/*
//As, the wikipedia page wasn't taking us to a new page, 
//we can also directly access the data, without using request() fuction for going to the next pages
//The code for that is :


const fs= require('fs');
const cheerio=require('cheerio');
const request = require('request');

const url='https://en.wikipedia.org/wiki/V';

request(url, callbackfunction);

function callbackfunction(err, res, html)
{
   let $ = cheerio.load(html);
    

     console.log($('#History').text()+"\n");

    for(i=16; i<20; i++)
    {
        console.log(   $('p:nth-child('+i+')').text()       );
    }

        console.log($('#Letter').text()+"\n");

    for(i=21; i<26; i++)
    {
        console.log(   $('p:nth-child('+i+')').text()       );
    }


    console.log($('#Name_in_other_languages').text()+"\n");

    for(i=1; i<10; i++)
    {
        console.log(   $('ul:nth-child(27)>li:nth-child('+i+')').text()       );
    }

    console.log($('p:nth-child(28)').text());


}



*/