setTimeout(function gif() {
    document.getElementById("loading_img").style.display = "none";
}, 600)

setTimeout(function content() {
    document.getElementById("content").style.display = "block";
}, 550)


function checkAnswer_1() {
    document.getElementById("answer_1").innerText = "a";
    console.log(document.getElementById("answer").innerText);
}

function checkAnswer_2() {
    document.getElementById("answer_2").innerText = "p";
    console.log(document.getElementById("answer").innerText);
}

function checkAnswer_3() {
    document.getElementById("answer_3").innerText = "a";
    console.log(document.getElementById("answer").innerText);
}

function reset() {
    document.getElementById("answer_1").innerHTML = "&nbsp;";
    document.getElementById("answer_2").innerHTML = "&nbsp;";
    document.getElementById("answer_3").innerHTML = "&nbsp;";
    document.getElementById("show_answer").disabled = false;
    document.getElementById("show_answer").style.opacity = "1";
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