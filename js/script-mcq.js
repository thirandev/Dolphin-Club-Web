var i = 0;
var ans = "";
var score = 0;
var again = false;
const questions = [
    ["How many players (including goalie) are playing at once for one team in Water polo?", "12", "14", "7", "8","C"],  //question, answer1, answer2, answer3, answer4, correct answer
    ["How long is each quarter in a pro game in Water polo? ", "8 min", "10 min", "5 min", "18 min","A"],
    ["Where are penalty shots and foul shots shot from in water polo?", "2 meters", "5 meters", "12 meters", "8 meters","B"],
    ["Which of the four strokes is considered the universal stroke, and is also the fastest in swimming?", "Breaststroke", "Butterfly", "Freestyle", "Backstroke","C"],
    ["'How many lanes are used in a full heat of swimming in a regulation Olympic-sized pool in swimming?", "5", "6", "8", "10","D"],
    ["How many swimmers take part in a standard relay in swimming?", "2", "4", "6", "5","B"],
    ["How are the boats used for this sport called in rowing?", "Canoe", "Ships", "A shell", "Drakars","C"],
    ["When was rowing revived?", "1715", "1750", "1775", "1850","A"],
    ["How many times did Sunny Garcia win the Triple Crown of Surfing?", "4", "5", "6", "2","C"],
    [" How many Triple Crown of Surfing spots has the Seven Mile Miracle?", "Zero", "Two", "Three", "One","C"]
];

function loadQuestion(q_num){   //loading the questions and the score
    timer();
    document.getElementById("startB").style.display="none";
    document.getElementById("questions").style.display="block";
    document.getElementById("score").innerHTML = "Your score is score : "+ score;
    document.getElementById("mcq_question").innerHTML = questions[q_num][0];
    document.getElementById("ans1").innerHTML = questions[q_num][1];
    document.getElementById('ans2').innerHTML = questions[q_num][2];
    document.getElementById('ans3').innerHTML = questions[q_num][3];
    document.getElementById('ans4').innerHTML = questions[q_num][4];
}

function retry() {
    i=0;
    score = 0;
    document.getElementById("questions").style.backgroundColor="#3d8aeb";
    document.getElementById("A").checked=false; //un-checking the radio buttons
    document.getElementById("B").checked=false;
    document.getElementById("C").checked=false;
    document.getElementById("D").checked=false;
    document.getElementById("next").style.display="inline";
    document.getElementById("again").style.display="inline";
    document.getElementById("retryB").style.display="none";
    document.getElementById("thank").innerHTML="";
    document.getElementById("dis_score").innerHTML="";
    document.getElementById("mcq_question").style.display="block";
    document.getElementById("answers").style.display="block";
    document.getElementById("score").style.display="block";
    loadQuestion(i)
}

function next_question() {
    user_answer();
    //next question
    if (i>=10){
        if (score >= 10){
            document.getElementById("questions").style.backgroundColor="green";
        }else {
            document.getElementById("questions").style.backgroundColor="red";
        }
        document.getElementById("next").style.display="none";
        document.getElementById("again").style.display="none";
        document.getElementById("retryB").style.display="inline";
        document.getElementById("thank").innerHTML="Thank you for completing this MCQ!!!";
        document.getElementById("dis_score").innerHTML="Your score is : "+score;
        document.getElementById("mcq_question").style.display="none";
        document.getElementById("answers").style.display="none";
        document.getElementById("score").style.display="none";

    }else {ans = "";
        document.getElementById("mcq_question").innerHTML = questions[i][0];
        document.getElementById("ans1").innerHTML = questions[i][1];
        document.getElementById('ans2').innerHTML = questions[i][2];
        document.getElementById('ans3').innerHTML = questions[i][3];
        document.getElementById('ans4').innerHTML = questions[i][4];
        document.getElementById("A").checked=false; //un-checking the radio buttons
        document.getElementById("B").checked=false;
        document.getElementById("C").checked=false;
        document.getElementById("D").checked=false;
    }
}
function reset() {
    again = true;
    document.getElementById("A").checked=false; //un-checking the radio buttons
    document.getElementById("B").checked=false;
    document.getElementById("C").checked=false;
    document.getElementById("D").checked=false;
    i = 0;
    score = 0;
    loadQuestion(i)
    document.getElementById("score").innerHTML = "Your score is score : "+ score;
}
function user_answer() {    //checking for the users input
    if (document.getElementById("A").checked) {
        ans = "A"
    } else if (document.getElementById("B").checked) {
        ans = "B"
    } else if (document.getElementById("C").checked) {
        ans = "C"
    } else if (document.getElementById("D").checked) {
        ans = "D"
    }
    answer()
}
function correct_answer() {
    if (ans == questions[i][5]) { //checking if the users has selected the correct answer
        score = score + 2;
    }else {
        score--;
    }
    document.getElementById("score").innerHTML = "Your score is score : "+ score;   //display score
}

function answer() {
    if (ans == "" || ans == null){ //checking if the user has answered or not
        alert("Please select an answer");   //if the user hasn't answered
    }else {
        correct_answer();       //if the user has answered
        i++;

    }
}

function timer() {
    i=0;
    score = 0;
    const startingMinutes = 10;
    let time = startingMinutes*60;
    const min=  document.getElementById("minutes");
    const sec = document.getElementById("seconds");
    var int = setInterval(updateTimer,1000);
    int;
    function updateTimer() {
        const minutes = Math.floor(time/60);
        let seconds = time%60;

        if (minutes === 0 && seconds === 0){
            if (score >= 10){
                document.getElementById("questions").style.backgroundColor="green";
            }else {
                document.getElementById("questions").style.backgroundColor="red";
            }
            clearInterval(int);
            document.getElementById("next").style.display="none";
            document.getElementById("again").style.display="none";
            document.getElementById("retryB").style.display="inline";
            document.getElementById("thank").innerHTML="Time over!";
            document.getElementById("dis_score").innerHTML="Your score is : "+score;
            document.getElementById("mcq_question").style.display="none";
            document.getElementById("answers").style.display="none";
            document.getElementById("score").style.display="none";

        }
        seconds = seconds<10?'0'+seconds:seconds;
        min.innerHTML=minutes;
        sec.innerHTML = seconds;
        time--;
        if (again === true){
            clearInterval(int)
            again = false;
        }
    }
}