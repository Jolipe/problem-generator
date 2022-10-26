function randomProblem() {
    const prob = ["problem1", "problem2", "problem3"];
    randomNum = Math.floor(Math.random() * 3);
    document.getElementById("problems").innerHTML = prob[randomNum];
}