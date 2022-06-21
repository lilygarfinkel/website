/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
[...document.getElementsByTagName("button")].forEach(function (item) {
  item.addEventListener("click", function () {
    var id = this.id;
    switch (id) {
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
        document.getElementById("ProjT").innerHTML = "This is about MQP";
        console.log("mqp");
        break;
      case "iqp":
        console.log("iqp");
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
});

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
