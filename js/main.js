$(document).ready(function() {
  var valueScreen = $('#screen');
  var num1 = "";
  var num2 = "";
  var operator = "";
  //target click text on number 1-9
  //thanks josh for division help
  var divisionSymbol = $('div.buttons span:nth-child(2)').text();
  $('.num').click(function(){
    num1 += $(event.target).text();
    valueScreen.text(num1)
  });
  //operator
  $('.operator').click(function(){
    operator = $(event.target).text();
    num2 = num1;
    num1 = '';
    valueScreen.text(operator);
  });
  //zero
  $('#zero').click(function(){
    num1 += $(event.target).text();
    valueScreen.text(0);
  });
  //clear button
  $('#cancel').click(function(){
    valueScreen.text(0);
    num1= '';
    num2='';
  });
  //need maths
  $('#calc').click(function(){
    if(operator === '-'){
      num2 = parseInt(num2, 10);
      num1 = parseInt(num1, 10);
    // console.log(jQuery.type(num2));
      valueScreen.text(-(num1 - num2));
      num1 = valueScreen.text();
      num2 = '';
    }
    else if(operator === '+'){
      num1 = parseInt(num1, 10);
      num2 = parseInt(num2, 10);
      valueScreen.text(num1 + num2);
      num1 = valueScreen.text();
      num2 = '';
    }
    else if(operator === 'x'){
      num1 = parseInt(num1, 10);
      num2 = parseInt(num2, 10);
      valueScreen.text(num1 * num2);
      num1 = valueScreen.text();
      num2 = '';
    }
    else if(operator === divisionSymbol && num1 == 0){
      num1 = parseInt(num1, 10);
      num2 = parseInt(num2, 10);
      valueScreen.text('Cannot divide by 0');
      num1 = '';
      num2 = '';
    }
    else if(operator === divisionSymbol){
      num1 = parseInt(num1, 10);
      num2 = parseInt(num2, 10);
      valueScreen.text(num2 / num1);
      num1 = valueScreen.text();
      num2 = '';
    }
  });
});
