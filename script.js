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
            var div1 = document.getElementById("projs");
        var div2 = document.getElementById("assign");

    var id = this.id;
    switch (id) {
      case "projts":
        console.log("projects");
        let display1 = div1.style.display;
        console.log(display1);

        if (display1 == "none") {
          div1.style.display = "block";
          div2.style.display = "none";
        }
        break;
      case "assgns":
        console.log("assign");
        let display2 = div2.style.display;
        console.log(display2);

        if (display2 == "none") {
          div2.style.display = "block";
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
        document.getElementById("text").innerHTML = "This is about MQP";
        break;
      case "iqp":
        document.getElementById("text").innerHTML = "This is about IQP";
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

// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
