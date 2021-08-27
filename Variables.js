//This script handles all the global variables

// let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let isFullScreen = false;
// for n_LevelFunc
let Count_level = 0;

// Level 1 Id's
let start_btn = document.getElementById('main_start');
let level_1_page = document.getElementById('first_Level');
let level_Input_1 = document.getElementById('level_1_input');
let level_1_clue = document.getElementById('h1_clue');
let level_1_error = 0;
// Level 2 Id's
let level_2_page = document.getElementById('second_Level');
let level_2_h1_txt = document.getElementById('h1_txt');
let level_2_btn = document.getElementById('btn');
// Level 3 Id's
let level_3_page = document.getElementById('third_Level');
let level_3_h1_txt = document.getElementById('h1_txt_3');
// Level 4 Id's
let level_4_page = document.getElementById('fourth_Level');
let level_4_h1_txt = document.getElementById('h1_txt_4');
// Level 5 Id's
let level_5_page = document.getElementById('fifth_Level');
let level_5_h1_txt = document.getElementById('h1_txt_5');
let level_5_Input = document.getElementById('input_5');
let num = 0;
// Level 6 Id's
let level_6_page = document.getElementById('sixth_Level');
let level_6_h1_txt = document.getElementById('h1_txt_6');
let level_6_input_1 = document.getElementById('code_First');
let level_6_input_2 = document.getElementById('code_Second'); 
// Level 7 Id's
let level_7_page = document.getElementById('seventh_Level');
let level_Input_7 = document.getElementById('level_7_input');
let level_7_h1_txt = document.getElementById('h1_txt_7');
// Level 8 Id's
let level_8_page = document.getElementById('eight_Level');
let level_Input_8 = document.getElementById('level_8_input');
let level_8_h1_txt = document.getElementById('h1_txt_8');
//title
let title = document.getElementById('taytol');
//containers 
let txt_1 = document.getElementById('text_container_1');
let txt_2 = document.getElementById('text_container_2');
let txt_3 = document.getElementById('text_container_3');
let txt_4 = document.getElementById('text_container_4');
let txt_5 = document.getElementById('text_container_5');
let txt_6 = document.getElementById('text_container_6');
let txt_7 = document.getElementById('text_container_7');
let txt_8 = document.getElementById('text_container_8');
let txt_9 = document.getElementById('text_container_9');
