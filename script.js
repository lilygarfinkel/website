function main(){
  [...document.getElementsByTagName("button")].forEach(function (item) {
    var mqpdiv =document.getElementById("mqpInfo");
    var iqpdiv =document.getElementById("iqpInfo");
    var ogText = document.getElementById("text");

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
        // var content = readText("https://raw.githubusercontent.com/lilygarfinkel/website/gh-pages/mqp.txt");
        // console.log(content);
        // document.getElementById("text").innerHTML = content;
        this.style.background = "#41ead4";
        this.style.color = "#202020";
        this.style.border = "1px solid #ffffff"
        mqpdiv.style.display = "block";
        iqpdiv.style.display = "none";
        ogText.style.display = "none";
        break;
      case "iqp":
        // var content1 = readText("https://raw.githubusercontent.com/lilygarfinkel/website/gh-pages/iqp.txt");
        // console.log(content1);
        // document.getElementById("text").innerHTML = content1;
        this.style.background = "#41ead4";
        this.style.color = "#202020";
        this.style.border = "1px solid #ffffff"
        ogText.style.display = "none";
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
function readText(file) {

  var txtFile = new XMLHttpRequest();
  txtFile.open("GET", file, true);
  txtFile.onreadystatechange = function() {
    if (txtFile.readyState === 4) {  // Makes sure the document is ready to parse.
      if (txtFile.status === 200) {  // Makes sure it's found the file.
        allText = txtFile.responseText;
       // lines = txtFile.responseText.split("\n"); // Will separate each line into an array
      }
    }
  }
  txtFile.send(null);
  return allText;

}