var assert = require("assert")
var request = require("request");
var cheerio = require("cheerio");
// var scraper = require("../scraper.js")
describe("查詢台灣及時天氣" , function () {
    describe("#scraper" , function(){
        it("test scraper" , function(){
          var url = "http://www.cwb.gov.tw/V7/forecast/taiwan/Taipei_City.htm"
            // assert.equal(url,body)
          request(url, function (error, response , body){
            var cityData = parseWeather(body)
            assert.equal(true, cityData.tempurature1.indexOf('~')>=0)
            // printWeather(cityName, cityData)
           // assert(1===1)
          })
        });
    });
});