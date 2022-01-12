setTimeout(function gif() {
    document.getElementById("loading_img").style.display = "none";
}, 600)

setTimeout(function content() {
    document.getElementById("content").style.display = "block";
}, 550)

var choice;

function choiceA() {

    choice = "a";

}

function choiceP() {

    choice = "p";

}

function checkAnswer_1() {
    if (choice === 'a') {


        document.getElementById("answer_1").innerText = "a";
        document.getElementById("answer_icon_1").visibility = "visible";
        document.getElementById("answer_icon_1").src = "assets/tikMark-small.png";
        console.log(document.getElementById("answer_icon_1").src);

        choice = null;
    } else if (choice === 'p') {


        document.getElementById("answer_1").innerText = "p";
        document.getElementById("answer_icon_1").visibility = "visible";
        document.getElementById("answer_icon_1").src = "assets/crossMark-small.png";
        console.log(document.getElementById("answer_icon_1").src);


        choice = null;

    }

    console.log(document.getElementById("answer").innerText);
}

function checkAnswer_2() {
    if (choice === 'p') {
        document.getElementById("answer_2").innerText = "p";
        document.getElementById("right_icon_2").style.display = "block";



        choice = null;
    } else if (choice === 'a') {

        document.getElementById("answer_2").innerText = "a";
        document.getElementById("wrong_icon_2").style.visibility = "visible";
        choice = null;

    }
}

function checkAnswer_3() {
    if (choice === 'a') {

        document.getElementById("answer_3").innerText = "a";
        document.getElementById("right_icon_3").style.display = "block";

        choice = null;
    } else if (choice === 'p') {
        document.getElementById("answer_3").innerText = "p";
        document.getElementById("wrong_icon_3").style.visibility = "visible";

        choice = null;

    }
}

function reset() {
    document.getElementById("answer_icon_1").visibility = "hidden";
    document.getElementById("answer_icon_1").src = " ";

    document.getElementById("answer_1").innerHTML = "&nbsp;";
    document.getElementById("answer_2").innerHTML = "&nbsp;";
    document.getElementById("answer_3").innerHTML = "&nbsp;";
    document.getElementById("show_answer").disabled = false;
    document.getElementById("show_answer").style.opacity = "1";
    // document.getElementById("answer_icon_1").style.visibility = "hidden";

    // document.getElementById("right_icon_2").style.display = "none";
    // document.getElementById("right_icon_3").style.display = "none";
    // document.getElementById("wrong_icon_1").style.visibility = "hidden";
    // document.getElementById("wrong_icon_2").style.visibility = "hidden";
    // document.getElementById("wrong_icon_3").style.visibility = "hidden";



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