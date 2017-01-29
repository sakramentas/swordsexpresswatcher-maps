var objArr_stopsToCity = new Array();
var objArr_stopsToSwords = new Array();
var bus = new Array();
var stopDesc = new Array();
var infWnd = new google.maps.InfoWindow();
var req;
var infArr; 
var seBusDesc = new Array();
var timer = 11;
var gMap;

if (window.XMLHttpRequest){
    req = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    try { req = new ActiveXObject('Msxml2.XMLHTTP'); }
    catch (e){}
    try { req = new ActiveXObject('Microsoft.XMLHTTP'); }
    catch (e){}
}

var seMarkerCity = new google.maps.MarkerImage('http://www.swordsexpress.com/_images/stops-to-city.png', new google.maps.Size(14, 24), new google.maps.Point(0, 0), new google.maps.Point(7, 22));
var seMarkerBlue = new google.maps.MarkerImage('http://www.swordsexpress.com/_images/stops-to-swords.png', new google.maps.Size(14, 24), new google.maps.Point(0, 0), new google.maps.Point(7, 22));

var seShadow = new google.maps.MarkerImage('http://www.swordsexpress.com/_images/se-shadow.png', new google.maps.Size(23, 18), new google.maps.Point(0, 0), new google.maps.Point(0, 17));

var seE = new google.maps.MarkerImage('http://www.swordsexpress.com/_images/e.png', new google.maps.Size(45, 45), new google.maps.Point(0, 0), new google.maps.Point(22, 22));
var seN = new google.maps.MarkerImage('http://www.swordsexpress.com/_images/n.png', new google.maps.Size(45, 45), new google.maps.Point(0, 0), new google.maps.Point(22, 22));
var seNe = new google.maps.MarkerImage('http://www.swordsexpress.com/_images/ne.png', new google.maps.Size(45, 45), new google.maps.Point(0, 0), new google.maps.Point(22, 22));
var seNw = new google.maps.MarkerImage('http://www.swordsexpress.com/_images/nw.png', new google.maps.Size(45, 45), new google.maps.Point(0, 0), new google.maps.Point(22, 22));
var seS = new google.maps.MarkerImage('http://www.swordsexpress.com/_images/s.png', new google.maps.Size(45, 45), new google.maps.Point(0, 0), new google.maps.Point(22, 22));
var seSe = new google.maps.MarkerImage('http://www.swordsexpress.com/_images/se.png', new google.maps.Size(45, 45), new google.maps.Point(0, 0), new google.maps.Point(22, 22));
var seSw = new google.maps.MarkerImage('http://www.swordsexpress.com/_images/sw.png', new google.maps.Size(45, 45), new google.maps.Point(0, 0), new google.maps.Point(22, 22));
var seW = new google.maps.MarkerImage('http://www.swordsexpress.com/_images/w.png', new google.maps.Size(45, 45), new google.maps.Point(0, 0), new google.maps.Point(22, 22));
var seUnav = new google.maps.MarkerImage('http://www.swordsexpress.com/_images/unav.png', new google.maps.Size(45, 45), new google.maps.Point(0, 0), new google.maps.Point(22, 22));


