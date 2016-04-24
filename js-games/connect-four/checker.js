function checker(x, y, color, divArr) {
  var rowColor = [];
  var columnColor = [];
  var rightDiagonalColor = [];
  var leftDiagonalColor = [];
  var indicator = false;

  for(var i = 0; i < $('#board').find("[data-y='" + y + "']").length; i++) {
    rowColor.push($('#board').find("[data-y='" + y + "']").eq(i).css('background-color'));
  }

  for(var i = 0; i < $('#board').find("[data-x='" + x + "']").length; i++) {
    columnColor.push($('#board').find("[data-x='" + x + "']").eq(i).css('background-color'));
  }

  for(var i = 0; i < divArr.length; i++) {
    if((x - divArr[i].data('x'))  ===  (y - divArr[i].data('y'))) {
      rightDiagonalColor.push(divArr[i].css("background-color"));
    }
  }

  for(var i = 0; i < divArr.length; i++) {
    if((x - divArr[i].data('x')) == -(y - divArr[i].data('y'))) {
      leftDiagonalColor.push(divArr[i].css("background-color"));
    }
  }

  function rowCheck() {
    var result = false;
    for(var i = 0; i < rowColor.length; i ++) {
      if(rowColor[i] === color && rowColor[i + 1] === color && rowColor[i + 2] === color && rowColor[i + 3] === color) {
        result = true;
      }
    }
    return result;
  }

  function columnCheck() {
    var result = false;
    for(var i = 0; i < columnColor.length; i ++) {
      if(columnColor[i] === color && columnColor[i + 1] === color && columnColor[i + 2] === color && columnColor[i + 3] === color) {
        result = true;
      }
    }
    return result;
  }

  function rightDiagoCheck() {
    var result = false;
    for(var i = 0; i < rightDiagonalColor.length; i ++) {
      if(rightDiagonalColor[i] === color && rightDiagonalColor[i + 1] === color && rightDiagonalColor[i + 2] === color && rightDiagonalColor[i + 3] === color) {
        result = true;
      }
    }
    return result;
  }

  function leftDiagoCheck() {
    var result = false;
    for(var i = 0; i < leftDiagonalColor.length; i ++) {
      if(leftDiagonalColor[i] === color && leftDiagonalColor[i + 1] === color && leftDiagonalColor[i + 2] === color && leftDiagonalColor[i + 3] === color) {
        result = true;
      }
    }
    return result;
  }

  if (rowCheck() || columnCheck() || rightDiagoCheck() || leftDiagoCheck()) {
    indicator = true;
  }
  return indicator;
}
