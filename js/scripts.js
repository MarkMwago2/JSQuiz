

// user interface
$(document).ready(function(){
  $("input[type= 'button']").click(function() {


    var Q1 = parseInt($('input[name = "Q1"]:checked').val());
    var Q2 = parseInt($('input[name = "Q2"]:checked').val());
    var Q3 = parseInt($('input[name = "Q3"]:checked').val());
    var Q4 = parseInt($('input[name = "Q3"]:checked').val());
    var Q5 = parseInt($('input[name = "Q5"]:checked').val());



var total = Q1+Q2+Q3+Q4+Q5;

if (total<40) {
    $("#comment1").text('Work harder');
}

if (total >= 50 && total<90) {
    $('#comment2'). text('Nice try');
}

if (total>=90) {
  $('#comment3').text('Excellent');
}
alert(total);
// document.getElementById("results").innerHTML('You scored' + total +'points');
 event.preventDefault();
   });
});
