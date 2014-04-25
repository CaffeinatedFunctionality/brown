// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require skrollr
//= require skrollr.ie
//= require skrollr.menu
//= require jquery
//= require jquery_ujs
//= require mobile
//= require foundation
//= require_tree .

$(document).ready(function(){

  $(".main").onepage_scroll({
     sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
     easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in", "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
     animationTime: 900, // AnimationTime let you define how long each section takes to animate
     pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
     updateURL: false // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
  });
  
});

function init() {
  
  // start up after 2sec no matter what
    window.setTimeout(function(){
        start();
    }, 2000);
}

// fade in experience
function start() {
  
  $('body').removeClass("loading").addClass('loaded');
  
}

$(window).load(function() {
  
  // fade in page
  init();
  
});

(function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);


( function( $ ) {
  
  // Setup variables
  var $window = $(window);
  var $slide = $('.homeSlide');
  var $slideTall = $('.homeSlideTall');
  var $slideTall2 = $('.homeSlideTall2');
  var $body = $('body');
  
  //FadeIn all sections   
  setTimeout(function() {
        
        // Resize sections
        adjustWindow();
        
        // Fade in sections
      $body.removeClass('loading').addClass('loaded');
      
  }, 800);
  
  function adjustWindow(){
    
    // Init Skrollr
    var s = skrollr.init({
        render: function(data) {
        
            //Debugging - Log the current scroll position.
            //console.log(data.curTop);
        }
    });
    
    // Get window size
      winH = $window.height();
      
      // Keep minimum height 550
      if(winH <= 550) {
      winH = 550;
    } 
      
      // Resize our slides
      $slide.height(winH);
      $slideTall.height(winH*2);
      $slideTall2.height(winH*3);
      
      // Refresh Skrollr after resizing our sections
      s.refresh($('.homeSlide'));
      
  }
    
} )( jQuery );