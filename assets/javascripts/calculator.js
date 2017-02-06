$(document).ready(function(){
  // $(selector).jqueryFunction(param1, param2))
  // JavaScript:document.getElementByEd('body');
  // jQuery: $('#body')
  //JavaScript: document.getElemtnsByClassNmae('list-item')
  //$('.list-item')
  // JavaScript: document.getElemtsByTagName('h1')
  // jQuery: $('h1')

// best practice is to name variables with $ in front of them if using jQuery
 var $numButtons =   $('.num-button');
 var $opButtons = $('.op-button');
 var $eqButton = $('#eq-button');
 var $calcScreen = $('#calc-screen');
 var $clearButton = $('#clear-button');
 var $ansScreen = $('#ans-screen');
 // chec to see if we have a leftSidde setup//if not add to leftSidde
 //if we have a leftside and the user clicks op assign of
 //if we hava a leftSide and op and user clicks number value assign rightSide
 //let user click equals
 var leftSide, op, rightSide, answer;

 $clearButton.click(function(leftSide, op, rightSide) {
   leftSide = null;
   op = null;
   rightSide = null;
   console.log(leftSide)
   console.log(rightSide)
   console.log(op)
   $calcScreen.text("", null);
  })


  $numButtons.click(function() {
    // need to refactor $(this).text() into a variable
    $numButtons.removeClass('error-border');
    if(!leftSide) {
      leftSide = $(this).text();
    } else if(leftSide && !op) {
      leftSide += $(this).text();
    } else if(leftSide && op && !rightSide) {
      rightSide = $(this).text();
    } else if (leftSide && op && rightSide) {
      rightSide += $(this).text();
    }
    $calcScreen.text(leftSide + ' ' + op + ' ' + rightSide);
  });

  $opButtons.click(function() {
    $opButtons.removeClass('error-border');
    if(!leftSide) {
      alert('You need a number');
      $numButtons.addClass('error-border');
    } else {
      op = $(this).text();
    }
  });

  $eqButton.click(function() {
    console.log(leftSide);
    console.log(op);
    console.log(rightSide);

    if(leftSide && op && rightSide) {

      result(leftSide, op, rightSide)


      //set teh result variable to the result of the equation
      //set the $calcScreen text to the result of the equation
    } else {
        if (!leftSide) {
        alert('You need a number!');
        $numButtons.addClass('error-border');
      } else if (leftSide && !op) {
        alert('You need an operator!');
        $opButtons.addClass('error-border');
      } else if ( leftSide && op && !rightSide) {
        alert('You need a number!');
        $numButtons.addClass('error-border')
      }
    }
  });

  function result(leftSide, op, rightSide) {
    leftSide = parseInt(leftSide);
    rightSide = parseInt(rightSide);
    switch (op) {
    case '+':
      answer = leftSide + rightSide;
     alert(answer);
        answer_display(answer);
     break;
    case '-':
      answer = leftSide - rightSide;
    console.log(answer);
        answer_display(answer);
    break;
    case '*':
     answer = leftSide * rightSide;
    console.log(answer);
         answer_display(answer);
    break;
    case '/':
         if (rightSide != 0) {
          answer = leftSide / rightSide;
             answer_display(answer);
      } else if ( rightSide == 0) {
        console.log('error! Cannot divide by 0');
       }
     break;
    }
  };

  function answer_display(answer) {
    console.log(answer)

    $ansScreen.text(answer);
  }


});
