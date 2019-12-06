var choices = ['a', 'b', 'c', 'd'];
var questionNum = 5;
var timeLimit = 75;
var correctAnswers1 = [];
var correctAnswers2 = [];
var correctAnswers3 = [];

function prepTest()
{
    for (var i = 0; i < 20; i++)
    {
        var a1 = choices[Math.floor(Math.random() * 4)];
        var a2 = choices[Math.floor(Math.random() * 4)];
        var a3 = choices[Math.floor(Math.random() * 4)];

        correctAnswers1[i] = a1;
        correctAnswers2[i] = a2;
        correctAnswers3[i] = a3;
    }

    var div = document.querySelector(".answer");
    var btnA = document.createElement("button");
    btnA.setAttribute("id", 'a');
    btnA.setAttribute("class", "btn btn-primary btn-large")

    var btnB = document.createElement("button");
    btnB.setAttribute("id", 'b');
    var btnC = document.createElement("button");
    btnC.setAttribute("id", 'c');
    var btnD = document.createElement("button");
    btnD.setAttribute("id", 'd');

    div.appendChild(btnA);
    div.appendChild(btnB);
    div.appendChild(btnC);
    div.appendChild(btnD);
}

function startTest()
{
}

function endTest()

