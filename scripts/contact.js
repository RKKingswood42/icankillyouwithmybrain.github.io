$('.fetch').click(function(){
    var currentLink = $(this).prop('id');
    $('.box').addClass('hidden');
    $('#'+currentLink+ '-page').load(currentLink + ".html");
    $('#'+currentLink+ '-page').removeClass('hidden');
  }); 