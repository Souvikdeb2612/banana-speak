var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var txtOutput = document.querySelector("#output")

// var serverURL ="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL ="https://api.funtranslations.com/translate/minion.json"

function getTranslatedURL(text){
    return serverURL + "?" + "text="+ text
}

function errorHandler(error){
    console.log("error occured", error)
    alert("Something wrong with the server. Try again after sometime")
}


console.log(txtInput)

function clickHandler(){
    var inputText = txtInput.value;

    fetch(getTranslatedURL(inputText))
        .then(response => response.json())
        .then(json=> {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;
        })
        .catch(errorHandler)
};




btnTranslate.addEventListener("click",clickHandler)