var busStopsToCityLatLong =
[
  [seMarkerCity, seShadow, 53.4596654, -6.2503624, 333, 1],
  [seMarkerCity, seShadow, 53.459984, -6.245307, 334, 2],
  [seMarkerCity, seShadow, 53.4606895, -6.2413665, 339, 3],
  [seMarkerCity, seShadow, 53.4625433, -6.2398851, 338, 4],
  [seMarkerCity, seShadow, 53.463878, -6.239549, 337, 5],
  [seMarkerCity, seShadow, 53.4657815, -6.2397887, 336, 6],
  [seMarkerCity, seShadow, 53.468251, -6.2367971, 339, 7],
  [seMarkerCity, seShadow, 53.4694079, -6.2308137, 340, 8],
  [seMarkerCity, seShadow, 53.4686893, -6.2279908, 341, 9],
  [seMarkerCity, seShadow, 53.4682362, -6.2209795, 342, 10],
  [seMarkerCity, seShadow, 53.4650053, -6.2173297, 343, 11],
  [seMarkerCity, seShadow, 53.4622247, -6.2131752, 344, 12],
  [seMarkerCity, seShadow, 53.4569384, -6.2124503, 345, 13],
  [seMarkerCity, seShadow, 53.454165, -6.215768, 582, 14],
  [seMarkerCity, seShadow, 53.454629, -6.2183, 347, 15],
  [seMarkerCity, seShadow, 53.4558985, -6.2217432, 348, 16],
  [seMarkerCity, seShadow, 53.4543519, -6.2243928, 583, 17],
  [seMarkerCity, seShadow, 53.4526008, -6.2272095, 587, 18],
  [seMarkerCity, seShadow, 53.4455748, -6.2352678, 351, 19],
  [seMarkerCity, seShadow, 53.444665, -6.231174, 352, 20],
  [seMarkerCity, seShadow, 53.4449935, -6.2271727, 353, 21],
  [seMarkerCity, seShadow, 53.446006, -6.2243145, 354, 22],
  [seMarkerCity, seShadow, 53.443639, -6.2111045, 355, 23],
  [seMarkerCity, seShadow, 53.4434736, -6.2093203, 356, 24],
  [seMarkerCity, seShadow, 53.3507872, -6.2259726, 357, 25],
  [seMarkerCity, seShadow, 53.3474227, -6.2397389, 584, 26],
  [seMarkerCity, seShadow, 53.3479217, -6.247108, 585, 27],
  [seMarkerCity, seShadow, 53.348063, -6.256350, 586, 28]
];

var busStopsToSwordsLatLong =
[
  [seMarkerBlue, seShadow, 53.3477969, -6.2584213, 555, 29],
  [seMarkerBlue, seShadow, 53.3482716, -6.2502319, 556, 30],
  [seMarkerBlue, seShadow, 53.3481121, -6.2472811, 557, 31],
  [seMarkerBlue, seShadow, 53.3477493, -6.2423821, 558, 32],
  [seMarkerBlue, seShadow, 53.3473521, -6.2364198, 559, 33],
  [seMarkerBlue, seShadow, 53.346875, -6.228919, 560, 34],
  [seMarkerBlue, seShadow, 53.4434416, -6.2111721, 562, 35],
  [seMarkerBlue, seShadow, 53.446133, -6.222701, 563, 36],
  [seMarkerBlue, seShadow, 53.444509, -6.231292, 564, 37],
  [seMarkerBlue, seShadow, 53.445133, -6.235007, 565, 38],
  [seMarkerBlue, seShadow, 53.4521321, -6.2286058, 566, 39],
  [seMarkerBlue, seShadow, 53.4544301, -6.224466, 567, 40],
  [seMarkerBlue, seShadow, 53.45538, -6.222422, 568, 41],
  [seMarkerBlue, seShadow, 53.454339, -6.216293, 569, 42],
  [seMarkerBlue, seShadow, 53.461677, -6.2134949, 570, 43],
  [seMarkerBlue, seShadow, 53.464877, -6.2169974, 571, 44],
  [seMarkerBlue, seShadow, 53.4680775, -6.2215895, 572, 45],
  [seMarkerBlue, seShadow, 53.4684694, -6.2275828, 573, 46],
  [seMarkerBlue, seShadow, 53.4695937, -6.2318054, 574, 47],
  [seMarkerBlue, seShadow, 53.4683705, -6.2362437, 575, 48],
  [seMarkerBlue, seShadow, 53.4666115, -6.2392209, 576, 49],
  [seMarkerBlue, seShadow, 53.4656155, -6.2396175, 577, 50],
  [seMarkerBlue, seShadow, 53.4641399, -6.239343, 578, 51],
  [seMarkerBlue, seShadow, 53.4616212, -6.2403112, 579, 52],
  [seMarkerBlue, seShadow, 53.4598859, -6.2417255, 580, 53],
  [seMarkerBlue, seShadow, 53.459853, -6.245138, 581, 54],
  [seMarkerBlue, seShadow, 53.339029, -6.249886, 581, 55]
];

