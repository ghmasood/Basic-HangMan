var joon=1;
function vis() {
    if (joon == 10) {
        setTimeout(function () { alert("Game Over! \r\n The Answer is: "+selectedW); location.reload();}, 100);
    }
    var el = document.getElementById("vis"+joon);
    el.style.display="block";
    joon++;
}

var correct=new Set();
var incorr=new Set();
document.onkeydown = function (e) {
    var key_press = e.key;
    if (!correct.has(key_press) && !incorr.has(key_press)) {
        if (selectedW.includes(key_press)) {
            for (i = 0; i < swl; i++) {
                if (key_press == selectedW[i]) {
                    console.log("true");
                    document.getElementById("l" + i).value = key_press;
                    document.getElementById("l" + i).style.color ="darkgreen";
                    correct.add(key_press);
                    document.getElementById('corr').innerHTML = "Correct Input: " + new Array(...correct).join(',');
                }
            }
        }
        else {
            if (key_press.charCodeAt(0) >= 97) {
                incorr.add(key_press);
                document.getElementById('incr').innerHTML = "inCorrect Input: " + new Array(...incorr).join(',');
                vis();
            }
        }
    }
    var j = 0;
    for(i=0;i<swl;i++){
        if ((document.getElementById("l"+i)).value=="*"){
            j++;
        }
    }
    if (j==0){
        setTimeout(function () { alert("You Win!"); location.reload(); }, 900);
    }
    
}

var gussW=["mofid","masood","hello","apple","cat","dog","home","word","banana","lion","mobile","home","developer","react","frontend","database","vscode","HTML"];
selectedW="";
var swl=0;
function select_Word(){
    selectedW = gussW[Math.floor(Math.random() * gussW.length)];
    swl = selectedW.length;
    console.log(selectedW);
    for(i=0;i<swl;i++){
        var newtxt = document.createElement("input");
        var textbox = document.getElementById("textbox");
        textbox.appendChild(newtxt);
        newtxt.type = "text";
        newtxt.id = "l"+i;
        newtxt.maxLength = 1;
        newtxt.size = 1;
        newtxt.style = "margin-right:10px; text-align:center; font-size:40px; font-weight:bolder; filter: drop-shadow(0 0 0.25rem gray); width:50px;  ";
        newtxt.disabled = "true";
        newtxt.value="*";
    }
}
