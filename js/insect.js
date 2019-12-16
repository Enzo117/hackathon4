$('a[href^="#"]').on('click',function(e) {
 e.preventDefault();
 var target = this.hash;
 var $target = $(target);
 $('html, body').stop().animate({
  'scrollTop': $target.offset().top
 }, 900, 'swing', function () {
  window.location.hash = target;
 });

 $('.fa').hover(
   function(){
     $(this).stop().animate({
     width: '275px',
     height: '275px',
     top:'12.5px'},
     200);},

     function(){
       $(this).stop().animate({
       width: '250px',
       height: '250px',
       top:'0'},
       200);}
       );
});