stopDesc[1] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">ABBEYVALE<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[2] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">SWORDS MANOR<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[3] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">VALLEY VIEW<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[4] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">THE GALLOPS<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[5] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">LIOS CIAN<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[6] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">CIANLEA<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[7] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">LAURELTON<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[8] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">APPLEWOOD ESTATE<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[9] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">JUGBACK LANE<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[10] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">SAINT COLMCILLE'S GFC, SWORDS<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[11] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">WEST SEATOWN<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[12] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">SEATOWN ROAD<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[13] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">SWORDS BYPASS<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[14] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">MALAHIDE ROUNDABOUT, SWORDS<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[15] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">PAVILIONS SHOPPING CENTRE<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[16] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">DUBLIN STREET, SWORDS<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[17] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">HIGHFIELDS<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[18] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">BALLINTRANE<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[19] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">BOROIMHE LAURELS<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[20] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">BOROIMHE MAPLES<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[21] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">AIRSIDE ROAD<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[22] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">AIRSIDE CENTRAL<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[23] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">HOLYWELL DISTRIBUTOR ROAD<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[24] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">M1 DRINAN<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[25] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">EAST WALL ROAD<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[26] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">CONVENTION CENTRE<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[27] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">SEАN O'CASEY PEDESTRIAN BRIDGE<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[28] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">EDEN QUAY<br />TOWARDS CITY CENTRE</span><br /></div>";
stopDesc[29] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">EDEN QUAY<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[30] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">IFSC<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[31] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">CUSTOM HOUSE QUAY<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[32] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">CUSTOM HOUSE QUAY<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[33] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">NORTH WALL QUAY<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[34] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">POINT DEPOT<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[35] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">HOLYWELL DISTRIBUTOR ROAD<br />TOWARDS SWORDS</span></div>";
stopDesc[36] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">AIRSIDE CENTRAL<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[37] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">BOROIMHE MAPLES<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[38] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">BOROIMHE LAURELS<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[39] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">BALLINTRANE<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[40] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">HIGHFIELDS<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[41] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">DUBLIN STREET, SWORDS<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[42] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">MALAHIDE ROUNDABOUT, SWORDS<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[43] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">SEATOWN ROAD<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[44] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">WEST SEATOWN<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[45] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">SAINT COLMCILLE'S GFC, SWORDS<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[46] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">JUGBACK LANE<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[47] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">APPLEWOOD ESTATE<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[48] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">LAURELTON<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[49] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">CIANLEA<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[50] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">ARDCIAN<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[51] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">LIOS CIAN<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[52] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">VALLEY VIEW<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[53] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">SAINT CRONAN'S SOUTH<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[54] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">SWORDS MANOR<br />TOWARDS SWORDS</span><br /></div>";
stopDesc[55] = "<div align=\"center\"><img src=\"http://www.swordsexpress.com/_images/se-info-wnd.png\" width=\"200\" height=\"62\" align=\"middle\" /><br /><br /><span class=\"tt0\">MERRION SQUARE<br />TOWARDS SWORDS</span><br /></div>";

function updateSePosition(map) {
  if (req) {
      req.open('GET', 'http://www.swordsexpress.com/latlong.php?id=' + String(Math.floor(Math.random() * 999999999999999999999)), true);
      req.onreadystatechange = function () {
          if (req.readyState == 4 && req.statusText == "OK") {
              infArr = eval(req.responseText);
        if(infArr[0] == 'allHidden'){
          alert("There are no buses en route."); 
          return false;
        }             
              if (infArr.length >= 1 && infArr[0] != 'error') {
          for (var i = 0; i < infArr.length; i++) {
                      var seBus = infArr[i];            
            if (typeof (bus[seBus[0]]) == 'object' && seBus[1] == 'hidden') {
              bus[seBus[0]].setVisible(false);
            } else {            
              var myLatLng = new google.maps.LatLng(seBus[1], seBus[2]);
              var seIcon;
              var seDirection;

              if (seBus[4] == 1) {
                switch (seBus[6]) {
                  case "e":
                    seIcon = seE;
                    seDirection = seBus[5] + " (East)";
                    break;
                  case "s":
                    seIcon = seS;
                    seDirection = seBus[5] + " (South)";
                    break;
                  case "w":
                    seIcon = seW;
                    seDirection = seBus[5] + " (West)";
                    break;
                  case "n":
                    seIcon = seN;
                    seDirection = seBus[5] + " (North)";
                    break;
                  case "ne":
                    seIcon = seNe;
                    seDirection = seBus[5] + " (Northeast)";
                    break;
                  case "nw":
                    seIcon = seNw;
                    seDirection = seBus[5] + " (Northwest)";
                    break;
                  case "se":
                    seIcon = seSe;
                    seDirection = seBus[5] + " (Southeast)";
                    break;
                  case "sw":
                    seIcon = seSw;
                    seDirection = seBus[5] + " (Southwest)";
                    break;
                  case "x3":
                    seIcon = seUnav;
                    seDirection = "Unavailable";
                    break;
                  default:
                    seIcon = seUnav;
                    seDirection = "Unavailable";
                }
              }
              else { seIcon = seUnav; seDirection = "Unavailable"; }
              seBusDesc[seBus[0]] = '<div><strong>' + seBus[0] + '</strong><br />' + seBus[3] + '<br />' + seDirection + '</div>';
              if (typeof (bus[seBus[0]]) == 'object') {
                bus[seBus[0]].setVisible(true);
                bus[seBus[0]].setPosition(myLatLng);
                bus[seBus[0]].setIcon(seIcon);
              } else {
                bus[seBus[0]] = new google.maps.Marker ({
                  position: myLatLng,
                  map: map,
                  icon: seIcon,
                  zIndex: 777 + i,
                  title: seBus[0]
                });
                google.maps.event.addListener(
                  bus[seBus[0]],
                  'click',
                  function () {
                    infWnd.setContent(seBusDesc[this.getTitle()]);
                    infWnd.open(map, this);
                  }
                );
              }
            } 
                  }
              }
            else { alert("Can't connect to GPS server"); }
          }
      };
    req.send(null);
  }
  else { alert("Your browser does not support AJAX!"); }
}

