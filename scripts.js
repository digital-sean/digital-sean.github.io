function removeUpright() {
  jQuery('.first-name').removeClass('upright');
  jQuery('.last-name').removeClass('upright');
};

jQuery(document).ready(function() {


   //Add smooth scrolling to all links
   $("a").on('click', function(event) {

     // clicked hash link should have value
     if (this.hash !== "") {
       // Prevent default link click behavior
       event.preventDefault();

       // get hash value
       var hash = this.hash;

       // animate for smooth scroll to clicked link
       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 1000, function(){
       });
     } // End if
   });
});

jQuery('.first-name div').on('mouseover', function() {
  jQuery(this).addClass('weee');
});
jQuery('.first-name div').on('mouseout', function() {
  jQuery(this).removeClass('weee');
});
jQuery('.last-name div').on('mouseover', function() {
  jQuery(this).addClass('weee');
});
jQuery('.last-name div').on('mouseout', function() {
  jQuery(this).removeClass('weee');
});



jQuery('.work-item a div').on('mouseover', function(){
jQuery(this).css('opacity','.7');
});

jQuery('.work-item a div').on('mouseout', function(){
jQuery(this).css('opacity','0');
});

jQuery('.nav-toggle').on('click', function() {
jQuery('.mobile-nav').toggleClass('open');
jQuery('header').toggleClass('bo');
});

jQuery('.mobile-nav').on('click', function() {
jQuery('.mobile-nav').toggleClass('open');
jQuery('header').toggleClass('bo');
});
