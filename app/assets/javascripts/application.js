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
//= require foundation
//= require_tree .



$(function(){ $(document).foundation(); });

(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=588284871221969";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

// Setup variables
  $window = $(window);
  $slide = $('.homeSlide');
  $slideTall = $('.homeSlideTall');
  $slideTall2 = $('.homeSlideTall2');
  $body = $('body');

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



// Init Skrollr
var s = skrollr.init({
  render: function(data) {
  
      //Debugging - Log the current scroll position.
      //console.log(data.curTop);
  }
});
    