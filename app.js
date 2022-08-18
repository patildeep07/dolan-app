var inputText = document.querySelector("#inputTxt");
var tranlate = document.querySelector("#translate");
var outputDiv = document.querySelector("#outputDiv");

// var testUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var apiUrl =  "https://api.funtranslations.com/translate/dolan.json"

function getTransalationUrl (input) {
    return apiUrl + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("Error : " + error);
    alert("Error Occured")
}

function clickHandler () {
    // alert("Clicked")

    fetch(getTransalationUrl(inputText.value))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
}

tranlate.addEventListener("click", clickHandler)

