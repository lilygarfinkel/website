function main(){
  [...document.getElementsByTagName("button")].forEach(function (item) {
    var mqpdiv =document.getElementById("mqpInfo");
    var iqpdiv =document.getElementById("iqpInfo");

    item.addEventListener("click", function () {
    var div0 = document.getElementById("info");
    var div1 = document.getElementById("projs");
    var div2 = document.getElementById("assign");
    var page = document.getElementById("projPage");
    var projP = document.getElementById("projts");    
    var asgnP = document.getElementById("assgns");
    var homeP = document.getElementById("home");    
    var id = this.id;
    switch (id) {
      case "home":
      this.style.background = "#343a40";
      page.style.background = "#343a40";
      asgnP.style.background = "#202020";
      projP.style.background = "#202020";
      mqpdiv.style.display = "none";
      iqpdiv.style.display = "none";
      
      let display = div0.style.display;
      if (display == "none") {
          div0.style.display = "block";
          div1.style.display = "none";
          div2.style.display = "none";
          document.getElementById("text").innerHTML = "Hover over the buttons to learn more or click on the button to be directed to the final project!";
          document.getElementById("text1").innerHTML = "Hover over the buttons to learn more or click on the button to be directed to the final project!";
        }
        break;
      case "projts":
        console.log("clicked");
        this.style.background = "#343a40";
        page.style.background = "#343a40";
        asgnP.style.background = "#202020";
        homeP.style.background = "#202020";

        let display1 = div1.style.display;
        if (display1 == "none") {
          div1.style.display = "block";
          div0.style.display = "none";
          div2.style.display = "none";
        }
        break;
      case "assgns":
        this.style.background = "#343a40";
        page.style.background = "#343a40";
        projP.style.background = "#202020";
        homeP.style.background = "#202020";

        let display2 = div2.style.display;
        if (display2 == "none") {
          div2.style.display = "block";
          div0.style.display = "none";
          div1.style.display = "none";
        }
        break;

      case "ai":
        console.log("ai");
        break;
      case "algo":
        console.log("algo");
        break;
      case "dviz":
        console.log("dviz");
        break;
      case "wbwr":
        console.log("wbwr");
        break;
      case "softeng":
        console.log("softeng");
        break;
    }
  });
  item.addEventListener("mouseover", function () {
   

    var id = this.id;
    switch (id) {
      case "mqp":
        document.getElementById("text").innerHTML = openFile("https://raw.githubusercontent.com/lilygarfinkel/website/gh-pages/mqp.txt");
        mqpdiv.style.display = "block";
        iqpdiv.style.display = "none";

        break;
      case "iqp":
        document.getElementById("text").innerHTML = "This is about IQP";
        mqpdiv.style.display = "none";
        iqpdiv.style.display = "block";

        break;
      case "ai":
        document.getElementById("text1").innerHTML = "This is about AI";
        break;
      case "algo":
        document.getElementById("text1").innerHTML = "This is about ALGORITHMS";
        break;
      case "dviz":
        document.getElementById("text1").innerHTML = "This is about DATA VIZ";
        break;
      case "wbwr":
        document.getElementById("text1").innerHTML = "This is about WEBWARE";
        break;
      case "softeng":
        document.getElementById("text1").innerHTML = "This is about SOFT ENG";
        break;
    }
  });
});

}
  var openFile = function(file) {
    const url1 = file;
    fetch(url1)
    .then( r => r.text() )
    .then( t => { console.log(t);})
  };


