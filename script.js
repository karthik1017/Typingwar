var words = [
    "Javascript",
    "Node",
    "React",
    "Angular",
    "Document",
    "Object",
    "Class",
    "MongoDB",
    "NoSQL",
    "Dragon",
    "Axios",
    "Development",
    "Web",
    "Encapsulation",
    "Polymorphism",
    "Inheritance",
    "Abstarction"
];

wordHandler = document.getElementById('word');
textboxHandler = document.getElementById('textbox');
statusHandler = document.getElementById('status');
timeHandler = document.getElementById('time');
scoreHandler = document.getElementById('score');
restartHandler = document.getElementById('restart');
let count = 0;
let time = 6;
textboxHandler.addEventListener('input', check);

window.addEventListener('load', function(){
    restartHandler.style.display = "none";
})

var set = setInterval(function(){
    time--;
    timeHandler.innerHTML = time;
    if(time === 0)
    {
        statusHandler.innerHTML = "Game Over!!!";
        responsiveVoice.speak("Game Over, ,  Press the restart button to retry");
        clearInterval(set);
        textboxHandler.setAttribute('readonly', true);
        restartHandler.style.display = "";
    }
},1000);

function check(){
    if(textboxHandler.value === wordHandler.innerHTML)
    {
        var index = Math.floor(Math.random() * words.length);
        wordHandler.innerHTML = words[index];  
        textboxHandler.value = "";   
        count++;
        scoreHandler.innerHTML = count; 
        time = 6;        
    }
}

restartHandler.addEventListener('click', function(){
    location.reload();
})