$(document).ready(function(){
  $("input[type= 'button']").click(function)(){
    var Q1 = parseInt($('input[name = "Q1"]:checked').val());
    var Q2 = parseInt($('input[name = "Q2"]:checked').val());
    var Q3 = parseInt($('input[name = "Q3"]:checked').val());
    var Q4 = parseInt($('input[name = "Q3"]:checked').val());
    var Q5 = parseInt($('input[name = "Q5"]:checked').val());
  }
});

var total = parseInt["Q1+Q2+Q3+Q4+Q5"];

if (total<50) {
    $("#comment1").text('Nice try');
}

if 
