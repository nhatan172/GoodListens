// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require rails-ujs
//= require turbolinks
//= require_tree .

$(document).on('ready page:load', function(){
  $('a.internal_link').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1100, function(){  
        window.location.hash = hash;
      });
    }
  });
  //Add review
  $( "#add_review" ).on( "click", function() {
    console.log("hello");
    $(".review_form").css("display", "block");
  });
  $(".close_form").click(function(){
    var curr = $(this).parentsUntil(".review_form").parent(".review_form")
    curr.css("display", "none");
  });
  $(".review_form").on('click',function(event) {
          $(".review_form").css("display", "none");
  }).on('click','.review_form_content',function(e){
    e.stopPropagation();
  });

});
