setTimeout(function gif() {
    document.getElementById("loading_img").style.display = "none";
}, 600)

setTimeout(function content() {
    document.getElementById("content").style.display = "block";
}, 550)

var choice;
var rightAudio = new Audio();
rightAudio.src = './assets/right.mp3';

var wrongAudio = new Audio();
wrongAudio.src = './assets/wrong.mp3';


function choiceA() {

    choice = "a";

}

function choiceP() {

    choice = "p";

}

function checkAnswer_1() {
    if (choice === 'a') {



        document.getElementById("answer_1").innerText = "a";
        document.getElementById("answer_icon_1").src = "assets/tikMark-small.png";
        document.getElementById("answer_icon_1").style.visibility = "visible";
        rightAudio.play();
        // console.log(document.getElementById("answer_icon_1").src);

        choice = null;
    } else if (choice === 'p') {



        document.getElementById("answer_1").innerText = "p";
        document.getElementById("answer_icon_1").src = "assets/crossMark-small.png";
        document.getElementById("answer_icon_1").style.visibility = "visible";
        wrongAudio.play();


        choice = null;

    }
    checkAllRight();
    //  document.getElementById("answer_icon_1").src = img1_src;
    //  document.getElementById("answer_icon_1").visibility = img1_visibility;

    // console.log(document.getElementById("answer_1").innerText);
    // console.log(document.getElementById("answer_icon_1").visibility);
    // console.log(document.getElementById("answer_icon_1").src);
}


function checkAnswer_2() {
    if (choice === 'p') {
        document.getElementById("answer_2").innerText = "p";
        document.getElementById("answer_icon_2").src = "assets/tikMark-small.png";
        document.getElementById("answer_icon_2").style.visibility = "visible";
        rightAudio.play();



        choice = null;
    } else if (choice === 'a') {

        document.getElementById("answer_2").innerText = "a";
        document.getElementById("answer_icon_2").src = "assets/crossMark-small.png";
        document.getElementById("answer_icon_2").style.visibility = "visible";
        wrongAudio.play();
        choice = null;

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
    } else if (choice === 'p') {
        document.getElementById("answer_3").innerText = "p";
        document.getElementById("answer_icon_3").src = "assets/crossMark-small.png";
        document.getElementById("answer_icon_3").style.visibility = "visible";
        wrongAudio.play();
        choice = null;

    }
    checkAllRight();
}

function checkAllRight() {
    if (document.getElementById("answer_1").innerText === "a" &&
        document.getElementById("answer_2").innerText === "p" &&
        document.getElementById("answer_3").innerText === "a") {
        document.getElementById("show_answer").disabled = true;
        document.getElementById("show_answer").style.opacity = "0.7";
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



    console.log("Hello from Reset");

}

function showAnswer() {
    document.getElementById("answer_1").innerText = "a";
    document.getElementById("answer_2").innerText = "p";
    document.getElementById("answer_3").innerText = "a";
    document.getElementById("show_answer").disabled = true;
    document.getElementById("show_answer").style.opacity = "0.7";
    console.log("Hello from Show Answers ");


}