url = "https://sheets.googleapis.com/v4/spreadsheets/1Bkr6jAyrwqBDWaUECe6oAPVV1AQ_T9FmGX0LY9rVp34/values/B:B?key" + API_KEY;
var problems = {};
try {
    var response = {};

        const fetchPromise = fetch(url);

        fetchPromise.then((response) => {
                return response.json();
        }).then((return1) => {
                problems = return1["values"];
        });
}
catch(err) {
    console.log(err);
}

function randomProblem() {
    randomNum = Math.floor(Math.random() * problems.length) + 2;
    document.getElementById("problems").innerHTML = problems[randomNum][0];
}