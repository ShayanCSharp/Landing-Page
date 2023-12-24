var Tawk_API = Tawk_API || {},
  Tawk_LoadStart = new Date();
(function () {
  var s1 = document.createElement("script"),
    s0 = document.getElementsByTagName("script")[0];
  s1.async = true;
  s1.src = "https://embed.tawk.to/657f94f207843602b8030f27/1hht5rl7d";
  s1.charset = "UTF-8";
  s1.setAttribute("crossorigin", "*");
  s0.parentNode.insertBefore(s1, s0);
})();

// Hamburger

let hamOpen = document.querySelector(".ri-menu-3-line");
let hamclose = document.querySelector(".hamHead i");
let ul = document.querySelector("nav ul");

hamOpen.addEventListener("click",()=>{
    ul.style.top = "0";
});

hamclose.addEventListener("click",()=>{
    ul.style.top = "-100dvh";
});

// Pop up Submit

document.querySelector(".pop").addEventListener("submit",(e)=>{
  e.preventDefault()
})

// jQuery

$(document).ready(function(){
  $( function() {
    $( ".pop" ).draggable();
  } );
})

