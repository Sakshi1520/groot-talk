var btn = document.querySelector('#submit-btn');
var url = "https://api.funtranslations.com/translate/groot.json";

function translateText(text){
    var url1 = url + '?text=' + text;
    return url1;
}

btn.addEventListener("click", () => {
    var textInput = document.querySelector('#text-input');
    fetch(translateText(textInput.value))
        .then(response => response.json())
        .then(json => {
            var textoutput = document.querySelector('#text-output');
            textoutput.innerHTML = json.contents.translated;
        })
        .catch(error => alert("Oooppss!! There seems to be an issue with the server! Please try after some time!"))
});