const url = "https://sheets.googleapis.com/v4/spreadsheets/1EuK_QS2OM5okp9crEOTUEauN3946YOeQQXoFrk-SlYc/values/A:A?key=AIzaSyDcHjeMlWHYJqSTl7xQXrtjLPG3VxwniUE";
try {
    var response = {};

        const fetchPromise = fetch(url);

        fetchPromise.then((response) => {
                return response.json();
        }).then((return1) => {
                problems_list = return1["values"];
        });
}
catch(err) {
    console.log(err);
};

var usedProb = ["-"];
var usedProbNum = 0;

function randomProblem() {
    var isNew = true;
    var newText = "";
    while (isNew) {
        randomNum = Math.floor(Math.random() * (problems_list.length));
        newText = problems_list[randomNum][0];
        isNew = false;
        for (let i = 0; i <= usedProb.length - 1; i++) {
            if (newText == usedProb[i]) {
                isNew = true;
            };
        };
    };
    usedProb.push(newText);
    usedProbNum = usedProb.length - 1;
    if (usedProb.length > 20) {
        usedProb.shift();
    };
    document.getElementById("problems").innerHTML = newText;
    changeVis();
}

function handleBack() {
    if (usedProbNum > 0) {
        usedProbNum--;
        document.getElementById("problems").innerHTML = usedProb[usedProbNum];
    } else {
        alert("This is the last problem saved.");
    };
};

function handleFoward() {
    if (usedProbNum < usedProb.length - 1) {
        usedProbNum++;
        document.getElementById("problems").innerHTML = usedProb[usedProbNum];
    } else {
        alert("There are no problems after here.");
    };
};
function changeVis() {
    const titles = ["a", "b", "c"];
    var random = Math.floor(Math.random() * titles.length);
    for (i = 0; i < titles.length; i++) {
        document.getElementById(titles[i]).style.visibility = "hidden";
    }
    document.getElementById(titles[random]).style.visibility = "visible";
}
