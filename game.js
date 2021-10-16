player1_score=0;
player2_score=0;

player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");


document.getElementById("player1_name").innerHTML=player1_name;
document.getElementById("player2_name").innerHTML=player2_name;
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML=player1_name;
document.getElementById("player_answer").innerHTML=player2_name;

function send(){   
    number_1=document.getElementById("number_1").value;
    number_2=document.getElementById("number_2").value;

    question="<h4>"+number_1+"X"+number_2+"</h4>";
    inbox="<br> Answer : <input id='ans_input' type='text'>";
    check="<br><br><button class='btn btn-info'>"+"Check"+"</button>";
    row=question+inbox+check;

    document.getElementById("output").innerHTML=row;
    document.getElementById("number_1").value="";
    document.getElementById("number_2").value="";
    answer=parseInt(number_1) * parseInt(number_2);
}