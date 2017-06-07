var request = require("request");
var cheerio = require("cheerio");

// 中央氣象局url
var cityUrlMap = {
  "台北市": "http://www.cwb.gov.tw/V7/forecast/taiwan/Taipei_City.htm", 
  "新北市": "http://www.cwb.gov.tw/V7/forecast/taiwan/New_Taipei_City.htm",
  "桃園市": "http://www.cwb.gov.tw/V7/forecast/taiwan/Taoyuan_City.htm",
  "台中市": "http://www.cwb.gov.tw/V7/forecast/taiwan/Taichung_City.htm",
  "台南市": "http://www.cwb.gov.tw/V7/forecast/taiwan/Tainan_City.htm",
  "高雄市": "http://www.cwb.gov.tw/V7/forecast/taiwan/Kaohsiung_City.htm",
  "基隆市": "http://www.cwb.gov.tw/V7/forecast/taiwan/Keelung_City.htm",
  "新竹市": "http://www.cwb.gov.tw/V7/forecast/taiwan/Hsinchu_City.htm",
  "新竹縣": "http://www.cwb.gov.tw/V7/forecast/taiwan/Hsinchu_County.htm",
  "苗栗縣": "http://www.cwb.gov.tw/V7/forecast/taiwan/Miaoli_County.htm",
  "彰化縣": "http://www.cwb.gov.tw/V7/forecast/taiwan/Changhua_County.htm",
  "南投縣": "http://www.cwb.gov.tw/V7/forecast/taiwan/Nantou_County.htm",
  "雲林縣": "http://www.cwb.gov.tw/V7/forecast/taiwan/Yunlin_County.htm",
  "嘉義縣": "http://www.cwb.gov.tw/V7/forecast/taiwan/Chiayi_City.htm",
  "嘉義市": "http://www.cwb.gov.tw/V7/forecast/taiwan/Chiayi_County.htm",
  "屏東縣": "http://www.cwb.gov.tw/V7/forecast/taiwan/Pingtung_County.htm",
  "宜蘭縣": "http://www.cwb.gov.tw/V7/forecast/taiwan/Yilan_County.htm",
  "花蓮縣": "http://www.cwb.gov.tw/V7/forecast/taiwan/Hualien_County.htm",
  "台東縣": "http://www.cwb.gov.tw/V7/forecast/taiwan/Taitung_County.htm",
  "澎湖縣": "http://www.cwb.gov.tw/V7/forecast/taiwan/Penghu_County.htm",
  "金門縣": "http://www.cwb.gov.tw/V7/forecast/taiwan/Kinmen_County.htm",
  "連江縣": "http://www.cwb.gov.tw/V7/forecast/taiwan/Lienchiang_County.htm"
}


var parseWeather = function (body) {
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);
    var r = {}
    // 篩選有興趣的資料
    r.tempurature1 = $("tr").find("td").html()
    r.probability1 = $("tr").find("td:nth-child(5)").html()
    r.tempurature2   = $("tr:nth-child(2)").find("td").html()
    r.probability2   = $("tr:nth-child(2)").find("td:nth-child(5)").html()
    return r
}

var printWeather = function (cityName, cityData) {
    // 輸出
    console.log("　　　　　　　　　≡"+cityName+"≡　　　　　");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +cityData.tempurature1 + " ℃" );
    console.log("║降雨機率：" +cityData.probability1 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +cityData.tempurature2 + " ℃");
    console.log("║降雨機率：" +cityData.probability2 );
    console.log("╚═════════════════════════════"+"\n");
}

var downloadWeather = function (cityName, url) {
    request(url, function (error, response , body){
        if (!error) {
            var cityData = parseWeather(body)
            printWeather(cityName, cityData)
        } else {
            throw Error('downloadWeather error : '+error)
        }
    })
}

for (var city in cityUrlMap) {
    downloadWeather(city, cityUrlMap[city])
}
