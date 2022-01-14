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

    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn2").style.color = "black";


}

function choiceP() {

    choice = "p";
    document.getElementById("btn2").style.backgroundColor = "#0FA0C5";
    document.getElementById("btn2").style.color = "white";

    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn1").style.color = "black";

}

function checkAnswer_1() {
    if (choice === 'a') {


        rightAudio.play();

        document.getElementById("answer_1").innerText = "a";
        document.getElementById("answer_icon_1").src = "assets/tikMark-small.png";
        document.getElementById("answer_icon_1").style.visibility = "visible";
        // console.log(document.getElementById("answer_icon_1").src);

        choice = null;
        document.getElementById("btn1").style.backgroundColor = "white";
        document.getElementById("btn1").style.color = "black";
    } else if (choice === 'p') {
        wrongAudio.play();

        document.getElementById("answer_1").innerText = "p";
        document.getElementById("answer_icon_1").src = "assets/crossMark-small.png";
        document.getElementById("answer_icon_1").style.visibility = "visible";
        document.getElementById("answer_icon_1").classList.add('animate__flash');

        setTimeout(function wrongAnswer() {
            document.getElementById("answer_1").innerHTML = "&nbsp;";
            document.getElementById("answer_icon_1").src = " ";
            document.getElementById("answer_icon_1").style.visibility = "hidden";
            document.getElementById("answer_icon_1").classList.remove('animate__flash');


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
        wrongAudio.play();

        document.getElementById("answer_2").innerText = "a";
        document.getElementById("answer_icon_2").src = "assets/crossMark-small.png";
        document.getElementById("answer_icon_2").style.visibility = "visible";
        document.getElementById("answer_icon_2").classList.add('animate__flash');
        setTimeout(function wrongAnswer() {
            document.getElementById("answer_2").innerHTML = "&nbsp;";
            document.getElementById("answer_icon_2").src = " ";
            document.getElementById("answer_icon_2").style.visibility = "hidden";
            document.getElementById("answer_icon_2").classList.remove('animate__flash');



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
        wrongAudio.play();

        document.getElementById("answer_3").innerText = "p";
        document.getElementById("answer_icon_3").src = "assets/crossMark-small.png";
        document.getElementById("answer_icon_3").style.visibility = "visible";
        document.getElementById("answer_icon_3").classList.add('animate__flash');
        setTimeout(function wrongAnswer() {
            document.getElementById("answer_3").innerHTML = "&nbsp;";
            document.getElementById("answer_icon_3").src = " ";
            document.getElementById("answer_icon_3").style.visibility = "hidden";
            document.getElementById("answer_icon_3").classList.remove('animate__flash');



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
        document.getElementById("show_answer").style.cursor = "auto";

        // disable choices btns (a & p)
        document.getElementById("btn1").disabled = true;
        document.getElementById("btn1").style.opacity = "0.4";
        document.getElementById("btn1").style.cursor = "auto";

        document.getElementById("btn2").disabled = true;
        document.getElementById("btn2").style.opacity = "0.4";
        document.getElementById("btn2").style.cursor = "auto";


    }
}

function reset() {

    document.getElementById("answer_1").innerHTML = "&nbsp;";
    document.getElementById("answer_2").innerHTML = "&nbsp;";
    document.getElementById("answer_3").innerHTML = "&nbsp;";

    document.getElementById("show_answer").disabled = false;
    document.getElementById("show_answer").style.opacity = "1";
    document.getElementById("show_answer").style.cursor = "pointer";



    document.getElementById("answer_icon_1").style.visibility = "hidden";
    document.getElementById("answer_icon_1").src = " ";

    document.getElementById("answer_icon_2").style.visibility = "hidden";
    document.getElementById("answer_icon_2").src = " ";

    document.getElementById("answer_icon_3").style.visibility = "hidden";
    document.getElementById("answer_icon_3").src = " ";

    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;

    document.getElementById("btn1").style.backgroundColor = "white";
    document.getElementById("btn1").style.color = "black";
    document.getElementById("btn1").style.cursor = "pointer";
    document.getElementById("btn1").style.opacity = "1";



    document.getElementById("btn2").style.backgroundColor = "white";
    document.getElementById("btn2").style.color = "black";
    document.getElementById("btn2").style.cursor = "pointer";
    document.getElementById("btn2").style.opacity = "1";





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
    document.getElementById("show_answer").style.cursor = "auto";
    // Disable choices btns (a & p)
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn1").style.cursor = "auto";
    document.getElementById("btn1").style.opacity = "0.4";


    document.getElementById("btn2").disabled = true;
    document.getElementById("btn2").style.cursor = "auto";
    document.getElementById("btn2").style.opacity = "0.4";




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