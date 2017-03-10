    var counter = 0;
    var $items = $('.slideshow figure');
    var numItems = $items.length;

    var showCurrent = function(){
        $items.removeClass('show');
        $items.eq(counter).addClass('show');
    };

    $('.next').click(function(){
        counter++;
        if (counter> numItems-1){
            counter=0;
        }
        showCurrent();
    });

    $('.prev').click(function(){
        console.log('click');
        counter--;
        if (counter < 0){
            counter=numItems-1;
        }
        showCurrent();
    }); 

//    if('ontouchstart' in window){
//        $(".diy-slideshow").swipe({
//        swipeLeft:function() {
//            counter++;
//            showCurrent();
//            }
//        swipeRight:function() {
//            counter--;
//            showCurrent();
//            }
//        });
//    }

   console.log($items,$('.prev'),$('.next'));