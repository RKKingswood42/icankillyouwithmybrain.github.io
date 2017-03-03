$(document).ready(function(){
  $('.fetch').click(function(){
    var currentLink = $(this).prop('id');
    $('.box').hide();
    $('#'+currentLink+ '-page').load(currentLink + ".html");
    $('#'+currentLink+ '-page').show();
  });
});