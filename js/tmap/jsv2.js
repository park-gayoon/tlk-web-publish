let t = (function() {
    var _nu = Math.floor((Math.random() * (3 - 1 + 1)) + 1);
    var domian = "toptmaptile1";
    if (_nu == 1) {
        domian = "toptmaptile1"
    } else if (_nu == 2) {
        domian = "toptmaptile2"
    } else {
        domian = "toptmaptile3"
    }
    var a = typeof Tmapv2 == "object" && Tmapv2.singleFile;
    var c = window.Tmapv2;
    
    window.Tmapv2 = {
        _getScriptLocation: function() {
            return "https://" + domian + ".tmap.co.kr/scriptSDKV2/"
        },
        VERSION_NUMBER: Math.random()
    };

    var f = "";
    if (!a) {
        if (!c) {
            c = ["tmapjs2.min.js"]
        }
        var d = new Array(c.length);
        var e = Tmapv2._getScriptLocation();
        for (var f = 0, g = c.length; f < g; f++) {
            d[f] = "<script id='tmapkey' src='" + e + c[f] + "'></script>"
        }
        if (d.length > 0) {
            
            document.write(d.join(""))
            f = d;
        }
        // 만들어진 script 경로
        f = e + c[0];
    }

    return f;
})()