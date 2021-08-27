// kinda hard to solve every question just to get to the new level every goddamn time
function jmp_lvl(levels) {
    isLevelText = false;
    if(start_btn.style.display != 'none'){
        console.warn("you've skip a level!");
        console.log(`Transferring to ${levels}`);
        start_btn.style.transition = 'paddingLeft 0s, paddingRight 0s'
        start_btn.style.paddingLeft = '10px';
        start_btn.innerText = 'Onichan you cheater!';
        start_btn.style.paddingRight = '10px';
        switch(levels){
                default:
                    start_btn.innerText = 'START';
                    isLevelText = true;
                    console.error('level undefined');
                    break;
                case "Lvl1":
                    setTimeout(() => {
                        n_code = () =>{
                            level_Input_1.focus();
                        };
                        On_next_level(n_code);
                    }, 1000);
                break;
                case "Lvl2":
                    setTimeout(() => {
                        Count_level = 1;
                        On_next_level(levelTwo());
                    }, 1000);
                break;
                case "Lvl3":
                    setTimeout(() => {
                        Count_level = 2;
                        On_next_level();
                    }, 1000);
                break;
                case "Lvl4":
                    setTimeout(() => {
                        Count_level = 3;
                        On_next_level(onstart_Lvl_4());
                    }, 1000);
                break;
                case "Lvl5":
                    setTimeout(() => {
                        Count_level = 4;
                        n_code = () =>{
                            level_5_Input.focus();
                        }
                        On_next_level(n_code);
                    }, 1000);
                break;
                case "Lvl6":
                    setTimeout(() => {
                        Count_level = 5;
                        On_next_level();
                    }, 1000);
                break;
                case "Lvl7":
                    setTimeout(() => {
                        Count_level = 6;
                        n_code = () => {
                            level_Input_7.focus();
                        }
                        On_next_level(n_code);
                    }, 1000);
                break;
                case "Lvl8":
                    setTimeout(() => {
                        Count_level = 7;
                        On_next_level();
                    }, 1000);
                break;
                case "Lvl9":
                    setTimeout(() => {
                        Count_level = 8;
                        On_next_level();
                    }, 1000);
                break;
        }
        setTimeout(() => {
            if(!isLevelText){
            start_btn.style.display = 'none'
            start_btn.style.textTransform = 'none';
            start_btn.style.animation = "start_anim 2s both";
            }
        }, 1000); 
    } else {
        console.error("Can't use jump level!");
    }
}

//This script manages the functions and each of the levels

function alert_Message(state) {
    isFullScreen = false;
    switch(state){
        case 'input': alert('Wrong! try again'); break;
        case 'input_2': alert('Fill all the blanks!'); break;
        case 'button_1': alert("can't you read the following?"); break;
        case 'button_2':  confirm('The cases are sensitive!'); break;
    }
}

document.addEventListener('keydown', function(e){
    if(e.keyCode === 192){
        elem = document.documentElement;
        if(!isFullScreen){
            // console.log(document.querySelectorAll('Input'));
            isFullScreen = true;
            elem.requestFullscreen();
        } else {
            isFullScreen = false;
            document.exitFullscreen();
        } 
    }
});

function start() {
    start_btn.onclick = () => {null};
    start_btn.style = 'text-transform: none';
    start_btn.innerText = 'UwU';
    start_btn.style.animation = "start_anim 2s both";
    n_code = () => {
        level_Input_1.focus();
    };
    On_next_level(n_code);
}


