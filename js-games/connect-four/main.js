$(document).ready(function() {
  var turn = 1;
  var targetObj;
  var x;
  var y;
  var color;
  var divArr = [];

  for(var i = 0; i < $('.board').length; i++) {
    divArr.push($('.board').eq(i));
  }

  $(".column").hover(function(){
    for(var i = 0; i < 6; i++){
      if($(this).children('[data-y=' + i + ']').hasClass("blank")){
        $(this).children('[data-y=' + i + ']').addClass("hover").removeClass("blank")
        break
      }
    }
  }, function(){
    for(var i = 0; i < 6; i++){
      if($(this).children('[data-y=' + i + ']').hasClass("hover")){
        $(this).children('[data-y=' + i + ']').removeClass("hover").addClass("blank")
        break
      }
    }
  })

  $(".column").on("click" , function(){
    console.log($(this).children('[data-y=' + i + ']'))
    for(var i = 0; i < 6; i++){
      if($(this).children('[data-y=' + i + ']').hasClass("hover")){
        if(turn % 2 != 0){
          $(this).children('[data-y=' + i + ']').addClass("red")
          targetObj = $(this).children('[data-y=' + i + ']');
          $(this).children('[data-y=' + i + ']').removeClass("hover")
        } else{
          $(this).children('[data-y=' + i + ']').addClass("black")
          targetObj = $(this).children('[data-y=' + i + ']')
          $(this).children('[data-y=' + i + ']').removeClass("hover")
        }
        break;
      }
    }
    turn += 1
    x = targetObj.data('x');
    y = targetObj.data('y');
    color = targetObj.css('background-color');

    if( checker(x, y, color, divArr) ) {
      alert("you win!");
      location.reload();
    }

  })
});
