setTimeout(function gif() {
    document.getElementById("loading").style.display = "none";

}, 600)

setTimeout(function content() {
    document.getElementById("content").style.display = "block";
    document.getElementById("dummy_div").style.display = "none";
    document.getElementById("help_div").style.display = "none";

}, 550)

var choice;
var rightAudio = new Audio();
rightAudio.src = './assets/right.mp3';

var wrongAudio = new Audio();
wrongAudio.src = './assets/wrong.mp3';


function choiceA() {

    choice = "a";
    document.getElementById("btn1").style.backgroundColor = "#0FA0C5";
    document.getElementById("btn1").style.color = "white";

}

function choiceP() {

    choice = "p";
    document.getElementById("btn2").style.backgroundColor = "#0FA0C5";
    document.getElementById("btn2").style.color = "white";

}

function checkAnswer_1() {
    if (choice === 'a') {



        document.getElementById("answer_1").innerText = "a";
        document.getElementById("answer_icon_1").src = "assets/tikMark-small.png";
        document.getElementById("answer_icon_1").style.visibility = "visible";
        rightAudio.play();
        // console.log(document.getElementById("answer_icon_1").src);

        choice = null;
        document.getElementById("btn1").style.backgroundColor = "white";
        document.getElementById("btn1").style.color = "black";
    } else if (choice === 'p') {

        document.getElementById("answer_1").innerText = "p";
        document.getElementById("answer_icon_1").src = "assets/crossMark-small.png";
        document.getElementById("answer_icon_1").style.visibility = "visible";

        wrongAudio.play();
        setTimeout(function wrongAnswer() {
            document.getElementById("answer_1").innerHTML = "&nbsp;";
            document.getElementById("answer_icon_1").src = " ";
            document.getElementById("answer_icon_1").style.visibility = "hidden";


        }, 800)





    }
    checkAllRight();
}


function checkAnswer_2() {
    if (choice === 'p') {
        document.getElementById("answer_2").innerText = "p";
        document.getElementById("answer_icon_2").src = "assets/tikMark-small.png";
        document.getElementById("answer_icon_2").style.visibility = "visible";
        rightAudio.play();



        choice = null;
        document.getElementById("btn2").style.backgroundColor = "white";
        document.getElementById("btn2").style.color = "black";
    } else if (choice === 'a') {

        document.getElementById("answer_2").innerText = "a";
        document.getElementById("answer_icon_2").src = "assets/crossMark-small.png";
        document.getElementById("answer_icon_2").style.visibility = "visible";
        wrongAudio.play();
        setTimeout(function wrongAnswer() {
            document.getElementById("answer_2").innerHTML = "&nbsp;";
            document.getElementById("answer_icon_2").src = " ";
            document.getElementById("answer_icon_2").style.visibility = "hidden";


        }, 800)


    }
    checkAllRight();
}

function checkAnswer_3() {
    if (choice === 'a') {

        document.getElementById("answer_3").innerText = "a";
        document.getElementById("answer_icon_3").src = "assets/tikMark-small.png";
        document.getElementById("answer_icon_3").style.visibility = "visible";
        rightAudio.play();

        choice = null;
        document.getElementById("btn1").style.backgroundColor = "white";
        document.getElementById("btn1").style.color = "black";
    } else if (choice === 'p') {
        document.getElementById("answer_3").innerText = "p";
        document.getElementById("answer_icon_3").src = "assets/crossMark-small.png";
        document.getElementById("answer_icon_3").style.visibility = "visible";
        wrongAudio.play();
        setTimeout(function wrongAnswer() {
            document.getElementById("answer_3").innerHTML = "&nbsp;";
            document.getElementById("answer_icon_3").src = " ";
            document.getElementById("answer_icon_3").style.visibility = "hidden";


        }, 800)


    }
    checkAllRight();
}

function checkAllRight() {
    if (document.getElementById("answer_1").innerText === "a" &&
        document.getElementById("answer_2").innerText === "p" &&
        document.getElementById("answer_3").innerText === "a") {
        // disable show answer btn
        document.getElementById("show_answer").disabled = true;
        document.getElementById("show_answer").style.opacity = "0.7";
        // disable choices btns (a & p)
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn2").disabled = true;

    }
}

function reset() {

    document.getElementById("answer_1").innerHTML = "&nbsp;";
    document.getElementById("answer_2").innerHTML = "&nbsp;";
    document.getElementById("answer_3").innerHTML = "&nbsp;";

    document.getElementById("show_answer").disabled = false;
    document.getElementById("show_answer").style.opacity = "1";

    document.getElementById("answer_icon_1").style.visibility = "hidden";
    document.getElementById("answer_icon_1").src = " ";

    document.getElementById("answer_icon_2").style.visibility = "hidden";
    document.getElementById("answer_icon_2").src = " ";

    document.getElementById("answer_icon_3").style.visibility = "hidden";
    document.getElementById("answer_icon_3").src = " ";

    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;



    console.log("Hello from Reset");

}

function showAnswer() {
    // Q 1
    document.getElementById("answer_1").innerText = "a";
    document.getElementById("answer_icon_1").src = "assets/tikMark-small.png";
    document.getElementById("answer_icon_1").style.visibility = "visible";
    // Q2
    document.getElementById("answer_2").innerText = "p";
    document.getElementById("answer_icon_2").src = "assets/tikMark-small.png";
    document.getElementById("answer_icon_2").style.visibility = "visible";
    // Q3
    document.getElementById("answer_3").innerText = "a";
    document.getElementById("answer_icon_3").src = "assets/tikMark-small.png";
    document.getElementById("answer_icon_3").style.visibility = "visible";

    // Diabeling Button (Show Answers)
    document.getElementById("show_answer").disabled = true;
    document.getElementById("show_answer").style.opacity = "0.7";
    console.log("Hello from Show Answers ");
    // Disable choices btns (a & p)
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;


}

function dummyImage() {
    document.getElementById("content").style.pointerEvents = "none";
    document.getElementById("content").style.opacity = "0.4";

    document.getElementById("dummy_div").style.display = "block";
}

function closeDummyImage() {

    document.getElementById("content").style.pointerEvents = "visible";
    document.getElementById("content").style.opacity = "1";

    document.getElementById("dummy_div").style.display = "none";
}

function help() {
    document.getElementById("content").style.pointerEvents = "none";
    document.getElementById("content").style.opacity = "0.4";

    document.getElementById("help_div").style.display = "block";

}

function closeHelp() {

    document.getElementById("content").style.pointerEvents = "visible";
    document.getElementById("content").style.opacity = "1";

    document.getElementById("help_div").style.display = "none";
}