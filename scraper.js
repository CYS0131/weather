var request = require("request");
var cheerio = require("cheerio");

// 中央氣象局url
var url1 = "http://www.cwb.gov.tw/V7/forecast/taiwan/Taipei_City.htm";
var url2 = "http://www.cwb.gov.tw/V7/forecast/taiwan/New_Taipei_City.htm";
var url3 = "http://www.cwb.gov.tw/V7/forecast/taiwan/Taoyuan_City.htm";
var url4 = "http://www.cwb.gov.tw/V7/forecast/taiwan/Taichung_City.htm";
var url5 = "http://www.cwb.gov.tw/V7/forecast/taiwan/Tainan_City.htm";
var url6 = "http://www.cwb.gov.tw/V7/forecast/taiwan/Kaohsiung_City.htm";
var url7 = "http://www.cwb.gov.tw/V7/forecast/taiwan/Keelung_City.htm";
var url8 = "http://www.cwb.gov.tw/V7/forecast/taiwan/Hsinchu_City.htm";
var url9 = "http://www.cwb.gov.tw/V7/forecast/taiwan/Hsinchu_County.htm";
var url10= "http://www.cwb.gov.tw/V7/forecast/taiwan/Miaoli_County.htm";
var url11= "http://www.cwb.gov.tw/V7/forecast/taiwan/Changhua_County.htm";
var url12= "http://www.cwb.gov.tw/V7/forecast/taiwan/Nantou_County.htm";
var url13= "http://www.cwb.gov.tw/V7/forecast/taiwan/Yunlin_County.htm";
var url14= "http://www.cwb.gov.tw/V7/forecast/taiwan/Chiayi_City.htm";
var url15= "http://www.cwb.gov.tw/V7/forecast/taiwan/Chiayi_County.htm";
var url16= "http://www.cwb.gov.tw/V7/forecast/taiwan/Pingtung_County.htm";
var url17= "http://www.cwb.gov.tw/V7/forecast/taiwan/Yilan_County.htm";
var url18= "http://www.cwb.gov.tw/V7/forecast/taiwan/Hualien_County.htm";
var url19= "http://www.cwb.gov.tw/V7/forecast/taiwan/Taitung_County.htm";
var url20= "http://www.cwb.gov.tw/V7/forecast/taiwan/Penghu_County.htm";
var url21= "http://www.cwb.gov.tw/V7/forecast/taiwan/Kinmen_County.htm";
var url22= "http://www.cwb.gov.tw/V7/forecast/taiwan/Lienchiang_County.htm";



//=======================以下開始為台北市今日白天天氣=======================//
// 取得網頁資料
request(url1, function (error, response , body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle    = $("tr").find("td").html()
    var boxTitle2   = $("tr").find("td:nth-child(5)").html()
    var boxTitle3   = $("tr:nth-child(2)").find("td").html()
    var boxTitle4   = $("tr:nth-child(2)").find("td:nth-child(5)").html()
    
    // 輸出
    console.log("　　　　　　　　　≡台北市 (Taipei City)≡　　　　　　　　　");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃" );
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");

  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為新北市今日白天天氣=======================//
// 取得網頁資料
request(url2, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("　　　　　　　　≡新北市 (New Taipei City)≡　　　　　　　　");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為桃園市今日白天天氣=======================//
// 取得網頁資料
request(url3, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                  ≡桃園市 (Taoyuan City)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為台中市今日白天天氣=======================//
// 取得網頁資料
request(url4, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                  ≡台中市 (Taichung City)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為台南市今日白天天氣=======================//
// 取得網頁資料
request(url5, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                  ≡台南市 (Tainan City)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為高雄市今日白天天氣=======================//
// 取得網頁資料
request(url6, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                ≡高雄市 (Kaohsiung City)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為基隆市今日白天天氣=======================//
// 取得網頁資料
request(url7, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                  ≡基隆市 (Keelung City)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為新竹市今日白天天氣=======================//
// 取得網頁資料
request(url8, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                  ≡新竹市 (Hsinchu City)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為新竹縣今日白天天氣=======================//
// 取得網頁資料
request(url9, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                ≡新竹縣 (Hsinchu County)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為苗栗縣今日白天天氣=======================//
// 取得網頁資料
request(url10, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                 ≡苗栗縣 (Miaoli County)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為彰化縣今日白天天氣=======================//
// 取得網頁資料
request(url11, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("               ≡彰化縣 (Changhua County)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為南投縣今日白天天氣=======================//
// 取得網頁資料
request(url12, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                 ≡南投縣 (Nantou County)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為雲林縣今日白天天氣=======================//
// 取得網頁資料
request(url13, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                 ≡雲林縣 (Yunlin County)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為嘉義市今日白天天氣=======================//
// 取得網頁資料
request(url14, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                  ≡嘉義市 (Chiayi City)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為嘉義縣今日白天天氣=======================//
// 取得網頁資料
request(url15, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                 ≡嘉義縣 (Chiayi County)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為屏東縣今日白天天氣=======================//
// 取得網頁資料
request(url16, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                ≡屏東縣 (Pingtung_County)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為宜蘭縣今日白天天氣=======================//
// 取得網頁資料
request(url17, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                 ≡宜蘭縣 (Yilan County)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為花蓮縣今日白天天氣=======================//
// 取得網頁資料
request(url18, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                ≡花蓮縣 (Hualien County)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為台東縣今日白天天氣=======================//
// 取得網頁資料
request(url19, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                ≡台東縣 (Taitung County)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為澎湖縣今日白天天氣=======================//
// 取得網頁資料
request(url20, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                 ≡澎湖縣 (Penghu County)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為金門縣今日白天天氣=======================//
// 取得網頁資料
request(url21, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("                 ≡金門縣 (Kinmen County)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});
//=======================以下開始為連江縣今日白天天氣=======================//
// 取得網頁資料
request(url22, function (error, response, body){
  if (!error) {
    
    // 用 cheerio 解析 html 資料
    var $ = cheerio.load(body);

    // 篩選有興趣的資料
    var boxTitle  = $("tr").find("td").html()
    var boxTitle2 = $("tr").find("td:nth-child(5)").html()
    var boxTitle3 = $("tr:nth-child(2)").find("td").html()
    var boxTitle4 = $("tr:nth-child(2)").find("td:nth-child(5)").html()

    
    // 輸出
    console.log("              ≡連江縣 (Lienchiang_County)≡");
    console.log("╔═════════今日06:00～今日18:00══════════");
    console.log("║氣　　溫：" +boxTitle + " ℃");
    console.log("║降雨機率：" +boxTitle2 );
    console.log("╠═════════今日18:00～明日06:00══════════");
    console.log("║氣　　溫：" +boxTitle3 + " ℃");
    console.log("║降雨機率：" +boxTitle4 );
    console.log("╚═════════════════════════════"+"\n");
    
  } else {
    console.log("擷取錯誤：" + error);
  }
});

