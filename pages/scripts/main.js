function linkPages(link) {
  // get the json file
  var rawFile = new XMLHttpRequest();
  var reload = 0;
  rawFile.open("get", link, true);
  rawFile.onreadystatechange = function() {
    reload++;
    if (rawFile.readyState === 4) {
      var allText = rawFile.responseText;
    }
    
    if (reload == 3) {
      if (allText == "Error 404, file not found.") {
      } else {
        
        if (document.getElementById("main").childElementCount >= 0) {
        for (var i = 0; i < document.getElementById("main").childElementCount; i++) {
          document.getElementById("main").children[i].remove();
        }
        }
        
        var d = document.createElement("div")
        d.innerHTML = allText;
        document.getElementById("main").appendChild(d)
        //game.data.bf = JSON.parse(allText);
      }
    }
  }
  rawFile.send();
}

linkPages("pages/menu.mdk");