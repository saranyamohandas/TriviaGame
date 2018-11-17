$(document).ready(function(){
    
    var quiz = {"Where was Nelson Mandela born?" : "South Africa","What is the capitol of Spain":"Madrid","Most spoken language in the world?": "Mandarin","Which country did Alaska belong to originally?": "Russia","Which year did world warII end?": "1945","What was the character name of cub in The Lion King movie": "Simba","Which country does Roger Federer play for?": "Switzerland","Who was one the main dictator of word warII?": "Adolf Hitler"};
    var sec = 30;
    var child = 0;
    var getQues = 0;
    var getPara = "#p";
    var count;
    var score = 0;
    $(".container").hide();
    $(".result").hide();
    $("#reset").hide();
    
    for(x in quiz){
        console.log(getPara + child);
        console.log(quiz[x]);
        $(getPara + child).text(x);
        child += 1;
    }
    $("#start").click(function(){
        $(this).hide();
        $(".container").show();
        $(".jumbotron").hide();
        count = setInterval(countDown,1000)
    });

    function countDown(){
            sec --;
        $("#time").text(sec);
            if(sec==0){
            console.log('inside else');
            clearInterval(count); 
            evaluateAns();
            }
        }
    function evaluateAns(){
     
        //calculate number of questions 
        $('form').hide();
        getQuizLen = Object.keys(quiz).length;
        
        //get all checked answers
        var userInput =  $("input:checked");
        var attempts = 0;
        //loop through ans and compare with quiz obj
        userInput.each(function(){
            attempts++;
//            console.log('foreach -',$(this).val());
            var getParaText = $(this).parentsUntil(".col-sm-12").children('p').text();
            console.log("getParaText", getParaText);
            var checkAns = $(this).val();
            console.log("quiz[getParaText]" ,quiz[getParaText]);
            if(quiz[getParaText] == checkAns){
                score++;
                console.log(score);
            }
            getQues += 1;
            
            });

         $("#summary").css("background-color","#F8F6B0");
        $("#totaltime").hide();
        
        $("#won").text(score);
        $("#lost").text(attempts-score);
        $("#noAttempt").text(getQuizLen-attempts);
        $(".result").show();
        $("#reset").show();

    }
    $("#reset").click(function(){
        location.reload();
    })
    
    
});




