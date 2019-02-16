let button = document.getElementById("request");
let inputName = document.getElementById("input-name");
let inputMood = document.getElementById("input-mood");

button.addEventListener("click", function() {
    let name = inputName.value;
    let mood = inputMood.value;

    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:591/main?name=" + name + "&mood=" + mood, true);
    xhr.onreadystatechange = function() {
        if (this.readyState === this.DONE) {
            if (this.status !== 200) {
                console.log("Ошибка: " + this.status);
            } else {
                console.log(this.responseText);
            }
        }
    };
    xhr.send();
});