function seCountdown() {
  if(timer == 0){
    timer = 2;
    document.getElementById('timer').innerHTML = 'Next Update: ' + timer + ' seconds';
    updateSePosition(gMap);
  } else {
    timer = timer - 1;
    document.getElementById('timer').innerHTML = 'Next Update: ' + timer + ' seconds';
  }
}

function setMarkers(map, arrayWithStopsInfo, whereToStoreStops) {
  for (var i = 0; i < arrayWithStopsInfo.length; i++) {
    var busStop = arrayWithStopsInfo[i];
    var myLatLng = new google.maps.LatLng(busStop[2], busStop[3]);
    var curIndex = eval(whereToStoreStops).push (
      new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: busStop[0],
        zIndex: Number(busStop[4]),
        title: String(busStop[5])
      })
    );
    google.maps.event.addListener(
      eval(whereToStoreStops)[eval(whereToStoreStops).length - 1],
      'click',
      function() {
        infWnd.setContent(stopDesc[Number(this.getTitle())]);
        infWnd.open(map, this);
      }
    );
  }
}


function hideMarkers(arrWithMarkersObjs) {
  if(typeof(eval(arrWithMarkersObjs)[0]) == 'object'){
    if (eval(arrWithMarkersObjs)[0].getVisible() == true){
      for (var i = 0; i < eval(arrWithMarkersObjs).length; i++){
        eval(arrWithMarkersObjs)[i].setVisible(false);
      }
    } else {
      for (var i = 0; i < eval(arrWithMarkersObjs).length; i++){
        eval(arrWithMarkersObjs)[i].setVisible(true);
      }
    }
  }
}

function zoomMap(lat, long, zoom) {
  gMap.setCenter(new google.maps.LatLng(lat, long));
  gMap.setZoom(zoom);
  google.maps.event.addDomListener(window, 'resize', function () {
      gMap.setCenter(new google.maps.LatLng(lat, long), zoom);
  });
}

var swordsCoords = [
        new google.maps.LatLng(53.500708619342596, -6.236457824707031),
        new google.maps.LatLng(53.4996875431271, -6.257057189941406),
        new google.maps.LatLng(53.493152073002584, -6.2766265869140625),
        new google.maps.LatLng(53.4849813187523, -6.293449401855469),
        new google.maps.LatLng(53.464751932476766, -6.307525634765625),
        new google.maps.LatLng(53.444308417781244, -6.2999725341796875),
        new google.maps.LatLng(53.42856020439549, -6.2896728515625),
        new google.maps.LatLng(53.41546633864108, -6.2642669677734375),
        new google.maps.LatLng(53.414033952423104, -6.2271881103515625),
        new google.maps.LatLng(53.41423858197937, -6.196632385253906),
        new google.maps.LatLng(53.420581609889645, -6.165046691894531),
        new google.maps.LatLng(53.434287502702816, -6.141014099121094),
        new google.maps.LatLng(53.45534913802113, -6.123504638671875),
        new google.maps.LatLng(53.47210918873058, -6.131744384765625),
        new google.maps.LatLng(53.48334697901198, -6.15509033203125),
        new google.maps.LatLng(53.495398754476376, -6.182899475097656),
        new google.maps.LatLng(53.500708619342596, -6.236457824707031)
    ];