// Level 1
function input_Check_Lv1(event) {
    if(event.keyCode == 13) {
        if(level_Input_1.value == "number") {
            level_Input_1.value = 'CORRECT!';
            level_1_clue.innerText = "UwU senpai you're so good";
            txt_1.style.background = '#ff3d74';
            document.getElementById('h2_1').innerText = null;
            On_next_level(levelTwo());
        } else {
            if(level_1_error != 11) {
                ++level_1_error;
                alert_Message('input');
            } else {
                alert("Oni-chan you're making me angry");
            }
            level_Input_1.value = null;
            switch(level_1_error){
                case 1: level_1_clue.innerHTML = "Type the <color style='color:#fff1f0'>Number</color> to get to the next Level";
                break;
                case 2: level_1_clue.innerHTML = "Type the <color style='color:#ffe2e0'>Number</color> to get to the next Level";
                break;
                case 3: level_1_clue.innerHTML = "Type the <color style='color:#fac6c3'>Number</color> to get to the next Level";
                break;
                case 4: level_1_clue.innerHTML = "Type the <color style='color:#ffa39e'>Number</color> to get to the next Level";
                break;
                case 5: level_1_clue.innerHTML = "Type the <color style='color:#ff7069'>Number</color> to get to the next Level";
                break;
                case 6: level_1_clue.innerHTML = "Type the <color style='color:#fc5b53'>Number</color> to get to the next Level";
                break;
                case 7: level_1_clue.innerHTML = "Type the <color style='color:#fc4138'>Number</color> to get to the next Level";
                break;
                case 8: level_1_clue.innerHTML = "Type the <color style='color:#ff2b21'>Number</color> to get to the next Level";
                break;
                case 9: level_1_clue.innerHTML = "Type the <color style='color:#ff180d'>Number</color> to get to the next Level";
                break;
                case 10: level_1_clue.innerHTML = "Type the <color style='color:#ff180d'>'Number'</color> to get to the next Level";
                break;
            }
        }
    }
}
// Level 2
function levelTwo() {

    change_bt = false;
    on_over = false;
    
    // changing the "hover" style
    level_2_btn.onmouseover = function(){
        on_over = true;
        if(change_bt){            
            this.style.background = 'green';
        } else {
            this.style.background = 'red';
        }
    }
    level_2_btn.onmouseleave = function() {
        this.style.background = 'white';
        on_over = false;
    }

    setTimeout(() => {
        level_2_h1_txt.innerText = "Click the Button!";

        change_bt = true;
        if(on_over){
            level_2_btn.style.background = 'green';
        }

        level_2_btn.onclick = function() {
            this.style.background = 'green';
            this.style.color = 'black';
            txt_2.style.background = '#ff3d74';
            this.innerText = "i'm glad you waited";
            level_2_h1_txt.innerText = "sugoi desu!";
            this.onclick = function() {null};
            On_next_level();
        }
    }, 4000);
}
// Level 3
function hidden_button() {
    level_3_h1_txt.innerText = "wow you're so smart UwU";
    txt_3.style.background = "#ff3d74";
    On_next_level(onstart_Lvl_4());
}
// Level 4
function onstart_Lvl_4(bol, btn) {
    let buttons = [
    document.getElementById('btn_1'),
    document.getElementById('btn_2'),
    document.getElementById('btn_3'),
    document.getElementById('btn_4'),
    document.getElementById('btn_5'),
    document.getElementById('btn_6'),
    document.getElementById('btn_7'),
    document.getElementById('btn_8'),
    document.getElementById('btn_9')
    ]

    if(!bol)
    {
        // scramble functions thingy

        let random_number = Math.floor(Math.random(0) * 5) + 1;
    
        switch(random_number){
        case 1 : 
            buttons[0].style.background = 'red';
            buttons[1].style.background = 'green';
            buttons[2].style.background = 'red';
            buttons[3].style.background = 'red';
            buttons[4].style.background = 'red';
            buttons[5].style.background = 'green';
            buttons[6].style.background = 'green';
            buttons[7].style.background = 'red';
            buttons[8].style.background = 'green';
        break;
        case 2 : 
            buttons[0].style.background = 'green';
            buttons[1].style.background = 'red';
            buttons[2].style.background = 'red';
            buttons[3].style.background = 'green';
            buttons[4].style.background = 'green';
            buttons[5].style.background = 'red';
            buttons[6].style.background = 'green';
            buttons[7].style.background = 'red';
            buttons[8].style.background = 'green';
        break;
        case 3 : 
            buttons[0].style.background = 'red';
            buttons[1].style.background = 'green';
            buttons[2].style.background = 'red';
            buttons[3].style.background = 'green';
            buttons[4].style.background = 'red';
            buttons[5].style.background = 'green';
            buttons[6].style.background = 'green';
            buttons[7].style.background = 'red';
            buttons[8].style.background = 'green';
        break;
        case 4 : 
            buttons[0].style.background = 'red';
            buttons[1].style.background = 'green';
            buttons[2].style.background = 'green';
            buttons[3].style.background = 'red';
            buttons[4].style.background = 'red';
            buttons[5].style.background = 'green';
            buttons[6].style.background = 'red';
            buttons[7].style.background = 'green';
            buttons[8].style.background = 'green';
        break;
        case 5 : 
            buttons[0].style.background = 'red';
            buttons[1].style.background = 'green';
            buttons[2].style.background = 'red';
            buttons[3].style.background = 'green';
            buttons[4].style.background = 'green';
            buttons[5].style.background = 'green';
            buttons[6].style.background = 'red';
            buttons[7].style.background = 'green';
            buttons[8].style.background = 'red';
        break;    
        }
    }

    //hover effect
    buttons.forEach((item) => {
        item.onmouseenter = function() {
            this.style.opacity = '0.5';
        }
        item.onmouseleave = function() {
            this.style.opacity = '1';
        }
        item.onfocus = function() {
            this.style.opacity = '0.5';
        }
        item.onblur = function() {
            this.style.opacity = '1';
        }
    });

    set_colour_text();
    
    switch(btn){
            case 'btn1':
                buttons[0].style.background = 'green';
                buttons[2].style.background = 'red';
                buttons[4].style.background = 'green';
                set_colour_text();
            break;
            case 'btn2':
                buttons[5].style.background = 'red';
                buttons[8].style.background = 'red';
                buttons[4].style.background = 'green';
                set_colour_text();
            break;
            case 'btn3':
                buttons[8].style.background = 'green';
                buttons[2].style.background = 'red';
                buttons[6].style.background = 'green';
                set_colour_text();
            break;
            case 'btn4':
                buttons[3].style.background = 'green';
                buttons[7].style.background = 'green';
                buttons[1].style.background = 'red';
                set_colour_text();
            break;
            case 'btn5':
                buttons[0].style.background = 'green';
                buttons[5].style.background = 'green';
                buttons[8].style.background = 'green';
                buttons[1].style.background = 'green';
                set_colour_text();
            break;
            case 'btn6':
                buttons[7].style.background = 'red';
                buttons[5].style.background = 'green';
                buttons[3].style.background = 'red';
                set_colour_text();
            break;
            case 'btn7':
                buttons[8].style.background = 'green';
                buttons[4].style.background = 'green';
                buttons[3].style.background = 'red';
                set_colour_text();
            break;
            case 'btn8':
                buttons[2].style.background = 'green';
                buttons[5].style.background = 'red';
                buttons[7].style.background = 'green';
                set_colour_text();
            break;
            case 'btn9':
                buttons[4].style.background = 'red';
                buttons[0].style.background = 'red';
                buttons[1].style.background = 'red';
                set_colour_text();
            break;
    }

    // changes the color and its text    
    function set_colour_text() {
        buttons.forEach((item) => {
            n = item;
            n.innerText = n.style.background;
            n.innerText = n.textContent.toUpperCase(); 
        });
    }

    if(buttons.every((array) => 'GREEN' === array.innerText)){
        level_4_h1_txt.innerText = "Greenier nice";
        level_4_h1_txt.style.color = 'green';
        txt_4.style.background = "#ff3d74";
        n_code = () => {level_5_Input.focus();};
        On_next_level(n_code);
    }
}
// Level 5
function guessTheLetter(event) {
    // i use the input element so it can work on mobile
    // the event Listener won't work on mobile :(
    // if(isMobile){
    //     // level_5_Input.cho
    // }
    level_5_Input.value = '';
    let span = [
        document.getElementById('fifth_spell_1'),
        document.getElementById('fifth_spell_2'),
        document.getElementById('fifth_spell_3'),
        document.getElementById('fifth_spell_4'),
        document.getElementById('fifth_spell_5'),
        document.getElementById('fifth_spell_6'),
    ]
    codes = 0;
    leters = '';
    switch(num){
        case 0: codes = 76; leters = "L"; break;
        case 1: codes = 69; leters = "E"; break;
        case 2: codes = 86; leters = "V"; break;
        case 3: codes = 69; leters = "E"; break;
        case 4: codes = 76; leters = "L"; break;
        case 5: if(event.keyCode == 54) {codes = 54} else if(event.keyCode == 102) {codes = 102}; leters = " 6";
        break;
    }
    if(event.keyCode == codes){
        span[num].innerText = leters;
        ++num;
    }
    spell = "";
    for(i=0;i<span.length;i++){
        spell += span[i].innerText;
    }

    if(spell == "LEVEL 6") {
        num = 0;
        On_next_level();
    }
}
//level 6
function miniCodeQuiz() {
    if(level_6_input_1.value === ''||level_6_input_2.value === ''){
        alert_Message('input_2');
    }

    if(level_6_input_1.value == "level" && level_6_input_2.value == "()")  {
        x = prompt("proceed to the next level");
        if(x == "Yes") {
            level_6_h1_txt.innerText = "big brain";
            txt_6.style.background = "#ff3d74";
            n_code = () => {
                level_Input_7.focus();
                if(isFullScreen){
                    document.documentElement.requestFullscreen();
                }
            }
            On_next_level(n_code);
        } else {
            alert_Message('button_2');
            miniCodeQuiz();
        }
    }
}
//Level 7
function input_Check_Lv7(event) {
    if(event.keyCode === 13) {
        if(level_Input_7.value === "pink") {

            txt_7.style.background = "#ff3d74";
            level_7_h1_txt.innerText = "nande aitsuraha pinku?";
            level_Input_7.value = 'CORRECT';
            n_code = () => {
                level_Input_8.focus();
            }
            On_next_level(n_code);
        } else {
            alert_Message("input");
        }
    }
}
//Level 8
function input_Check_Lv8(event) {
    if(event.keyCode === 13) {
        if(level_Input_8.value === "orange") {
            txt_8.style.background = "#ff3d74";
            level_8_h1_txt.innerText = "Orange Orange Orange Orange";
            level_Input_8.value = 'CORRECT';
            On_next_level();
        } else {
            alert_Message("input");
        }
    }
}
//Level 9
// function