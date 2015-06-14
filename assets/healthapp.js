(function() {
  "use strict";
  //FUNCTIONS:

  var hasClass = function(el, cls) {
    return el.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
  };

  var toggleClass = function(el, cls) {
    if (!hasClass(el, cls)){
      el.className += " " + cls;
    }
    else {
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
      el.className = el.className.replace(reg,' ');
    }
  };

  var navClick = function(event){
    event.preventDefault();
    var name = event.currentTarget.getAttribute("name");
    // if (hasClass(event.currentTarget, "nav")){
    //   var subMenu = document.getElementsByClassName(name)[0];
    //   toggleClass(subMenu, "hidden");
    // }
    if (hasClass(event.currentTarget, "video")){
      document.getElementById("demo-image").src = "assets/images/" + name + ".jpg";
    }
    toggleClass(document.getElementsByClassName("active")[0], "active");
    var text = document.getElementById(name + "-text");
    toggleClass(text, "active")
  };

  //RUN PROGRAM:

  var navButtons = document.getElementsByTagName("button")
  for (var i = 0; i < navButtons.length; i++){
    if(navButtons[i].addEventListener){
      navButtons[i].addEventListener('click', navClick, false);
    }
    else if(navButtons[i].attachEvent){ // this is for IE, because it doesn't support addEventListener
     navButtons[i].attachEvent('onclick', function(){
       return navClick.apply(anchor, [window.event])
     });
   }
  }
}());
