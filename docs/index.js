url = "https://sheets.googleapis.com/v4/spreadsheets/" + SHEET_ID + "/values/A:A?key=" + API_KEY;
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
}
function randomProblem() {
    var isNew = true;
    var newText = "";
    while (isNew) {
        randomNum = Math.floor(Math.random() * (problems_list.length - 2)) + 2;
        newText = problems_list[randomNum][0];
        if (newText != document.getElementById("problems").innerHTML) {
            isNew = false;
        };
    };
    document.getElementById("problems").innerHTML = newText;
}