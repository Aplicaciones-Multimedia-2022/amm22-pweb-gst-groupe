function easyTabs() {
    var groups = document.querySelectorAll('.pestañas');
    if (groups.length > 0) {
      for (i = 0; i < groups.length; i++) {
        var tabs = groups[i].querySelectorAll('.pest');
        for (t = 0; t < tabs.length; t++) {
          tabs[t].setAttribute("index", t+1);
          if (t == 0) tabs[t].className = "pest selected";
        }
        var contents = groups[i].querySelectorAll('.contenido');
        for (c = 0; c < contents.length; c++) {
          contents[c].setAttribute("index", c+1);
          if (c == 0) contents[c].className = "contenido selected";
        }
      }
      var clicks = document.querySelectorAll('.pest');
      for (i = 0; i < clicks.length; i++) {
        clicks[i].onclick = function() {
          var tSiblings = this.parentElement.children;
          for (i = 0; i < tSiblings.length; i++) {
            tSiblings[i].className = "t-tab";
          }
          this.className = "pest selected";
          var idx = this.getAttribute("index");
          var cSiblings = this.parentElement.parentElement.querySelectorAll('.contenido');
          for (i = 0; i < cSiblings.length; i++) {
            cSiblings[i].className = "contenido";
            if (cSiblings[i].getAttribute("index") == idx) {
              cSiblings[i].className = "contenido selected";
            }
          }
        };
      }
    }
  }