var cityCoords = [
        new google.maps.LatLng(53.38885700803899, -6.2834930419921875),
        new google.maps.LatLng(53.36776241350118, -6.31988525390625),
        new google.maps.LatLng(53.35137105198305, -6.3555908203125),
        new google.maps.LatLng(53.32759237756109, -6.370697021484375),
        new google.maps.LatLng(53.28738448416437, -6.334991455078125),
        new google.maps.LatLng(53.27260472674136, -6.33636474609375),
        new google.maps.LatLng(53.26521293124656, -6.29241943359375),
        new google.maps.LatLng(53.253301239242234, -6.205902099609375),
        new google.maps.LatLng(53.2841005353249, -6.141357421875),
        new google.maps.LatLng(53.29805557491275, -6.139984130859375),
        new google.maps.LatLng(53.31918467454872, -6.193199157714844),
        new google.maps.LatLng(53.33374330585105, -6.182212829589844),
        new google.maps.LatLng(53.34440281405261, -6.175346374511719),
        new google.maps.LatLng(53.366533280081114, -6.192169189453125),
        new google.maps.LatLng(53.37759420428007, -6.207618713378906),
        new google.maps.LatLng(53.382714029867195, -6.229591369628906),
        new google.maps.LatLng(53.388242750108304, -6.2642669677734375),
        new google.maps.LatLng(53.38885700803899, -6.2834930419921875)
    ];

function loadZoom(position, gMap) {

    swordsPolygon = new google.maps.Polygon({
        paths: swordsCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });

    cityPolygon = new google.maps.Polygon({
        paths: cityCoords,
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35
    });

    if (google.maps.geometry.poly.containsLocation(new google.maps.LatLng(position.coords.latitude, position.coords.longitude), swordsPolygon) == true) {
        var zoomLevel = 13;
        zoomMap(53.44806129777264, -6.221234075807142, zoomLevel); 
    }
    else if (google.maps.geometry.poly.containsLocation(new google.maps.LatLng(position.coords.latitude, position.coords.longitude), cityPolygon) == true) {
        var zoomLevel = 13;
        zoomMap(53.343448, -6.254505, zoomLevel);
    } else {
        var zoomLevel = 11;
        zoomMap(53.402955, -6.245556, zoomLevel);
    }
}

function loadError(err) {}

function initialize()
{
    var latlngCentre = new google.maps.LatLng(53.402955, -6.245556);
    var zoomLevel = 12;

    var mapOptions =
  {
      zoom: zoomLevel,
      center: latlngCentre,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [ 
          { "featureType": "administrative", "stylers": [ { "saturation": -100 }, { "gamma": 0.75 } ] },
          { "featureType": "landscape", "stylers": [ { "saturation": -100 }, { "gamma": 0.75 } ] },
          { "featureType": "poi", "stylers": [ { "saturation": -100 }, { "gamma": 0.75 } ] },
          { "featureType": "poi.business", "elementType": "labels", "stylers": [ { "visibility": "off" } ] },
          { "featureType": "road", "stylers": [ { "saturation": -100 }, { "gamma": 0.75 } ] },
          { "featureType": "transit", "stylers": [ { "saturation": -100 }, { "gamma": 0.75 } ] },
          { "elementType": "labels.text.fill", "stylers": [ { "visibility": "on" }, { "color": "#333333" } ] }
        ]
  };

    gMap = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    setMarkers(gMap, busStopsToCityLatLong, "objArr_stopsToCity");
    setMarkers(gMap, busStopsToSwordsLatLong, "objArr_stopsToSwords");
    updateSePosition(gMap);

    google.maps.event.addDomListener(window, 'resize', function(){
        gMap.setCenter(latlngCentre, zoomLevel);
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            loadZoom(position, gMap);
        }, loadError, { maximumAge: 15000, timeout: 6000, enableHighAccuracy: true });
    }
   
  setInterval("seCountdown()", 1000);
}
