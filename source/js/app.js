(function() {
  'use strict';


})();

$(document).ready(function(){
  $('.menu__btn').click(function(){
    $(this).toggleClass('open');
    $('.nav_pages').toggleClass('open');
  });
});