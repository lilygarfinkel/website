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
        this.makeTeal();
        makeNormal("iqp");
      
        mqpdiv.style.display = "block";
        iqpdiv.style.display = "none";
        ogText.style.display = "none";
        break;
      case "iqp":
        this.makeTeal();
        makeNormal("mqp");
      
        document.getElementById("mqp").style.background = "#202020";
        document.getElementById("mqp").style.color = "#ffffff" ;
        document.getElementById("mqp").style.border = "1px solid #41ead4";

        ogText.style.display = "none";
        mqpdiv.style.display = "none";
        iqpdiv.style.display = "block";

        break;
      case "ai":
        this.makeTeal();
        makeNormal("softeng");
        makeNormal("algo");
        makeNormal("dviz");
        makeNormal("wbwr");
    
        document.getElementById("text1").innerHTML = "This is about AI";
        break;
      case "algo":
        this.makeTeal();
        makeNormal("softeng");
        makeNormal("ai");
        makeNormal("dviz");
        makeNormal("wbwr");

        document.getElementById("text1").innerHTML = "This is about ALGORITHMS";
        break;
      case "dviz":
        this.makeTeal();
        makeNormal("softeng");
        makeNormal("ai");
        makeNormal("algo");
        makeNormal("wbwr");

        document.getElementById("text1").innerHTML = "This is about DATA VIZ";
        break;
      case "wbwr":
        this.makeTeal();
        makeNormal("softeng");
        makeNormal("algo");
        makeNormal("dviz");
        makeNormal("ai");

        document.getElementById("text1").innerHTML = "This is about WEBWARE";
        break;
      case "softeng":
      this.makeTeal();
      makeNormal("ai");
      makeNormal("algo");
      makeNormal("dviz");
      makeNormal("wbwr");


        document.getElementById("text1").innerHTML = "This is about SOFT ENG";
        break;
    }
  });
});

}

function makeTeal(){
  this.style.background = "#41ead4";
  this.style.color = "#202020";
  this.style.border = "1px solid #ffffff";
}
function makeNormal(id){
  document.getElementById(id).style.background = "#202020";
  document.getElementById(id).style.color = "#ffffff" ;
  document.getElementById(id).style.border = "1px solid #41ead4";
}
